import ProductCard from './ProductCard'

// Sección de productos: contador, buscador y lista según el estado de la carga
function Catalogo({
  productos,
  cargando,
  error,
  idsEnCarrito,
  cantidadCarrito,
  textoBusqueda,
  onCambiarTexto,
  onBuscar,
  onAgregar,
  modoAdmin,
  onEliminarJuego,
}) {
  return (
    <section id="productos">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Productos destacados</h2>
        <span className="badge bg-primary fs-6">Carrito: {cantidadCarrito}</span>
      </div>

      <form className="d-flex mb-3" role="search" onSubmit={onBuscar}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Buscar producto por nombre..."
          aria-label="Buscar producto"
          value={textoBusqueda}
          onChange={(e) => onCambiarTexto(e.target.value)}
        />
        <button className="btn btn-outline-primary" type="submit">
          Buscar
        </button>
      </form>

      {/* Renderizado condicional: cargando / error / sin resultados / lista */}
      {cargando && (
        <div className="text-center my-4">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="text-muted mt-2">Cargando productos...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!cargando && !error && productos.length === 0 && (
        <p className="text-muted">No se encontraron productos con ese nombre.</p>
      )}

      {!cargando && !error && productos.length > 0 && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              enCarrito={idsEnCarrito.includes(producto.id)}
              onAgregar={onAgregar}
              modoAdmin={modoAdmin}
              onEliminar={onEliminarJuego}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Catalogo