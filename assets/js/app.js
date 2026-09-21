/* ==========================================================
   L.A Gaming - app.js
   Carga de productos vía Fetch API y renderizado dinámico
   ========================================================== */

const formateadorCLP = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
});

// Guardamos el carrito en un array
let carrito = [];

// Guardamos la lista de productos para buscar por id
let listaProductos = [];

async function cargarProductos() {
    try {
        const respuesta = await fetch('assets/js/products.json');

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const productos = await respuesta.json();
        listaProductos = productos;
        renderizarProductos(productos);

    } catch (error) {
        console.error('Error al cargar los productos:', error);
        mostrarError('No se pudieron cargar los productos. Por favor, inténtelo de nuevo más tarde.');
    }
}

function renderizarProductos(productos) {
    const contenedor = document.getElementById('contenedorProductos');
    contenedor.innerHTML = '';

    if (productos.length === 0) {
        contenedor.innerHTML = '<p class="text-muted">No se encontraron productos con ese nombre.</p>';
        return;
    }

    productos.forEach(producto => {
        const columna = document.createElement('div');
        columna.className = 'col';

        columna.innerHTML = `
            <article class="card producto h-100" data-id="${producto.id}">
                <img src="${producto.imagen}" class="card-img-top" alt="Portada de ${producto.nombre}">
                <div class="card-body d-flex flex-column">
                    <h3 class="card-title h5">
                        ${producto.nombre}
                        ${producto.badge ? `<span class="badge bg-success">${producto.badge}</span>` : ''}
                    </h3>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="fw-bold mt-auto">${formateadorCLP.format(producto.precio)}</p>
                    <button class="btn btn-primary btn-agregar" data-id="${producto.id}">
                        Agregar al carrito
                    </button>
                </div>
            </article>
        `;

        contenedor.appendChild(columna);
    });
}

function mostrarError(texto) {
    const mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = texto;
    mensajeError.classList.remove('d-none');
}

document.addEventListener('DOMContentLoaded', cargarProductos);


/* ==========================================================
   Carrito de compras
   ========================================================== */

document.getElementById('contenedorProductos').addEventListener('click', function (evento) {
    if (evento.target.classList.contains('btn-agregar')) {
        const idProducto = Number(evento.target.dataset.id);
        agregarAlCarrito(idProducto);
    }
});

function agregarAlCarrito(idProducto) {
    const producto = listaProductos.find(p => p.id === idProducto);
    if (!producto) return;

    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('listaCarrito');
    const contador = document.getElementById('contadorCarrito');
    const totalSpan = document.getElementById('totalCarrito');

    lista.innerHTML = '';

    if (carrito.length === 0) {
        lista.innerHTML = '<li class="list-group-item text-muted">El carrito está vacío</li>';
    } else {
        carrito.forEach(producto => {
            const item = document.createElement('li');
            item.className = 'list-group-item d-flex justify-content-between';
            item.innerHTML = `<span>${producto.nombre}</span><span>${formateadorCLP.format(producto.precio)}</span>`;
            lista.appendChild(item);
        });
    }

    const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);

    contador.textContent = `Carrito: ${carrito.length}`;
    totalSpan.textContent = formateadorCLP.format(total);
}


/* ==========================================================
   Filtrado de productos por categoría
   ========================================================== */

document.querySelectorAll('.categoria-link').forEach(link => {
    link.addEventListener('click', function (evento) {
        evento.preventDefault();
        const categoria = evento.target.dataset.categoria;
        filtrarPorCategoria(categoria);

        document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    });
});

function filtrarPorCategoria(categoria) {
    if (categoria === 'todos') {
        renderizarProductos(listaProductos);
        return;
    }

    const productosFiltrados = listaProductos.filter(p => p.categoria === categoria);
    renderizarProductos(productosFiltrados);
}


/* ==========================================================
   Búsqueda de productos por nombre
   ========================================================== */

document.getElementById('formBusqueda').addEventListener('submit', function (evento) {
    evento.preventDefault();

    const texto = document.getElementById('inputBusqueda').value.trim().toLowerCase();

    if (texto === '') {
        renderizarProductos(listaProductos);
        return;
    }

    const productosEncontrados = listaProductos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    renderizarProductos(productosEncontrados);
});