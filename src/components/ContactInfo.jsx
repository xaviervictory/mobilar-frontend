import { Card } from 'react-bootstrap'

function ContactInfo({ datos }) {
  return (
    <div className="d-flex flex-column gap-3">
      {datos.map(({ id, icono: Icono, titulo, detalle, enlace }) => (
        <Card key={id} bg="dark" text="light" className="border-secondary-subtle rounded-1">
          <Card.Body className="d-flex align-items-center gap-3">
            <Icono size={28} className="text-lime flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="fs-6 mb-0">{titulo}</h3>
              {enlace ? (
                <a href={enlace} className="text-secondary text-decoration-none" target="_blank" rel="noreferrer">
                  {detalle}
                </a>
              ) : (
                <span className="text-secondary">{detalle}</span>
              )}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default ContactInfo
