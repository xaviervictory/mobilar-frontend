# NOIR — Tienda de ropa streetwear

NOIR es una tienda online de indumentaria urbana (streetwear) desarrollada con **React + Vite** como proyecto de la cursada de programación. Permite navegar el catálogo, filtrar por categorías, agregar productos al carrito, crear una cuenta y consultar datos reales desde una API pública.

🔗 **Demo en línea:** _((https://noiropa-frontend.vercel.app))_

## Funcionalidades

- Página de inicio con carrusel, beneficios, productos destacados, banners y categorías.
- Navegación entre páginas con **React Router**: Inicio, Tienda, Ofertas, Nosotros, Contacto, Carrito, Login, Registro, Perfil y página 404.
- Catálogo en la **Tienda** con datos obtenidos de una API pública (Fake Store API).
- Filtro de productos por categoría (Hombre, Mujer y Accesorios).
- **Carrito de compras**: agregar productos, cambiar cantidades, quitar productos, vaciar y ver el total. El carrito se conserva al recargar la página.
- **Cuentas de usuario**: registro, inicio de sesión y perfil con los datos de la cuenta. Es una simulación con `localStorage` (sin servidor): las cuentas se guardan solo en el navegador de cada persona.
- Página **Nosotros** con la historia de la marca, valores y preguntas frecuentes (acordeón).
- Página **Contacto** con formulario validado y datos de contacto.
- Estado de carga y manejo de errores con alertas de **SweetAlert2**.
- Diseño responsive con Bootstrap.

## Estrategia SEO

Para mejorar el posicionamiento en buscadores y la accesibilidad se aplicaron estas prácticas:

- **Metadatos en `index.html`:** idioma del documento (`lang="es"`), codificación, `viewport` para dispositivos móviles, `meta description` con las palabras clave de la marca (streetwear, ropa urbana, oversize) y `theme-color`.
- **Títulos descriptivos:** el `<title>` base es "NOIR | Streetwear & Urban Fashion" y cada página cambia el título de la pestaña con el hook personalizado `usePageTitle` (por ejemplo, "Tienda | NOIR" o "Contacto | NOIR"), usando `useEffect`.
- **Etiquetas semánticas:** uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, listas y tablas donde corresponde, en lugar de `<div>` genéricos.
- **Jerarquía de encabezados:** un único `<h1>` por página y subtítulos `<h2>` y `<h3>` en orden lógico. Las secciones se asocian con su título mediante `aria-labelledby`.
- **Textos alternativos:** todas las imágenes de productos, banners y carrusel incluyen el atributo `alt` descriptivo.
- **URLs limpias y legibles:** rutas como `/tienda`, `/ofertas`, `/nosotros` y `/contacto` gestionadas con React Router.
- **Accesibilidad:** los botones con solo ícono (carrito, buscar, perfil) tienen `aria-label`, y los campos de los formularios tienen su `label`.
- **Contenido útil y navegable:** preguntas frecuentes con respuestas claras, enlaces internos entre páginas y una página 404 con título propio.
- **Rendimiento:** imágenes livianas guardadas en `public/images` y carga de la API solo en la página que la necesita.
- **Rutas en producción:** el archivo `vercel.json` redirige todas las rutas a la aplicación, para que las URLs funcionen al recargar o compartirlas.

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
- **`map()`** para renderizar listas (productos, categorías, beneficios, preguntas frecuentes, datos de contacto).
- **`useState`** para el carrito, la sesión, los productos de la API, la carga, los errores y los campos de los formularios.
- **`useEffect`** para pedir los datos a la API al cargar la Tienda, guardar el carrito y la sesión en `localStorage` y cambiar el título de cada página.
- **Hook personalizado** `usePageTitle`.
- **Rutas protegidas:** el perfil redirige al login si no hay sesión iniciada.

## Estructura del proyecto


public/
└── images/       # Fotos del carrusel, productos y banners
src/
├── components/   # Navbar, TopBar, HeroCarousel, ProductCard, FaqAccordion, ContactForm, etc.
├── pages/        # Home, Shop, Offers, About, Contact, Cart, Login, Register, Profile, NotFound
├── data/         # Datos locales (productos, categorías, preguntas frecuentes, contacto)
├── hooks/        # usePageTitle
├── services/     # auth.js (cuentas simuladas)
├── utils/        # alertas.js (SweetAlert2)
├── App.jsx       # Rutas, carrito y sesión
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
    install
   
4. Creá un archivo `.env` en la raíz del proyecto (podés copiar `.env.example`):
   env
   VITE_API_URL=https://fakestoreapi.com/products
   
5. Iniciá el servidor de desarrollo:
   bash
   npm run dev
   
6. Abrí en el navegador la dirección que indica la terminal (normalmente `http://localhost:####`).

### Otros comandos

| Comando | Descripción |
| --- | --- |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza la versión de producción |

## Variables de entorno

| Variable | Descripción |
| --- | --- |
| `VITE_API_URL` | URL de la API pública de productos |
| `VITE_CONTACT_URL` | (Opcional) URL de un servicio de formularios para enviar los mensajes de Contacto |

> El archivo `.env` está incluido en `.gitignore` y **no se sube al repositorio**. En Vercel las variables se configuran en *Settings → Environment Variables*.

## Autor

Proyecto desarrollado por **Xavier** como trabajo práctico de programación.