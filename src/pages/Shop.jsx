import { useSearchParams } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import usePageTitle from '../hooks/usePageTitle'
import { productos, categorias } from '../data/products'

function Shop({ onAgregar }) {
  usePageTitle('Tienda')
  const [params, setParams] = useSearchParams()
  const categoria = params.get('categoria')
  const lista = categoria ? productos.filter((p) => p.categoria === categoria) : productos

  return (
    <Container className="py-5">
      <h1 className="fs-2 mb-4">Tienda</h1>
      <div className="d-flex flex-wrap gap-2 mb-4">
        <Button variant={categoria ? 'outline-light' : 'light'} size="sm" onClick={() => setParams({})}>
          Todos
        </Button>
        {categorias.map((c) => (
          <Button
            key={c.id}
            variant={categoria === c.nombre ? 'light' : 'outline-light'}
            size="sm"
            onClick={() => setParams({ categoria: c.nombre })}
          >
            {c.nombre}
          </Button>
        ))}
      </div>
      {lista.length === 0 && <p className="text-secondary">No hay productos en esta categoría todavía.</p>}
      <Row xs={1} sm={2} lg={4} className="g-3">
        {lista.map((p) => (
          <Col key={p.id}>
            <ProductCard
              categoria={p.categoria}
              nombre={p.nombre}
              precio={p.precio}
              imagen={p.imagen}
              onAgregar={() => onAgregar(p)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Shop
