import { formatearPrecio } from '../utils/formato'

// Sección del carrito: lista con cantidades, total y botones para modificar
function Carrito({ carrito, onSumar, onRestar, onEliminar, onVaciar }) {
  // Total calculado a partir del estado: precio x cantidad de cada producto
  const total = carrito.reduce((suma, p) => suma + p.precio * p.cantidad, 0)

  return (
    <section id="carrito" className="mb-4">
      <h2>Tu carrito</h2>

      <ul className="list-group mb-2">
        {/* Renderizado condicional: mensaje de carrito vacío o lista de productos */}
        {carrito.length === 0 ? (
          <li className="list-group-item text-muted">El carrito está vacío</li>
        ) : (
          carrito.map((producto) => (
            <li
              key={producto.id}
              className="list-group-item d-flex justify-content-between align-items-center flex-wrap gap-2"
            >
              <span>{producto.nombre}</span>

              <span className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => onRestar(producto.id)}
                  aria-label={`Quitar una unidad de ${producto.nombre}`}
                >
                  -
                </button>
                <span>{producto.cantidad}</span>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => onSumar(producto)}
                  aria-label={`Agregar una unidad de ${producto.nombre}`}
                >
                  +
                </button>
              </span>

              <span className="d-flex align-items-center gap-2">
                <span>{formatearPrecio(producto.precio * producto.cantidad)}</span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onEliminar(producto.id)}
                  aria-label={`Eliminar ${producto.nombre} del carrito`}
                >
                  Eliminar
                </button>
              </span>
            </li>
          ))
        )}
      </ul>

      <p className="fw-bold">Total: {formatearPrecio(total)}</p>

      {/* El botón "Vaciar" solo aparece si hay productos */}
      {carrito.length > 0 && (
        <button className="btn btn-outline-secondary btn-sm" onClick={onVaciar}>
          Vaciar carrito
        </button>
      )}
    </section>
  )
}

export default Carrito