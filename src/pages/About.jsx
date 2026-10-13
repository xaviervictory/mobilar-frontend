import { Container, Row, Col } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'

const valores = [
  { titulo: 'Actitud', texto: 'Ropa pensada para quienes visten sin pedir permiso.' },
  { titulo: 'Calidad', texto: 'Telas resistentes y cortes cómodos para todos los días.' },
  { titulo: 'Comunidad', texto: 'Una marca que crece junto a la cultura urbana.' },
]

function About() {
  usePageTitle('Nosotros')

  return (
    <Container className="py-5">
      <h1 className="fs-2 mb-3">Sobre <span className="text-lime">NOIR</span></h1>
      <p className="col-lg-8 mb-5">
        NOIR es una marca de indumentaria streetwear. Creamos prendas oversize, básicos y
        colecciones de temporada con una estética oscura y urbana.
      </p>
      <Row className="g-4">
        {valores.map((v) => (
          <Col key={v.titulo} md={4}>
            <h2 className="fs-5">{v.titulo}</h2>
            <p className="text-secondary">{v.texto}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default About
