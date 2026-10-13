import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'
import { mostrarAlerta } from '../utils/alertas'

function Register({ usuario, onRegistrar }) {
  usePageTitle('Crear cuenta')
  const navigate = useNavigate()

  // Un estado por cada campo del formulario
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [enviando, setEnviando] = useState(false)

  // Si ya hay sesión iniciada, no tiene sentido registrarse
  if (usuario) return <Navigate to="/perfil" replace />

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password.length < 6) {
      mostrarAlerta('warning', 'Contraseña muy corta', 'Debe tener al menos 6 caracteres.')
      return
    }
    if (password !== confirmar) {
      mostrarAlerta('warning', 'Las contraseñas no coinciden')
      return
    }

    setEnviando(true)
    try {
      await onRegistrar({ nombre, email, password })
      await mostrarAlerta('success', '¡Cuenta creada!', 'Ya podés ver tu perfil.')
      navigate('/perfil')
    } catch (error) {
      mostrarAlerta('error', 'No pudimos crear la cuenta', error.message)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={5}>
          <h1 className="fs-2 mb-4">Crear <span className="text-lime">cuenta</span></h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <Form.Text className="text-secondary">Mínimo 6 caracteres.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-4" controlId="confirmar">
              <Form.Label>Repetir contraseña</Form.Label>
              <Form.Control type="password" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} required />
            </Form.Group>
            <Button type="submit" variant="light" className="rounded-0 text-uppercase w-100" disabled={enviando}>
              {enviando ? 'Creando...' : 'Crear cuenta'}
            </Button>
          </Form>
          <p className="mt-4 text-secondary">
            ¿Ya tenés cuenta? <Link to="/login" className="text-lime">Iniciá sesión</Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
