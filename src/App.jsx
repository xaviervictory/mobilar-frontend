import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Offers from './pages/Offers'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { registrarUsuario, iniciarSesionUsuario, leerSesion, guardarSesion } from './services/auth'

function leerCarrito() {
  try {
    return JSON.parse(localStorage.getItem('carrito')) || []
  } catch {
    return []
  }
}

function App() {
  // Estado del carrito: lista de productos con su cantidad
  const [carrito, setCarrito] = useState(leerCarrito)

  // Estado de la sesión: null si nadie inició sesión
  const [usuario, setUsuario] = useState(leerSesion)

  // Guarda el carrito cada vez que cambia
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  // Guarda la sesión cada vez que el usuario inicia o cierra sesión
  useEffect(() => {
    guardarSesion(usuario)
  }, [usuario])

  const registrar = async (datos) => {
    const nuevo = await registrarUsuario(datos)
    setUsuario(nuevo)
  }

  const iniciarSesion = async (email, password) => {
    const existente = await iniciarSesionUsuario(email, password)
    setUsuario(existente)
  }

  const cerrarSesion = () => setUsuario(null)

  const agregarAlCarrito = (producto) => {
    setCarrito((actual) => {
      const existe = actual.find((item) => item.id === producto.id)
      if (existe) {
        return actual.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      }
      return [...actual, { ...producto, cantidad: 1 }]
    })
  }

  const cambiarCantidad = (id, cambio) => {
    setCarrito((actual) =>
      actual
        .map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + cambio } : item))
        .filter((item) => item.cantidad > 0)
    )
  }

  const quitarDelCarrito = (id) => setCarrito((actual) => actual.filter((item) => item.id !== id))
  const vaciarCarrito = () => setCarrito([])

  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0)

  return (
    <div data-bs-theme="dark">
      <TopBar />
      <Navbar cantidad={cantidadTotal} usuario={usuario} />
      <main>
        <Routes>
          <Route path="/" element={<Home onAgregar={agregarAlCarrito} />} />
          <Route path="/tienda" element={<Shop onAgregar={agregarAlCarrito} />} />
          <Route path="/ofertas" element={<Offers onAgregar={agregarAlCarrito} />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route
            path="/carrito"
            element={
              <Cart
                carrito={carrito}
                onCambiarCantidad={cambiarCantidad}
                onQuitar={quitarDelCarrito}
                onVaciar={vaciarCarrito}
              />
            }
          />
          <Route path="/login" element={<Login usuario={usuario} onIniciarSesion={iniciarSesion} />} />
          <Route path="/registro" element={<Register usuario={usuario} onRegistrar={registrar} />} />
          <Route
            path="/perfil"
            element={<Profile usuario={usuario} cantidadCarrito={cantidadTotal} onCerrarSesion={cerrarSesion} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
