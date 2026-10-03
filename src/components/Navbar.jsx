// Categorías del menú desplegable
const categorias = [
  { valor: 'todos', etiqueta: 'Ver todos' },
  { valor: 'accion', etiqueta: 'Acción' },
  { valor: 'aventura', etiqueta: 'Aventura' },
]

// Barra de navegación responsiva (usa el JS de Bootstrap para el menú hamburguesa)
function Navbar({ categoriaActiva, onSeleccionarCategoria }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#productos">Productos</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu">
                {categorias.map((c) => (
                  <li key={c.valor}>
                    {/* La categoría activa se resalta*/}
                    <a
                      className={`dropdown-item ${categoriaActiva === c.valor ? 'active' : ''}`}
                      href="#productos"
                      onClick={(e) => {
                        e.preventDefault()
                        onSeleccionarCategoria(c.valor)
                      }}
                    >
                      {c.etiqueta}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar