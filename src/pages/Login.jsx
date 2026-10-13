import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'
import { mostrarAlerta } from '../utils/alertas'

function Login({ usuario, onIniciarSesion }) {
  usePageTitle('Iniciar sesión')
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [enviando, setEnviando] = useState(false)

  // Si ya hay sesión iniciada, lo mandamos al perfil
  if (usuario) return <Navigate to="/perfil" replace />

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviando(true)
    try {
      await onIniciarSesion(email, password)
      navigate('/perfil')
    } catch (error) {
      mostrarAlerta('error', 'No pudimos iniciar sesión', error.message)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={5}>
          <h1 className="fs-2 mb-4">Iniciar <span className="text-lime">sesión</span></h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Button type="submit" variant="light" className="rounded-0 text-uppercase w-100" disabled={enviando}>
              {enviando ? 'Ingresando...' : 'Ingresar'}
            </Button>
          </Form>
          <p className="mt-4 text-secondary">
            ¿Todavía no tenés cuenta? <Link to="/registro" className="text-lime">Creá una</Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
