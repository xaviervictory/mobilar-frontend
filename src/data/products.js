const img = (texto, w = 600, h = 700) =>
  `https://placehold.co/${w}x${h}/1a1a1a/ffffff?text=${encodeURIComponent(texto)}`

export const productos = [
  { id: 1, categoria: 'Buzos', nombre: 'Buzo Oversize Graphic', precio: 89990, imagen: img('Buzo'), destacado: true },
  { id: 2, categoria: 'Remeras', nombre: 'Remera Boxy Essentials', precio: 39990, imagen: img('Remera'), destacado: true },
  { id: 3, categoria: 'Pantalones', nombre: 'Pantalón Cargo Street', precio: 69990, imagen: img('Pantalon'), destacado: true },
  { id: 4, categoria: 'Camperas', nombre: 'Campera Rompeviento', precio: 99990, imagen: img('Campera'), destacado: true },
  { id: 5, categoria: 'Remeras', nombre: 'Remera Oversize Noir', precio: 34990, imagen: img('Remera 2'), oferta: true },
  { id: 6, categoria: 'Buzos', nombre: 'Buzo Hoodie Básico', precio: 74990, imagen: img('Buzo 2'), oferta: true },
  { id: 7, categoria: 'Accesorios', nombre: 'Gorra Noir Logo', precio: 24990, imagen: img('Gorra'), oferta: true },
  { id: 8, categoria: 'Pantalones', nombre: 'Jogger Urban', precio: 59990, imagen: img('Jogger') },
]

export const categorias = [
  { id: 1, nombre: 'Remeras', icono: '👕' },
  { id: 2, nombre: 'Buzos', icono: '🧥' },
  { id: 3, nombre: 'Pantalones', icono: '👖' },
  { id: 4, nombre: 'Camperas', icono: '🧥' },
  { id: 5, nombre: 'Accesorios', icono: '🧢' },
]

export const banners = {
  nuevaColeccion: { subtitulo: 'Nueva colección', titulo: 'Urban', destacado: 'Essentials', texto: 'Las prendas básicas que nunca fallan.', boton: 'Ver colección', imagen: img('Urban Essentials', 500, 700) },
  otonio: { titulo: 'Colección', destacado: 'Otoño / Invierno', boton: 'Ver más', imagen: img('Otoño Invierno', 700, 400) },
  zapatillas: { titulo: 'Zapatillas', texto: 'Comodidad y estilo en cada paso.', boton: 'Ver colección', imagen: img('Zapatillas', 500, 400) },
}
