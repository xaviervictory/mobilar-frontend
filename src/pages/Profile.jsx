import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'
import { mostrarAlerta } from '../utils/alertas'

function Profile({ usuario, cantidadCarrito, onCerrarSesion }) {
  usePageTitle('Mi perfil')
  const navigate = useNavigate()

  // Ruta protegida: sin sesión, se redirige al login
  if (!usuario) return <Navigate to="/login" replace />

  const inicial = usuario.nombre.charAt(0).toUpperCase()
  const fechaAlta = new Date(usuario.creadoEn).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const handleCerrarSesion = () => {
    onCerrarSesion()
    mostrarAlerta('info', 'Sesión cerrada', '¡Hasta pronto!')
    navigate('/')
  }

  return (
    <Container className="py-5">
      <h1 className="fs-2 mb-4">Mi <span className="text-lime">perfil</span></h1>
      <Row className="g-4">
        <Col md={5} lg={4}>
          <Card bg="dark" text="light" className="border-secondary-subtle rounded-1 text-center p-4">
            <div
              className="rounded-circle bg-light text-dark d-flex align-items-center justify-content-center fs-1 fw-bold mx-auto mb-3"
              style={{ width: 100, height: 100 }}
            >
              {inicial}
            </div>
            <h2 className="fs-4">{usuario.nombre}</h2>
            <p className="text-secondary mb-0">{usuario.email}</p>
          </Card>
        </Col>
        <Col md={7} lg={8}>
          <Card bg="dark" text="light" className="border-secondary-subtle rounded-1 p-4">
            <h2 className="fs-5 mb-3">Datos de la cuenta</h2>
            <dl className="row mb-4">
              <dt className="col-sm-4 text-secondary">Nombre</dt>
              <dd className="col-sm-8">{usuario.nombre}</dd>
              <dt className="col-sm-4 text-secondary">Email</dt>
              <dd className="col-sm-8">{usuario.email}</dd>
              <dt className="col-sm-4 text-secondary">Miembro desde</dt>
              <dd className="col-sm-8">{fechaAlta}</dd>
              <dt className="col-sm-4 text-secondary">Carrito</dt>
              <dd className="col-sm-8">
                {cantidadCarrito} {cantidadCarrito === 1 ? 'producto' : 'productos'}
              </dd>
            </dl>
            <div className="d-flex flex-wrap gap-2">
              <Button as={Link} to="/carrito" variant="light" className="rounded-0 text-uppercase">Ver carrito</Button>
              <Button as={Link} to="/tienda" variant="outline-light" className="rounded-0 text-uppercase">Seguir comprando</Button>
              <Button variant="outline-danger" className="rounded-0 text-uppercase ms-md-auto" onClick={handleCerrarSesion}>
                Cerrar sesión
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
