// Pie de página con datos de contacto y el interruptor del modo administrador
function Footer({ modoAdmin, onCambiarModo }) {
  return (
    <footer>
      <h2>Contacto</h2>
      <p>Dirección: Avenida Ricardo Vicuña 123, Los Ángeles, Chile.</p>
      <p>
        Correo: <a href="mailto:contacto@lagaming.cl">contacto@lagaming.cl</a>
      </p>
      <p>
        Visita también{' '}
        <a href="https://www.lagaming.cl/" target="_blank" rel="noopener noreferrer">
          L.A Gaming
        </a>{' '}
        para conocer más sobre Videojuegos, accesorios y tcg.
      </p>

      {/* Interruptor que simula el acceso del administrador (no hay login en este proyecto) */}
      <button className="btn btn-outline-light btn-sm mb-3" onClick={onCambiarModo}>
        {modoAdmin ? 'Salir del modo administrador' : 'Modo administrador'}
      </button>

      <p> 2026 L.A Gaming. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer