// Ruta base de Vite: necesaria para que las imágenes carguen también en gh-pages
const BASE = import.meta.env.BASE_URL

// Datos de las diapositivas
const diapositivas = [
  { img: 'zelda-totk.jpg', titulo: 'The Legend of Zelda: Tears of the Kingdom', posicion: 'pos-zelda' },
  { img: 'gow-ragnarok.jpg', titulo: 'God of War: Ragnarok', posicion: 'pos-gow' },
  { img: 'gow-4.png', titulo: 'Gears of War 4', posicion: '' },
  { img: 'wow-midnight.jpeg', titulo: 'World of Warcraft: Midnight', posicion: 'pos-center' },
  { img: 'pokemon.jpg', titulo: 'Pokémon Waves / Pokémon Winds', posicion: 'pos-center' },
]

// Carrusel de destacados (Bootstrap Carousel)
function Carrusel() {
  return (
    <div id="carruselDestacados" className="carousel slide mb-4" data-bs-ride="carousel">
      {/* Indicadores: el primero parte activo */}
      <div className="carousel-indicators">
        {diapositivas.map((d, i) => (
          <button
            key={d.img}
            type="button"
            data-bs-target="#carruselDestacados"
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-current={i === 0 ? 'true' : undefined}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {diapositivas.map((d, i) => (
          <div key={d.img} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval="3000">
            <img src={`${BASE}img/${d.img}`} className={`d-block w-100 carrusel-img ${d.posicion}`} alt={d.titulo} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{d.titulo}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Controles anterior/siguiente */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carruselDestacados" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carruselDestacados" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  )
}

export default Carrusel