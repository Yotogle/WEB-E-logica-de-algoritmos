const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        const pareja = [arr[inicio], arr[siguiente]];
        if (pareja[0].charAt(0) === pareja[1].charAt(0)) {
            return pareja; // Retorna la primera pareja encontrada
        }

        siguiente++;
        inicio++;
   
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]