import { useState } from "react"

// Formulario del administrador para agregar un nuevo videojuego al catálogo
function FormularioJuego({ onAgregar }) {
    // un estado para cada campo del formulario
    const [nombre, setNombre] = useState("")
    const [categoria, setCategoria] = useState("accion")
    const [precio, setPrecio] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [imagen, setImagen] = useState("") 
    const [error, setError] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault() // evita que la página se recargue al enviar el formulario

        // Validaciones básicas
        if (nombre.trim() === '') {
            setError("El nombre es obligatorio.")
            return
        }
        if (isNaN(Number(precio)) || Number(precio) <= 0) {
            setError('Ingresa un precio mayor a 0.')
            return
            }
            if (descripcion.trim() === '') {
            setError('La descripción es obligatoria.')
            return
            }

            // Objeto del nuevo juego
            const nuevoJuego = {
                id: Date.now(), // genera un id único basado en la fecha actual
                nombre: nombre.trim(),
                descripcion: descripcion.trim(),
                precio: Number(precio),
                categoria: categoria,
                imagen: imagen.trim(),
                badge: '',
            }

            onAgregar(nuevoJuego) // llama a la función pasada por props para agregar el juego al catálogo

            // Limpia los campos del formulario
            setNombre('')
            setCategoria('accion')
            setPrecio('')
            setDescripcion('')
            setImagen('')
            setError('')
        }

        return (
            <section id="admin">
            <h2>Panel de administrador</h2>

            <form onSubmit={manejarEnvio} noValidate>
                <div className="mb-3">
                <label htmlFor="juego-nombre" className="form-label">Nombre</label>
                <input
                    id="juego-nombre"
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="juego-categoria" className="form-label">Categoría</label>
                <select
                    id="juego-categoria"
                    className="form-select"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="accion">Acción</option>
                    <option value="aventura">Aventura</option>
                    <option value="pc">PC</option>
                </select>
                </div>

                <div className="mb-3">
                <label htmlFor="juego-precio" className="form-label">Precio (CLP)</label>
                <input
                    id="juego-precio"
                    type="number"
                    className="form-control"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="juego-descripcion" className="form-label">Descripción</label>
                <textarea
                    id="juego-descripcion"
                    rows="3"
                    className="form-control"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="juego-imagen" className="form-label">Link de la imagen (opcional)</label>
                <input
                    id="juego-imagen"
                    type="text"
                    className="form-control"
                    placeholder="https://..."
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                />
                </div>

                {/* Renderizado condicional: el error solo aparece si la validación falló */}
                {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
                )}

                <button type="submit" className="btn btn-primary">
                Agregar videojuego
                </button>
            </form>
            </section>
        )
}

export default FormularioJuego