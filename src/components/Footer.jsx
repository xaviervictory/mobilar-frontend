import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-black border-top border-secondary-subtle text-center text-secondary py-4 mt-5">
      <Container>
        <p className="fs-4 text-light fw-bold mb-1" style={{ fontFamily: 'Orbitron' }}>NOIR</p>
        <small>© {new Date().getFullYear()} NOIR. Todos los derechos reservados.</small>
      </Container>
    </footer>
  )
}

export default Footer
