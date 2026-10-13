import { Card, Button } from 'react-bootstrap'
import { ArrowRight } from 'react-bootstrap-icons'

function BannerCard({ subtitulo, titulo, destacado, texto, boton, imagen }) {
  return (
    <Card bg="dark" text="light" className="h-100 border-secondary-subtle rounded-1 overflow-hidden">
      <Card.Img src={imagen} alt={titulo} className="h-100 object-fit-cover opacity-50" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center">
        {subtitulo && <small className="text-uppercase">{subtitulo}</small>}
        <Card.Title as="h2" className="fs-3">
          {titulo} {destacado && <span className="text-lime d-block">{destacado}</span>}
        </Card.Title>
        {texto && <Card.Text>{texto}</Card.Text>}
        <div><Button variant="light" size="sm" className="rounded-0 text-uppercase">{boton} <ArrowRight /></Button></div>
      </Card.ImgOverlay>
    </Card>
  )
}

export default BannerCard
