import Header from './components/Header'
import Navbar from './components/Navbar'
import Carrusel from './components/Carrusel'
import Footer from './components/Footer'

// Componente raíz: une todas las partes de la página
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Carrusel />
        <section id="inicio">
          <h2>Bienvenido a L.A Gaming</h2>
          <p>
            Explora nuestra amplia selección de videojuegos, accesorios y tcg
            y encuentra tus títulos favoritos para todas las plataformas.
          </p>
        </section>
        {/* Aquí irán los productos y el carrito */}
      </main>
      <Footer />
    </>
  )
}

export default App