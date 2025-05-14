// Un array vacio
let listaDeCompras = [];

// Función para agregar un producto
const agregarProducto = () => {
    let producto = prompt("Ingrese el producto");
    if (producto) {
        listaDeCompras.push(producto);
    }
}

// Convertimos a Set para eliminar duplicados
listaDeCompras = new Set(listaDeCompras); 

// Agregamos productos (ejemplo)
listaDeCompras.add("Frutas");
listaDeCompras.add("shampoo");
listaDeCompras.add("Frutas"); // No agrega frutas porque es valor repetido
listaDeCompras.add("carne");

console.log(listaDeCompras);  // Muestra: Set {"Frutas", "shampoo", "carne"}

// Convertimos de vuelta a array para usar shift()
let listaArray = [...listaDeCompras];

// Eliminamos el primer elemento
let elementoEliminado = listaArray.shift();
console.log("Elemento eliminado:", elementoEliminado);


listaDeCompras = new Set(listaArray);
console.log(listaDeCompras);