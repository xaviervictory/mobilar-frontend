import { Accordion } from 'react-bootstrap'

function FaqAccordion({ preguntas }) {
  return (
    <Accordion defaultActiveKey="0" flush>
      {preguntas.map((p, indice) => (
        <Accordion.Item key={p.id} eventKey={String(indice)} className="bg-transparent border-secondary-subtle">
          <Accordion.Header>{p.pregunta}</Accordion.Header>
          <Accordion.Body className="text-secondary">{p.respuesta}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

export default FaqAccordion
