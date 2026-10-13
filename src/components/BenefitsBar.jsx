import { Container, Row, Col } from 'react-bootstrap'
import { Truck, CreditCard, ShieldCheck, ArrowRepeat } from 'react-bootstrap-icons'

const beneficios = [
  { icono: Truck, titulo: 'Envíos a todo el país', texto: 'Rápidos y seguros' },
  { icono: CreditCard, titulo: 'Medios de pago', texto: 'Tarjetas, transferencias y más' },
  { icono: ShieldCheck, titulo: 'Compra segura', texto: 'Tus datos protegidos' },
  { icono: ArrowRepeat, titulo: 'Cambios y devoluciones', texto: 'Hasta 30 días' },
]

function BenefitsBar() {
  return (
    <section className="bg-black border-top border-bottom border-secondary-subtle py-4">
      <Container>
        <Row className="g-3">
          {beneficios.map(({ icono: Icono, titulo, texto }) => (
            <Col key={titulo} xs={12} sm={6} lg={3} className="d-flex align-items-center gap-3">
              <Icono size={36} />
              <div>
                <h3 className="fs-6 mb-0">{titulo}</h3>
                <small className="text-secondary">{texto}</small>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default BenefitsBar
