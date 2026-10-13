// Las fotos se guardan en la carpeta public/images y se usan con rutas que empiezan con /images/

export const productos = [
  { id: 1, categoria: 'Buzos', nombre: 'Buzo Oversize Graphic', precio: 89990, imagen: '/images/buzo-oversize.jpg', destacado: true },
  { id: 2, categoria: 'Remeras', nombre: 'Remera Boxy Essentials', precio: 39990, imagen: '/images/remera-boxy.jpg', destacado: true },
  { id: 3, categoria: 'Pantalones', nombre: 'Pantalón Cargo Street', precio: 69990, imagen: '/images/pantalon-cargo.jpg', destacado: true },
  { id: 4, categoria: 'Camperas', nombre: 'Campera Rompeviento', precio: 99990, imagen: '/images/campera-rompeviento.jpg', destacado: true },
  { id: 5, categoria: 'Remeras', nombre: 'Remera Oversize Noir', precio: 34990, imagen: '/images/remera-oversize.jpg', oferta: true },
  { id: 6, categoria: 'Buzos', nombre: 'Buzo Hoodie Básico', precio: 74990, imagen: '/images/buzo-hoodie.jpg', oferta: true },
  { id: 7, categoria: 'Accesorios', nombre: 'Gorra Noir Logo', precio: 24990, imagen: '/images/gorra-noir.jpg', oferta: true },
  { id: 8, categoria: 'Pantalones', nombre: 'Jogger Urban', precio: 59990, imagen: '/images/jogger-urban.jpg' },
]

export const categorias = [
  { id: 1, nombre: 'Remeras', icono: '👕' },
  { id: 2, nombre: 'Buzos', icono: '🧥' },
  { id: 3, nombre: 'Pantalones', icono: '👖' },
  { id: 4, nombre: 'Camperas', icono: '🧥' },
  { id: 5, nombre: 'Accesorios', icono: '🧢' },
]

export const banners = {
  nuevaColeccion: { subtitulo: 'Nueva colección', titulo: 'Urban', destacado: 'Essentials', texto: 'Las prendas básicas que nunca fallan.', boton: 'Ver colección', imagen: '/images/banner-urban-essentials.jpg' },
  otonio: { titulo: 'Colección', destacado: 'Otoño / Invierno', boton: 'Ver más', imagen: '/images/banner-otonio.jpg' },
  zapatillas: { titulo: 'Zapatillas', texto: 'Comodidad y estilo en cada paso.', boton: 'Ver colección', imagen: '/images/banner-zapatillas.jpg' },
}
