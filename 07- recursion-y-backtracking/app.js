// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota","consola de videojuegos","barco","pelota de futbol","espada","trompo","pista de autos","muñeco de acción","rompecabezas 3D","pelota de baloncesto","patineta","bicicleta","patines","cochecito de muñecas","carrito de compras","caballito de madera","tijeras de papel","pinturas para niños"];

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    } 
  // TODO: Incluye el caso base donde se encuentra el regalo.
  if (gifts[index] === giftName) {
    return `${giftName} está en la posición ${index}.`;
  }
  // TODO: Realiza la llamada recursiva para seguir buscando el regalo.
  if (gifts[index] !== giftName) {
    return findGift(gifts, giftName, index + 1);
  }
}
// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Lego está en la posición 3."
giftToFind = "patines";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "patines está en la posición 19."

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Camión no está en la lista."