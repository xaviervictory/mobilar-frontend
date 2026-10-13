import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'

function FeaturedProducts({ productos }) {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fs-4">Productos destacados</h2>
        <Link to="/tienda" className="small text-secondary text-decoration-none text-uppercase">Ver todos →</Link>
      </div>
      <Row xs={1} sm={2} xl={4} className="g-3">
        {productos.map((p) => (
          <Col key={p.id}>
            <ProductCard categoria={p.categoria} nombre={p.nombre} precio={p.precio} imagen={p.imagen} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default FeaturedProducts
