const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// Filtrar productos con precio menor a 100
// El método filter() crea un nuevo arreglo con todos los elementos que cumplan la condición implementada por la función dada.
const PrecioMenor100 = productos.filter(producto => producto.precio < 100);
console.log(PrecioMenor100);
//ordena los productos alfabéticamente por nombre
const ordenarProductos = productos.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
// cambia el arreglo y devuelve solo el nombre de los productos
const nombresOrdenados = ordenarProductos.map(producto => producto.nombre);
// muestra el índice y el nombre de cada producto
nombresOrdenados.forEach((nombre, index) => {
  console.log(`${index + 1}. ${nombre}`);
});