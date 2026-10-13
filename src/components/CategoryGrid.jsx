import { Row, Col, Card } from 'react-bootstrap'

function CategoryGrid({ categorias }) {
  return (
    <section className="h-100 border border-secondary-subtle p-3">
      <h2 className="fs-6 mb-3">Categorías</h2>
      <Row xs={3} md={5} className="g-2">
        {categorias.map((c) => (
          <Col key={c.id}>
            <Card bg="dark" text="light" className="text-center h-100 border-secondary-subtle rounded-1 py-3">
              <span className="fs-2">{c.icono}</span>
              <small>{c.nombre}</small>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default CategoryGrid
