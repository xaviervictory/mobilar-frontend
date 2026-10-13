import { Row, Col, Card } from 'react-bootstrap'

function ValuesGrid({ valores }) {
  return (
    <Row xs={1} sm={2} lg={4} className="g-3">
      {valores.map((v) => (
        <Col key={v.id}>
          <Card bg="dark" text="light" className="h-100 border-secondary-subtle rounded-1 p-3">
            <span className="fs-2 mb-2" aria-hidden="true">{v.icono}</span>
            <h3 className="fs-6">{v.titulo}</h3>
            <p className="text-secondary mb-0">{v.texto}</p>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ValuesGrid
