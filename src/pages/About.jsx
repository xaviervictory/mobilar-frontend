import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ValuesGrid from '../components/ValuesGrid'
import FaqAccordion from '../components/FaqAccordion'
import usePageTitle from '../hooks/usePageTitle'
import { valores, preguntasFrecuentes } from '../data/nosotros'

function About() {
  usePageTitle('Nosotros y preguntas frecuentes')

  return (
    <>
      <header className="bg-black border-bottom border-secondary-subtle py-5">
        <Container>
          <p className="small text-uppercase text-secondary mb-2">Sobre la marca</p>
          <h1 className="display-5 fw-bold">
            Somos <span className="text-lime">NOIR</span>
          </h1>
          <p className="col-lg-7 fs-5 mb-4">
            Indumentaria streetwear con estética oscura y urbana. Creamos prendas oversize,
            básicos y colecciones de temporada para quienes visten con actitud.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <Button as={Link} to="/tienda" variant="light" className="rounded-0 text-uppercase">Ver la tienda</Button>
            <Button href="#preguntas-frecuentes" variant="outline-light" className="rounded-0 text-uppercase">
              Preguntas frecuentes
            </Button>
          </div>
        </Container>
      </header>

      <Container className="py-5">
        <section aria-labelledby="historia" className="mb-5">
          <Row className="g-4">
            <Col lg={4}>
              <h2 id="historia" className="fs-4">Nuestra historia</h2>
            </Col>
            <Col lg={8}>
              <p>
                NOIR nació de la idea de que la ropa cómoda también puede tener personalidad.
                Empezamos con unos pocos buzos y remeras y hoy diseñamos colecciones completas,
                siempre con el negro como protagonista.
              </p>
              <p className="mb-0">
                Cada prenda se piensa para el día a día: telas resistentes, cortes amplios
                y detalles que no pasan desapercibidos.
              </p>
            </Col>
          </Row>
        </section>

        <section aria-labelledby="valores" className="mb-5">
          <h2 id="valores" className="fs-4 mb-4">Lo que nos define</h2>
          <ValuesGrid valores={valores} />
        </section>

        <section id="preguntas-frecuentes" aria-labelledby="faq" className="mb-5">
          <Row className="g-4">
            <Col lg={4}>
              <h2 id="faq" className="fs-4">Preguntas <span className="text-lime">frecuentes</span></h2>
              <p className="text-secondary">Resolvemos las dudas más comunes sobre tus compras.</p>
            </Col>
            <Col lg={8}>
              <FaqAccordion preguntas={preguntasFrecuentes} />
            </Col>
          </Row>
        </section>

        <section aria-labelledby="contacto-cta" className="border border-secondary-subtle p-4 text-center">
          <h2 id="contacto-cta" className="fs-4">¿No encontraste tu respuesta?</h2>
          <p className="text-secondary">Escribinos y te ayudamos.</p>
          <Button as={Link} to="/contacto" variant="light" className="rounded-0 text-uppercase">Contactanos</Button>
        </section>
      </Container>
    </>
  )
}

export default About
