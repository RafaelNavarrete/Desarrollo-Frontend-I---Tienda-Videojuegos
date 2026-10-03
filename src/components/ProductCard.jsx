import { formatearPrecio } from '../utils/formato'

// Ruta base de Vite: necesaria para que las imágenes carguen también en gh-pages
const BASE = import.meta.env.BASE_URL

// Tarjeta de un producto del catálogo
function ProductCard({ producto, enCarrito, onAgregar }) {
  return (
    <div className="col">
      <article className="card producto h-100">
        <img
          src={`${BASE}${producto.imagen}`}
          className="card-img-top"
          alt={`Portada de ${producto.nombre}`}
        />
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
        </div>
      </article>
    </div>
  )
}

export default ProductCard