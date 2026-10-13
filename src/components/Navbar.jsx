import { Link, NavLink } from 'react-router-dom'
import { Navbar as BsNavbar, Nav, NavDropdown, Container, Form, InputGroup, Badge } from 'react-bootstrap'
import { Search, Person, Cart } from 'react-bootstrap-icons'
import { categoriasTienda } from '../data/categoriasTienda'

const links = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Tienda', ruta: '/tienda' },
  { texto: 'Ofertas', ruta: '/ofertas' },
  { texto: 'Nosotros', ruta: '/nosotros' },
  { texto: 'Contacto', ruta: '/contacto' },
]

function Navbar({ cantidad }) {
  return (
    <BsNavbar expand="lg" bg="black" variant="dark" sticky="top" className="py-3">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="fs-2 fw-bold">NOIR</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="menu-noir" />
        <BsNavbar.Collapse id="menu-noir">
          <Nav className="mx-auto gap-lg-3">
            {links.slice(0, 2).map((l) => (
              <Nav.Link key={l.ruta} as={NavLink} to={l.ruta} end>{l.texto}</Nav.Link>
            ))}
            <NavDropdown title="Categorías" menuVariant="dark">
              {categoriasTienda.map((c) => (
                <NavDropdown.Item key={c} as={Link} to={`/tienda?categoria=${c}`}>
                  {c}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {links.slice(2).map((l) => (
              <Nav.Link key={l.ruta} as={NavLink} to={l.ruta}>{l.texto}</Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex align-items-center gap-3">
            <InputGroup>
              <Form.Control type="search" placeholder="Buscar productos..." className="rounded-start-pill bg-transparent" />
              <InputGroup.Text className="rounded-end-pill bg-transparent"><Search /></InputGroup.Text>
            </InputGroup>
            <Person size={26} />
            <Link to="/carrito" className="position-relative text-light" aria-label="Ver carrito">
              <Cart size={26} />
              <Badge pill bg="light" text="dark" className="position-absolute top-0 start-100 translate-middle">
                {cantidad}
              </Badge>
            </Link>
          </Form>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}

export default Navbar
