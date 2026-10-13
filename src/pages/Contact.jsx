import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'

function Contact() {
  usePageTitle('Contacto')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Más adelante: enviar el formulario y avisar con SweetAlert2
  }

  return (
    <Container className="py-5">
      <h1 className="fs-2 mb-4">Contacto</h1>
      <Row>
        <Col lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="tu@email.com" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={4} required />
            </Form.Group>
            <Button type="submit" variant="light" className="rounded-0 text-uppercase">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
