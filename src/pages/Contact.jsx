import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import usePageTitle from '../hooks/usePageTitle'
import { datosContacto } from '../data/contacto'

function Contact({ usuario }) {
  usePageTitle('Contacto')

  return (
    <>
      <header className="bg-black border-bottom border-secondary-subtle py-5">
        <Container>
          <p className="small text-uppercase text-secondary mb-2">Estamos para ayudarte</p>
          <h1 className="display-5 fw-bold">
            <span className="text-lime">Contacto</span>
          </h1>
          <p className="col-lg-7 fs-5 mb-0">
            ¿Dudas sobre un pedido, un talle o un cambio? Escribinos y te respondemos lo antes posible.
            Mirá también nuestras <Link to="/nosotros#preguntas-frecuentes" className="text-lime">preguntas frecuentes</Link>.
          </p>
        </Container>
      </header>

      <Container className="py-5">
        <Row className="g-5">
          <Col lg={7}>
            <section aria-labelledby="formulario">
              <h2 id="formulario" className="fs-4 mb-4">Envianos un mensaje</h2>
              <ContactForm nombreInicial={usuario?.nombre} emailInicial={usuario?.email} />
            </section>
          </Col>
          <Col lg={5}>
            <section aria-labelledby="datos">
              <h2 id="datos" className="fs-4 mb-4">Otras formas de contactarnos</h2>
              <ContactInfo datos={datosContacto} />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
