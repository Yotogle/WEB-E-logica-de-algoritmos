function findMax(arr) {
    // TODO: Agregar la condición del caso base
    if (arr.length <= 1) {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // TODO: Combinar las soluciones comparando los máximos}
    if (leftMax > rightMax) {
    //return  máximo entre leftMax y rightMax 
        return leftMax;
    } else {
        return rightMax;
    }

   
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7, 12, 25 , 1, 4, 6, 9, 11, 15, 20, 30];
console.log(`El número más grande es: ${findMax(numbers)}`);