// Base de datos de productos - Se puede cargar desde localStorage
const productosIniciales = [
    {
        id: 1,
        nombre: "Conjunto 1 Femenino",
        categoria: "Femenino",
        imagen: "img/products/F01.png",
        tela: "Hilo",
        colores: [
            { parte: "Blusa", color: "#93691c", nombre: "Color #93691C" },
            { parte: "Pantalón", color: "#212121", nombre: "Color #212121" }
        ],
        estructura: "Blusa de cuello ojal, mangas a tres cuartos acampanadas y pantalón"
    },
    {
        id: 2,
        nombre: "Conjunto 1 Masculino",
        categoria: "Masculino",
        imagen: "img/products/M1.png",
        tela: "Hilo",
        colores: [
            { parte: "Camisa", color: "#93691c", nombre: "Color #93691C" },
            { parte: "Pantalón", color: "#212121", nombre: "Color #212121" }
        ],
        estructura: "Camisa de cuello ojal, mangas largas y pantalón"
    },
    {
        id: 3,
        nombre: "Conjunto 2 Femenino",
        categoria: "Femenino",
        imagen: "img/products/F2.png",
        tela: "Hilo",
        colores: [
            { parte: "Blusa", color: "#4a90e2", nombre: "Azul claro" },
            { parte: "Pantalón", color: "#2c3e50", nombre: "Gris oscuro" }
        ],
        estructura: "Blusa de cuello redondo, mangas cortas y pantalón"
    },
    {
        id: 4,
        nombre: "Conjunto 2 Masculino",
        categoria: "Masculino",
        imagen: "img/products/M2.png",
        tela: "Hilo",
        colores: [
            { parte: "Camisa", color: "#4a90e2", nombre: "Azul claro" },
            { parte: "Pantalón", color: "#2c3e50", nombre: "Gris oscuro" }
        ],
        estructura: "Camisa de cuello estándar, mangas largas y pantalón"
    },
    {
        id: 5,
        nombre: "Conjunto 3 Femenino",
        categoria: "Femenino",
        imagen: "img/products/F3.png",
        tela: "Algodón",
        colores: [
            { parte: "Blusa", color: "#e74c3c", nombre: "Rojo" },
            { parte: "Falda", color: "#34495e", nombre: "Azul marino" }
        ],
        estructura: "Blusa de cuello en V, mangas cortas y falda"
    },
    {
        id: 6,
        nombre: "Conjunto 3 Masculino",
        categoria: "Masculino",
        imagen: "img/products/M3.png",
        tela: "Algodón",
        colores: [
            { parte: "Camisa", color: "#e74c3c", nombre: "Rojo" },
            { parte: "Pantalón", color: "#34495e", nombre: "Azul marino" }
        ],
        estructura: "Camisa polo, mangas cortas y pantalón"
    }
];

// Función para cargar productos desde localStorage o usar los iniciales
function cargarProductos() {
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
        return JSON.parse(productosGuardados);
    }
    // Si no hay productos guardados, guardar los iniciales
    guardarProductos(productosIniciales);
    return productosIniciales;
}

// Función para guardar productos en localStorage
function guardarProductos(productos) {
    localStorage.setItem('productos', JSON.stringify(productos));
}

// Función para obtener el siguiente ID disponible
function obtenerSiguienteId() {
    const productos = cargarProductos();
    if (productos.length === 0) return 1;
    return Math.max(...productos.map(p => p.id)) + 1;
}

// Función para agregar un producto
function agregarProducto(producto) {
    const productos = cargarProductos();
    producto.id = obtenerSiguienteId();
    productos.push(producto);
    guardarProductos(productos);
    return producto;
}

// Función para actualizar un producto
function actualizarProducto(id, datosActualizados) {
    const productos = cargarProductos();
    const index = productos.findIndex(p => p.id === id);
    if (index !== -1) {
        productos[index] = { ...productos[index], ...datosActualizados };
        guardarProductos(productos);
        return productos[index];
    }
    return null;
}

// Función para eliminar un producto
function eliminarProducto(id) {
    const productos = cargarProductos();
    const productosFiltrados = productos.filter(p => p.id !== id);
    guardarProductos(productosFiltrados);
    return productosFiltrados;
}

// Función para obtener un producto por ID
function obtenerProductoPorId(id) {
    const productos = cargarProductos();
    return productos.find(p => p.id === parseInt(id));
}
