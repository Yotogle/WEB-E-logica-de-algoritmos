// Crea un arreglo vacío llamado ListaDeCompras 
let listaDeCompras = [];  // Cambiado a minúscula para ser consistente con el uso posterior

// Función para agregar un producto a la lista de compras
const agregarProducto = producto => {
    listaDeCompras.push(producto);
}

// Función para eliminar un producto de la lista de compras
const eliminarProducto = productoAEliminar => {
    listaDeCompras = listaDeCompras.filter(producto => producto.nombre !== productoAEliminar);
}

// Función para mostrar la lista
const mostrarLista = () => {
    listaDeCompras.forEach(item => console.log(item));
}

// Agregamos productos
agregarProducto({
    nombre: "Leche",
    precio: 1.5,
    cantidad: 2
});

agregarProducto({
    nombre: "carne",
    precio: 1.5,
    cantidad: 2
});

agregarProducto({
    nombre: "huevos",
    precio: 1.5,
    cantidad: 2
});

eliminarProducto("carne");
mostrarLista();