import { formatearPrecio } from '../utils/formato'

// Ruta base de Vite: necesaria para que las imágenes carguen también en gh-pages
const BASE = import.meta.env.BASE_URL

// Tarjeta de un producto del catálogo
function ProductCard({ producto, enCarrito, onAgregar, modoAdmin, onEliminar }) {
  // Las imágenes de products.json son rutas locales; las que agrega el administrador pueden ser links (http)
  const rutaImagen = producto.imagen.startsWith('http') ? producto.imagen : `${BASE}${producto.imagen}`

  return (
    <div className="col">
      <article className="card producto h-100">
        {/* Renderizado condicional: si el videojuego no tiene imagen, se muestra un recuadro gris */}
        {producto.imagen ? (
          <img src={rutaImagen} className="card-img-top" alt={`Portada de ${producto.nombre}`} />
        ) : (
          <div
            className="card-img-top bg-secondary text-white d-flex align-items-center justify-content-center"
            style={{ height: '200px' }}
          >
            Sin imagen
          </div>
        )}

        <div className="card-body d-flex flex-column">
          <h3 className="card-title h5">
            {producto.nombre}{' '}
            {/* Renderizado condicional: la etiqueta solo aparece si el producto tiene badge */}
            {producto.badge && <span className="badge bg-success">{producto.badge}</span>}
          </h3>
          <p className="card-text">{producto.descripcion}</p>
          <p className="fw-bold mt-auto">{formatearPrecio(producto.precio)}</p>

          {/* Renderizado condicional: el botón cambia según el producto esté o no en el carrito */}
          {enCarrito ? (
            <button className="btn btn-success" disabled>
              En el carrito
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => onAgregar(producto)}>
              Agregar al carrito
            </button>
          )}

          {/* Renderizado condicional: el botón de eliminar solo aparece en modo administrador */}
          {modoAdmin && (
            <button className="btn btn-outline-danger btn-sm mt-2" onClick={() => onEliminar(producto.id)}>
              Eliminar videojuego
            </button>
          )}
        </div>
      </article>
    </div>
  )
}

export default ProductCard