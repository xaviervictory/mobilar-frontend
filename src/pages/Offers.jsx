import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import usePageTitle from '../hooks/usePageTitle'
import { productos } from '../data/products'

function Offers() {
  usePageTitle('Ofertas')
  const ofertas = productos.filter((p) => p.oferta)

  return (
    <Container className="py-5">
      <h1 className="fs-2 mb-4">Ofertas <span className="text-lime">NOIR</span></h1>
      <Row xs={1} sm={2} lg={4} className="g-3">
        {ofertas.map((p) => (
          <Col key={p.id}>
            <ProductCard categoria={p.categoria} nombre={p.nombre} precio={p.precio} imagen={p.imagen} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Offers
