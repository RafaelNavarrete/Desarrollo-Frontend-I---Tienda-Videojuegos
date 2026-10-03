# L.A Gaming - Tienda de videojuegos

Tienda online de videojuegos desarrollada con **React** y **Vite**, como parte de la asignatura Desarrollo Frontend I (Duoc UC). Es la evolución del proyecto HTML/CSS/JS de las semanas anteriores, migrado a componentes funcionales de React.

🔗 **Sitio publicado:** https://rafaelnavarrete.github.io/Desarrollo-Frontend-I---Tienda-Videojuegos/

## Funcionalidades

- **Catálogo dinámico:** los productos se cargan desde un archivo JSON, con estados de carga y de error.
- **Carrito de compras:** agregar productos, aumentar o reducir cantidades, eliminar productos, vaciar el carrito y ver el total en pesos chilenos.
- **Contador del carrito** con el total de unidades.
- **Búsqueda** de productos por nombre y **filtro por categoría** desde el menú desplegable.
- **Diseño responsivo** para escritorio, tablet y celular (Bootstrap 5 y media queries propias).
- **Carrusel** de juegos destacados.

## Conceptos de React aplicados

- **`useState`:** gestiona el catálogo, el carrito, la categoría activa, el texto de búsqueda y los estados de carga y error.
- **`useEffect`:** carga los productos desde `public/data/products.json` al montar la aplicación y actualiza el estado.
- **Renderizado condicional:**
  - mensaje de carrito vacío
  - spinner mientras cargan los datos
  - mensaje de error si falla la carga
  - mensaje cuando la búsqueda no tiene resultados
  - el botón "Agregar al carrito" cambia a "En el carrito"
  - categoría activa resaltada en el menú
  - botón "Vaciar carrito" visible solo si hay productos

## Tecnologías

- React
- Vite
- Bootstrap 5
- JavaScript (ES6+)
- CSS3
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
│   │   ├── Catalogo.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Carrito.jsx
│   │   └── Footer.jsx
│   ├── styles/styles.css       # Estilos propios
│   ├── utils/formato.js        # Formateo de precios (CLP)
│   ├── App.jsx                 # Componente raíz: estados y efecto
│   └── main.jsx                # Punto de entrada
├── index.html
└── vite.config.js
```

## Cómo ejecutarlo en local

```bash
git clone https://github.com/RafaelNavarrete/Desarrollo-Frontend-I---Tienda-Videojuegos.git
cd Desarrollo-Frontend-I---Tienda-Videojuegos
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173/Desarrollo-Frontend-I---Tienda-Videojuegos/`.

## Scripts disponibles

| Comando          | Descripción                                   |
| ---------------- | --------------------------------------------- |
| `npm run dev`    | Servidor de desarrollo                        |
| `npm run build`  | Genera la versión de producción en `dist/`    |
| `npm run deploy` | Construye y publica `dist/` en la rama `gh-pages` |

## Autor

Rafael Navarrete - Analista Programador Computacional, Duoc UC.