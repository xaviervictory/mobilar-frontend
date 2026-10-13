import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'

function NotFound() {
  usePageTitle('Página no encontrada')

  return (
    <Container className="py-5 text-center">
      <h1 className="display-1 text-lime">404</h1>
      <p className="mb-4">La página que buscás no existe.</p>
      <Button as={Link} to="/" variant="light" className="rounded-0 text-uppercase">Volver al inicio</Button>
    </Container>
  )
}

export default NotFound
