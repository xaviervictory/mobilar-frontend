import { Container } from 'react-bootstrap'
import { Truck, CreditCard, ArrowRepeat, Instagram, Tiktok, Twitter, Youtube } from 'react-bootstrap-icons'

const info = [
  { icono: Truck, texto: 'Envíos a todo el país' },
  { icono: CreditCard, texto: 'Pagos seguros' },
  { icono: ArrowRepeat, texto: 'Cambios y devoluciones' },
]
const redes = [Instagram, Tiktok, Twitter, Youtube]

function TopBar() {
  return (
    <div className="bg-black border-bottom border-secondary-subtle small py-2 d-none d-md-block">
      <Container className="d-flex justify-content-between align-items-center">
        {info.map(({ icono: Icono, texto }) => (
          <span key={texto}><Icono className="me-2" />{texto}</span>
        ))}
        <span className="d-flex gap-3">
          {redes.map((Red, i) => <Red key={i} />)}
        </span>
      </Container>
    </div>
  )
}

export default TopBar
