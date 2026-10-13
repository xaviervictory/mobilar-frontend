import { Carousel, Button } from 'react-bootstrap'
import { ArrowRight } from 'react-bootstrap-icons'

const slides = [
  { id: 1, etiqueta: 'Estilo urbano / Streetwear', titulo: 'Vestí tu', destacado: 'propia historia', texto: 'Ropa urbana, cómoda y con actitud. Descubrí la colección que define tu estilo.', imagen: '/images/hero-1.jpg' },
  { id: 2, etiqueta: 'Nueva temporada', titulo: 'Oversize', destacado: 'sin límites', texto: 'Buzos y remeras con corte amplio para todos los días.', imagen: '/images/hero-2.jpg' },
  { id: 3, etiqueta: 'Básicos', titulo: 'Urban', destacado: 'Essentials', texto: 'Las prendas que nunca fallan, en negro y más.', imagen: '/images/hero-3.jpg' },
]

function HeroCarousel() {
  return (
    <Carousel indicators={false} interval={5000}>
      {slides.map((s) => (
        <Carousel.Item key={s.id}>
          <div className="position-relative bg-black" style={{ height: 420 }}>
            <img src={s.imagen} alt={s.titulo + ' ' + s.destacado} className="w-100 h-100 object-fit-cover" />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
            <div className="position-absolute top-50 start-0 translate-middle-y ps-5 pe-3 text-light">
              <p className="small text-uppercase mb-2">{s.etiqueta}</p>
              <h1 className="display-4 fw-bold">{s.titulo}<br /><span className="text-lime">{s.destacado}</span></h1>
              <p className="col-md-8">{s.texto}</p>
              <Button variant="light" className="rounded-0 text-uppercase">Explorar colección <ArrowRight /></Button>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default HeroCarousel
