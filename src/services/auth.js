// Autenticación SIMULADA con localStorage (proyecto educativo, sin servidor).
// En una app real, esto lo hace un backend o un servicio como Firebase Auth.

const USUARIOS_KEY = 'usuarios'
const SESION_KEY = 'sesion'

// Convierte la contraseña en un "hash" para no guardarla en texto plano
async function hashear(texto) {
  const datos = new TextEncoder().encode(texto)
  const buffer = await crypto.subtle.digest('SHA-256', datos)
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

function leerUsuarios() {
  try {
    return JSON.parse(localStorage.getItem(USUARIOS_KEY)) || []
  } catch {
    return []
  }
}

// Devuelve el usuario sin la contraseña
function datosPublicos(usuario) {
  const { passwordHash, ...publico } = usuario
  return publico
}

export async function registrarUsuario({ nombre, email, password }) {
  const usuarios = leerUsuarios()
  const emailNormalizado = email.trim().toLowerCase()

  if (usuarios.some((u) => u.email === emailNormalizado)) {
    throw new Error('Ya existe una cuenta con ese email.')
  }

  const nuevo = {
    id: Date.now(),
    nombre: nombre.trim(),
    email: emailNormalizado,
    passwordHash: await hashear(password),
    creadoEn: new Date().toISOString(),
  }

  localStorage.setItem(USUARIOS_KEY, JSON.stringify([...usuarios, nuevo]))
  return datosPublicos(nuevo)
}

export async function iniciarSesionUsuario(email, password) {
  const emailNormalizado = email.trim().toLowerCase()
  const usuario = leerUsuarios().find((u) => u.email === emailNormalizado)

  if (!usuario || usuario.passwordHash !== (await hashear(password))) {
    throw new Error('Email o contraseña incorrectos.')
  }

  return datosPublicos(usuario)
}

export function leerSesion() {
  try {
    return JSON.parse(localStorage.getItem(SESION_KEY)) || null
  } catch {
    return null
  }
}

export function guardarSesion(usuario) {
  if (usuario) {
    localStorage.setItem(SESION_KEY, JSON.stringify(usuario))
  } else {
    localStorage.removeItem(SESION_KEY)
  }
}
