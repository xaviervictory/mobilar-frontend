import { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { asuntos } from '../data/contacto'
import { mostrarAlerta } from '../utils/alertas'

// Opcional: URL de un servicio de formularios (por ejemplo Formspree) guardada en el .env
const CONTACT_URL = import.meta.env.VITE_CONTACT_URL
const LIMITE_MENSAJE = 500

function ContactForm({ nombreInicial = '', emailInicial = '' }) {
  const [nombre, setNombre] = useState(nombreInicial)
  const [email, setEmail] = useState(emailInicial)
  const [asunto, setAsunto] = useState(asuntos[0])
  const [mensaje, setMensaje] = useState('')
  const [enviando, setEnviando] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (nombre.trim().length < 2) {
      mostrarAlerta('warning', 'Revisá tu nombre', 'Escribí al menos 2 caracteres.')
      return
    }
    if (mensaje.trim().length < 10) {
      mostrarAlerta('warning', 'Mensaje muy corto', 'Contanos un poco más (mínimo 10 caracteres).')
      return
    }

    setEnviando(true)
    try {
      if (CONTACT_URL) {
        await axios.post(CONTACT_URL, { nombre, email, asunto, mensaje })
      } else {
        // Sin servicio configurado: simulamos el envío
        await new Promise((resolve) => setTimeout(resolve, 800))
      }
      await mostrarAlerta('success', '¡Mensaje enviado!', 'Gracias por escribirnos, te respondemos pronto.')
      setAsunto(asuntos[0])
      setMensaje('')
    } catch {
      mostrarAlerta('error', 'No pudimos enviar tu mensaje', 'Intentá de nuevo en unos minutos.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="contacto-nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contacto-email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contacto-asunto">
        <Form.Label>Asunto</Form.Label>
        <Form.Select value={asunto} onChange={(e) => setAsunto(e.target.value)}>
          {asuntos.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-4" controlId="contacto-mensaje">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          maxLength={LIMITE_MENSAJE}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
        <Form.Text className="text-secondary">{mensaje.length}/{LIMITE_MENSAJE} caracteres</Form.Text>
      </Form.Group>
      <Button type="submit" variant="light" className="rounded-0 text-uppercase" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar mensaje'}
      </Button>
    </Form>
  )
}

export default ContactForm
