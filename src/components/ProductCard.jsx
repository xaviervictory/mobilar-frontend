import { Card, Button } from 'react-bootstrap'
import { Cart } from 'react-bootstrap-icons'

function ProductCard({ categoria, nombre, precio, imagen, onAgregar }) {
  return (
    <Card bg="dark" text="light" className="h-100 border-secondary-subtle rounded-1">
      <Card.Img
        variant="top"
        src={imagen}
        alt={nombre}
        className="rounded-0 object-fit-contain bg-white p-3"
        style={{ height: 280 }}
      />
      <Card.Body className="d-flex flex-column">
        <small className="text-secondary text-uppercase">{categoria}</small>
        <Card.Title as="h3" className="fs-6 text-capitalize">{nombre}</Card.Title>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fw-semibold">$ {precio.toLocaleString('es-AR')}</span>
          <Button
            variant="outline-light"
            size="sm"
            className="border-0"
            onClick={onAgregar}
            aria-label={`Agregar ${nombre} al carrito`}
          >
            <Cart size={20} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
