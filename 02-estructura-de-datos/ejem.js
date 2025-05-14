//Crea un arreglo vacio llamado lista de ListaDeCompras

let ListaDeCompras = [] 

// Implementa una función que agregue un producto a la lista de compras
const agregarProducto = producto => {
    ListaDeCompras.push(producto);
}

// Implementa una función que elimine un producto de la lista de compras
const eliminarProducto = productoAEliminar => {
    let nuevoArray = ListaDeCompras.filter(producto => producto.nombre !== productoAEliminar)
    ListaDeCompras = nuevoArray;
}

const mostrarLista = () => {
    listaDeCompras.forEach(item => console.log(item));
}   


agregarProducto ({
    nombre: "Leche",
    precio: 1.5,
    cantidad: 2
})

agregarProducto ({
    nombre: "carne",
    precio: 1.5,
    cantidad: 2
})
agregarProducto ({
    nombre: "huevos",
    precio: 1.5,
    cantidad: 2
})

eliminarProducto("carne");
mostrarLista();