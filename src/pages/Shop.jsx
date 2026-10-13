import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Container, Row, Col, Button, Spinner, Alert } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import usePageTitle from '../hooks/usePageTitle'
import { NOMBRES_CATEGORIAS, categoriasTienda } from '../data/categoriasTienda'

const API_URL = import.meta.env.VITE_API_URL

function Shop({ onAgregar }) {
  usePageTitle('Tienda')

  // Estados: datos de la API, carga y error
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const [params, setParams] = useSearchParams()
  const categoria = params.get('categoria')

  // Se ejecuta una sola vez, cuando el componente carga ([] vacío)
  useEffect(() => {
    let activo = true // evita avisos duplicados si el efecto corre dos veces (StrictMode)

    const cargarProductos = async () => {
      try {
        const response = await axios.get(API_URL)
        if (!activo) return

        const adaptados = response.data
          .filter((p) => NOMBRES_CATEGORIAS[p.category]) // solo ropa y accesorios
          .map((p) => ({
            id: `api-${p.id}`,
            categoria: NOMBRES_CATEGORIAS[p.category],
            nombre: p.title,
            precio: p.price,
            imagen: p.image,
          }))
        setProductos(adaptados)
      } catch (err) {
        if (!activo) return
        setError('No pudimos cargar los productos. Intentá de nuevo más tarde.')
        Swal.fire({
          icon: 'error',
          title: 'Ups, algo salió mal',
          text: 'No pudimos cargar los productos. Intentá de nuevo más tarde.',
          background: '#111',
          color: '#fff',
          confirmButtonColor: '#d4ff8a',
        })
      } finally {
        if (activo) setCargando(false)
      }
    }

    cargarProductos()
    return () => {
      activo = false
    }
  }, [])

  const lista = categoria ? productos.filter((p) => p.categoria === categoria) : productos

  return (
    <Container className="py-5">
      <h1 className="fs-2 mb-4">Tienda</h1>

      <div className="d-flex flex-wrap gap-2 mb-4">
        <Button variant={categoria ? 'outline-light' : 'light'} size="sm" onClick={() => setParams({})}>
          Todos
        </Button>
        {categoriasTienda.map((c) => (
          <Button
            key={c}
            variant={categoria === c ? 'light' : 'outline-light'}
            size="sm"
            onClick={() => setParams({ categoria: c })}
          >
            {c}
          </Button>
        ))}
      </div>

      {cargando && (
        <div className="text-center py-5">
          <Spinner animation="border" variant="light" role="status">
            <span className="visually-hidden">Cargando productos...</span>
          </Spinner>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!cargando && !error && lista.length === 0 && (
        <p className="text-secondary">No hay productos en esta categoría todavía.</p>
      )}

      <Row xs={1} sm={2} lg={4} className="g-3">
        {lista.map((p) => (
          <Col key={p.id}>
            <ProductCard
              categoria={p.categoria}
              nombre={p.nombre}
              precio={p.precio}
              imagen={p.imagen}
              onAgregar={() => onAgregar(p)}
              fondoBlanco
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Shop
