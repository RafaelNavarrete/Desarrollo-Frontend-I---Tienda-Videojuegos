import { useState, useEffect } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Carrusel from './components/Carrusel'
import Catalogo from './components/Catalogo'
import Carrito from './components/Carrito'
import Footer from './components/Footer'

// Simula la latencia de una API real (poner en 0 para quitar la espera)
const RETRASO_SIMULADO_MS = 800

// Componente raíz: guarda el estado de la tienda y lo reparte a los componentes
function App() {
  // ---------- Estados (useState) ----------
  const [productos, setProductos] = useState([]) // catálogo completo
  const [carrito, setCarrito] = useState([]) // productos seleccionados
  const [categoria, setCategoria] = useState('todos') // filtro de categoría activo
  const [textoBusqueda, setTextoBusqueda] = useState('') // lo que se escribe en el input
  const [busqueda, setBusqueda] = useState('') // texto aplicado al presionar "Buscar"
  const [cargando, setCargando] = useState(true) // true mientras se cargan los datos
  const [error, setError] = useState(null) // mensaje si falla la carga

  // ---------- Efecto (useEffect) ----------
  useEffect(() => {
    let cancelado = false // evita actualizar el estado si el componente ya se desmontó

    async function cargarProductos() {
      try {
        const respuesta = await fetch(`${import.meta.env.BASE_URL}data/products.json`)
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`)
        }
        const datos = await respuesta.json()

        // Espera simulada para mostrar el estado "cargando"
        await new Promise((resolver) => setTimeout(resolver, RETRASO_SIMULADO_MS))

        if (!cancelado) setProductos(datos)
      } catch (err) {
        console.error('Error al cargar los productos:', err)
        if (!cancelado) {
          setError('No se pudieron cargar los productos. Por favor, inténtelo de nuevo más tarde.')
        }
      } finally {
        if (!cancelado) setCargando(false)
      }
    }

    cargarProductos()

    return () => {
      cancelado = true
    }
  }, []) 

  // ---------- Datos derivados: se calculan en cada render, sin estado extra ----------
  const productosFiltrados = productos.filter(
    (p) =>
      (categoria === 'todos' || p.categoria === categoria) &&
      p.nombre.toLowerCase().includes(busqueda)
  )

  // ---------- Manejadores de eventos ----------
  // Agrega el producto; si ya está en el carrito, suma una unidad
  const agregarAlCarrito = (producto) => {
    setCarrito((actual) =>
      actual.some((p) => p.id === producto.id)
        ? actual.map((p) => (p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p))
        : [...actual, { ...producto, cantidad: 1 }]
    )
  }

  const eliminarDelCarrito = (id) => {
    setCarrito((actual) => actual.filter((p) => p.id !== id))
  }

  // Resta una unidad; si llega a 0, el producto sale del carrito
  const restarDelCarrito = (id) => {
    setCarrito((actual) =>
      actual
        .map((p) => (p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p))
        .filter((p) => p.cantidad > 0)
    )
  }

  const vaciarCarrito = () => setCarrito([])

  // Cambia la categoría y baja a la sección de productos
  const seleccionarCategoria = (nuevaCategoria) => {
    setCategoria(nuevaCategoria)
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Aplica el texto de búsqueda (texto vacío = muestra todos)
  const buscar = (evento) => {
    evento.preventDefault()
    setBusqueda(textoBusqueda.trim().toLowerCase())
  }

    // Total de unidades en el carrito (para el contador)
  const totalUnidades = carrito.reduce((suma, p) => suma + p.cantidad, 0)

  return (
    <>
      <Header />
      <Navbar categoriaActiva={categoria} onSeleccionarCategoria={seleccionarCategoria} />
      <main>
        <Carrusel />

        <section id="inicio">
          <h2>Bienvenido a L.A Gaming</h2>
          <p>
            Explora nuestra amplia selección de videojuegos, accesorios y tcg
            y encuentra tus títulos favoritos para todas las plataformas.
          </p>
        </section>

        <Catalogo
          productos={productosFiltrados}
          cargando={cargando}
          error={error}
          idsEnCarrito={carrito.map((p) => p.id)}
          cantidadCarrito={totalUnidades}
          textoBusqueda={textoBusqueda}
          onCambiarTexto={setTextoBusqueda}
          onBuscar={buscar}
          onAgregar={agregarAlCarrito}
        />

        <Carrito
          carrito={carrito}
          onSumar={agregarAlCarrito}
          onRestar={restarDelCarrito}
          onEliminar={eliminarDelCarrito}
          onVaciar={vaciarCarrito}
        />
      </main>
      <Footer />
    </>
  )
}

export default App