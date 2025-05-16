function findLongestWord(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(' '); // Dividir el texto en palabras

    let longestWord = ''; // Inicializar la palabra más larga

    // TODO: Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++) {
        const actualWord = words[i]; // Obtener la palabra actual
        // TODO: Comparar la longitud de la palabra actual con la más larga
        if (actualWord.length > longestWord.length) {
            // Actualizar la palabra más larga
            longestWord = actualWord;
        }
    }

    // TODO: Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"

// Ejemplo de uso 2
const text2 = "Antaño, si lo recuerdo bien, mi vida era un festín donde se abrían todos los corazones, donde todos los vinos corrían. Una noche, senté a la belleza en entre mis piernas. —Y la encontré amarga. —Y la injurié. ";
console.log(findLongestWord(text2));