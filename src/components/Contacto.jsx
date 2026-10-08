import { useState } from "react"

const FORMULARIO_INICIAL = { nombre: "", email: "", mensaje: "" }
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Campos del formulario de contacto
const campos = [
    { name: 'nombre', etiqueta: 'Nombre', tipo: 'text', placeholder: 'Tu nombre' },
    { name: 'email', etiqueta: 'Correo electrónico', tipo: 'email', placeholder: 'nombre@correo.cl' },
    { name: 'mensaje', etiqueta: 'Mensaje', tipo: 'textarea', placeholder: 'Escribe tu mensaje...' },
]

// Valida los datos y devuelve un objeto con los errores encontrados
function validar({ nombre, email, mensaje }) {
    const errores = {}

    if (nombre.trim().length < 3) {
        errores.nombre = 'Ingresa tu nombre (mínimo 3 caracteres).'
    }

    if (!email.trim()) {
        errores.email = 'El correo es obligatorio.'
    } else if (!REGEX_EMAIL.test(email.trim())) {
        errores.email = 'Ingresa un correo válido (ej: nombre@correo.cl).'
    }

    if (mensaje.trim().length < 10) {
        errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    }

    return errores
}

// Formulario de contacto con validación de datos
function Contacto() {
    const [datos, setDatos] = useState(FORMULARIO_INICIAL)
    const [errores, setErrores] = useState({})
    const [enviado, setEnviado] = useState(false)

    // actualiza el campo que cambió y limpia su error (si es que existía)
    const manejarCambio = (e) => {
        const { name, value } = e.target
        setDatos((actual) => ({ ...actual, [name]: value }))
        setErrores((actual) => ({ ...actual, [name]: undefined }))
        setEnviado(false)
    }

    // Valida al enviar: si hay errores los muestra, si no, confirma el envio
    const manejarEnvio = (e) => {
        e.preventDefault()
        const erroresEncontrados = validar(datos)
        setErrores(nuevosErrores)

        if (Object.keys(erroresEncontrados).length === 0) {
            // Aquí iria el envío real a un servidor (no hay backend)
            setEnviado(true)
            setDatos(FORMULARIO_INICIAL)
        }
    }

    return (
        <section id="contacto">
            <h2>Contáctanos</h2>

            {/* noValidate: desactiva la validación del navegador para mostrar la nuestra */}
            <form onSubmit={manejarEnvio} noValidate>
                {campos.map((c) => {
                    const propiedades = {
                        id: `contacto-${c.name}`,
                        name: c.name,
                        placeholder: c.placeholder,
                        value: datos[c.name],
                        onChange: manejarCambio,
                        className: `form-control ${errores[c.name] ? 'is-invalid' : ''}`,
                    }

                    return (
                      <div className="mb-3" key={c.name}>
                        <label htmlFor={propiedades.id} className="form-label">
                            {c.etiqueta}
                        </label>

                        {c.tipo === 'textarea' ? (
                            <textarea rows="4" {...propiedades} />
                        ) : (
                            <input type={c.tipo} {...propiedades} />
                        )}

                        {/* Renderizado condicional: el mensaje de error solo aparece si el campo falla */}
                        {errores[c.name] && <div className="invalid-feedback">{errores[c.name]}</div>}
                        </div>
                    )
                    })}  

                    <button type="submit" className="btn btn-primary">
                        Enviar mensaje
                    </button>
            </form>

            {/* Renderizado condicional: confirmación después de un envío válido */}
            {enviado && (
                <div className="alert alert-success mt-3" role="alert">
                ¡Gracias! Tu mensaje fue enviado correctamente. Te responderemos pronto.
                </div>
            )}   
        </section>
    )
}

export default Contacto