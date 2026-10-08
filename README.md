# L.A Gaming - Tienda de videojuegos

Tienda online de videojuegos desarrollada con **React** y **Vite**, como parte de la asignatura Desarrollo Frontend I (Duoc UC). Es la evolución del proyecto HTML/CSS/JS de las semanas anteriores, migrado a componentes funcionales de React.

🔗 **Sitio publicado:** https://rafaelnavarrete.github.io/Desarrollo-Frontend-I---Tienda-Videojuegos/

## Funcionalidades

- **Catálogo dinámico:** los productos se cargan desde un archivo JSON, con estados de carga y de error.
- **Tarjetas de producto** con imagen, nombre, precio y descripción.
- **Búsqueda** por nombre y **filtro por categoría** desde el menú desplegable de la barra de navegación.
- **Carrito de compras:** agregar productos, aumentar o reducir cantidades, eliminar productos, vaciar el carrito y ver el total en pesos chilenos, con un contador de unidades.
- **Formulario de contacto** (nombre, correo y mensaje) con validación en JavaScript y mensajes de error por campo.
- **Modo administrador (simulado):** permite agregar videojuegos a la lista mediante un formulario y eliminarlos desde su tarjeta.
- **Carrusel** de juegos destacados.
- **Diseño responsivo** para escritorio, tablet y celular (Bootstrap 5 y media queries propias).

## Conceptos de React aplicados

- **`useState`:** gestiona el catálogo, el carrito, la categoría activa, el texto de búsqueda, los estados de carga y error, el modo administrador y los campos de los formularios.
- **`useEffect`:** carga los productos desde `public/data/products.json` al montar la aplicación y actualiza el estado.
- **Props:** `App.jsx` concentra el estado y lo reparte a los componentes hijos junto con las funciones que lo modifican.
- **Renderizado condicional:**
  - spinner mientras cargan los datos y mensaje si la carga falla
  - mensaje cuando la búsqueda no tiene resultados
  - mensaje de carrito vacío y botón "Vaciar carrito" visible solo si hay productos
  - el botón "Agregar al carrito" cambia a "En el carrito"
  - categoría activa resaltada en el menú
  - mensajes de error y de éxito en el formulario de contacto
  - panel de administrador y botones "Eliminar" visibles solo en modo administrador

## Tecnologías

- React
- Vite
- Bootstrap 5
- JavaScript (ES6+)
- HTML5 semántico y CSS3 (Flexbox)
- GitHub Pages (despliegue con `gh-pages`)

## Estructura del proyecto

```
├── public/
│   ├── data/products.json      # Datos de los productos
│   └── img/                    # Imágenes del carrusel y del catálogo
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── Carrusel.jsx
│   │   ├── Catalogo.jsx        # Buscador y lista de productos
│   │   ├── ProductCard.jsx     # Tarjeta de un producto
│   │   ├── Carrito.jsx
│   │   ├── Contacto.jsx        # Formulario de contacto con validación
│   │   ├── FormularioJuego.jsx # Formulario del administrador
│   │   └── Footer.jsx
│   ├── styles/styles.css       # Estilos propios
│   ├── utils/formato.js        # Formateo de precios (CLP)
│   ├── App.jsx                 # Componente raíz: estados y efecto
│   └── main.jsx                # Punto de entrada
├── index.html
└── vite.config.js
```

## Instalación

Requisitos: [Node.js](https://nodejs.org/) 20.19 o superior y Git.

```bash
git clone https://github.com/RafaelNavarrete/Desarrollo-Frontend-I---Tienda-Videojuegos.git
cd Desarrollo-Frontend-I---Tienda-Videojuegos
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173/Desarrollo-Frontend-I---Tienda-Videojuegos/`.

## Cómo usar el sitio

1. **Ver productos:** al abrir la página se cargan los videojuegos desde el archivo JSON.
2. **Buscar y filtrar:** escribe un nombre y presiona "Buscar", o elige una categoría en el menú "Categorías" de la barra de navegación.
3. **Comprar:** presiona "Agregar al carrito". El botón cambia a "En el carrito", y desde la sección "Tu carrito" puedes cambiar las cantidades con "+" y "-", eliminar productos o vaciar el carrito.
4. **Contactar:** completa el formulario al final de la página. Si falta información o el correo no es válido, se muestran los errores.
5. **Modo administrador:** presiona "Modo administrador" en el pie de página. Aparece el panel para agregar un videojuego (nombre, categoría, precio, descripción y link de imagen opcional) y un botón para eliminar cada videojuego. El link de imagen debe ser un enlace directo a una imagen (`https://...jpg` o `.png`); si se deja vacío, la tarjeta muestra un recuadro "Sin imagen".

> **Nota:** el modo administrador es una simulación. Como el proyecto no tiene backend ni inicio de sesión, los cambios solo viven en el estado de la aplicación y se pierden al recargar la página. En un sistema real, esta función estaría en un panel protegido y conectado a una base de datos.

## Scripts disponibles

| Comando          | Descripción                                       |
| ---------------- | ------------------------------------------------- |
| `npm run dev`    | Servidor de desarrollo                            |
| `npm run build`  | Genera la versión de producción en `dist/`        |
| `npm run deploy` | Construye y publica `dist/` en la rama `gh-pages` |

En Windows, si `npm run deploy` falla por una ruta demasiado larga, define antes una carpeta de caché corta: `$env:CACHE_DIR = "C:\ghcache"`.

## Pruebas realizadas

| Entorno                          | Resultado |
| -------------------------------- | --------- |
| Google Chrome (escritorio)       | Correcto  |
| Opera (escritorio)      | Correcto  |
| Tablet (modo dispositivo, ~768 px) | Correcto  |
| Celular (modo dispositivo, ~400 px) | Correcto  |

Se probaron el filtro por categoría, la búsqueda, el carrito, el formulario de contacto y el modo administrador.

## Autor

Rafael Navarrete - Analista Programador Computacional, Duoc UC.