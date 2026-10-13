import { Envelope, Telephone, GeoAlt, Clock } from 'react-bootstrap-icons'

// Reemplazá estos datos de ejemplo por los reales de tu tienda
export const datosContacto = [
  { id: 1, icono: Envelope, titulo: 'Email', detalle: 'contacto@noir.com', enlace: 'mailto:contacto@noir.com' },
  { id: 2, icono: Telephone, titulo: 'WhatsApp', detalle: '+54 381 000 0000', enlace: 'https://wa.me/543810000000' },
  { id: 3, icono: GeoAlt, titulo: 'Ubicación', detalle: 'San Miguel de Tucumán, Argentina' },
  { id: 4, icono: Clock, titulo: 'Horarios', detalle: 'Lunes a viernes, de 9 a 18 h' },
]

export const asuntos = [
  'Consulta general',
  'Estado de mi pedido',
  'Cambios y devoluciones',
  'Talles y productos',
  'Otro',
]
