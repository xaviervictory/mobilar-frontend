import { Link } from 'react-router-dom'
import { Container, Table, Button, Image } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'

function Cart({ carrito, onCambiarCantidad, onQuitar, onVaciar }) {
  usePageTitle('Carrito')
  const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  if (carrito.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h1 className="fs-2 mb-3">Tu carrito está vacío</h1>
        <Button as={Link} to="/tienda" variant="light" className="rounded-0 text-uppercase">Ir a la tienda</Button>
      </Container>
    )
  }

  return (
    <Container className="py-5">
      <h1 className="fs-2 mb-4">Carrito</h1>
      <Table responsive variant="dark" className="align-middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>
                <Image src={item.imagen} alt={item.nombre} width={50} className="me-3" />
                {item.nombre}
              </td>
              <td>$ {item.precio.toLocaleString('es-AR')}</td>
              <td>
                <Button variant="outline-light" size="sm" onClick={() => onCambiarCantidad(item.id, -1)}>−</Button>
                <span className="mx-2">{item.cantidad}</span>
                <Button variant="outline-light" size="sm" onClick={() => onCambiarCantidad(item.id, 1)}>+</Button>
              </td>
              <td>$ {(item.precio * item.cantidad).toLocaleString('es-AR')}</td>
              <td>
                <Button variant="outline-danger" size="sm" onClick={() => onQuitar(item.id)}>Quitar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center">
        <Button variant="outline-secondary" onClick={onVaciar}>Vaciar carrito</Button>
        <p className="fs-4 mb-0">Total: <span className="text-lime">$ {total.toLocaleString('es-AR')}</span></p>
      </div>
    </Container>
  )
}

export default Cart
