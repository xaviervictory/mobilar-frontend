# NOIR — Tienda de ropa streetwear

NOIR es una tienda online de indumentaria urbana (streetwear) desarrollada con **React + Vite** como proyecto de la cursada de programación. Permite navegar el catálogo, filtrar por categorías, agregar productos al carrito y consultar datos reales desde una API pública.

🔗 **Demo en línea:** https://mobilar-frontend.vercel.app](https://noiropa-frontend.vercel.app](https://noiropa-frontend.vercel.app

## Funcionalidades

- Página de inicio con carrusel, beneficios, productos destacados, banners y categorías.
- Navegación entre páginas con **React Router**: Inicio, Tienda, Ofertas, Nosotros, Contacto, Carrito y página 404.
- Catálogo en la **Tienda** con datos obtenidos de una API pública (Fake Store API).
- Filtro de productos por categoría (Hombre, Mujer y Accesorios).
- **Carrito de compras**: agregar productos, cambiar cantidades, quitar productos, vaciar y ver el total. El carrito se conserva al recargar la página.
- Estado de carga y manejo de errores con alertas de **SweetAlert2**.
- Diseño responsive con Bootstrap.
- SEO: etiquetas semánticas, metadatos, título descriptivo en `index.html` y título dinámico por página.

## Tecnologías utilizadas

- [React](https://react.dev/) y [Vite](https://vite.dev/)
- [React Bootstrap](https://react-bootstrap.netlify.app/) y [Bootstrap](https://getbootstrap.com/)
- [React Router](https://reactrouter.com/) (`react-router-dom`)
- [Axios](https://axios-http.com/) para las peticiones HTTP
- [SweetAlert2](https://sweetalert2.github.io/) para los mensajes al usuario
- [React Bootstrap Icons](https://www.npmjs.com/package/react-bootstrap-icons)
- [Fake Store API](https://fakestoreapi.com/) como API pública
- Despliegue en [Vercel](https://vercel.com/)

## Conceptos de React aplicados

- **Componentes reutilizables** y organización por carpetas.
- **Props** para enviar datos y funciones entre componentes.
- **`map()`** para renderizar listas (productos, categorías, beneficios, menú).
- **`useState`** para el carrito, los productos de la API, la carga y los errores.
- **`useEffect`** para pedir los datos a la API al cargar la Tienda y para guardar el carrito en `localStorage`.
- **Hook personalizado** `usePageTitle` para cambiar el título de cada página.

## Estructura del proyecto


src/
├── components/   # Navbar, TopBar, HeroCarousel, ProductCard, Footer, etc.
├── pages/        # Home, Shop, Offers, About, Contact, Cart, NotFound
├── data/         # Datos locales y categorías
├── hooks/        # usePageTitle
├── App.jsx       # Rutas y estado del carrito
├── main.jsx      # Punto de entrada
└── style.css     # Estilos globales (mínimos)


## Instalación y ejecución

1. Instalá [Node.js](https://nodejs.org/).
2. Cloná el repositorio e ingresá a la carpeta:
   bash
   git clone <URL-DEL-REPOSITORIO>
   cd <NOMBRE-DE-LA-CARPETA>
   
3. Instalá las dependencias:
   bash
   npm install
   
4. Creá un archivo `.env` en la raíz del proyecto (podés copiar `.env.example`):
   env
   VITE_API_URL=https://fakestoreapi.com/products
   
5. Iniciá el servidor de desarrollo:
   bash
   npm run dev
   
6. Abrí en el navegador la dirección que indica la terminal (normalmente `http://localhost:5173`).

### Otros comandos

| Comando | Descripción |
| --- | --- |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza la versión de producción |

## Variables de entorno

| Variable | Descripción |
| --- | --- |
| `VITE_API_URL` | URL de la API pública de productos |

> El archivo `.env` está incluido en `.gitignore` y **no se sube al repositorio**. En Vercel la variable se configura en *Settings → Environment Variables*.

## Autor

Proyecto desarrollado por **Xavier** como trabajo práctico de programación.
