// Diferencias entre Funtion declaration y expression

console.log(sumar(2, 3));
function sumar(numero1, numero2) {
  return numero1 + numero2;
}

console.log(sumar2(4, 5));
const sumar2 = function (numero1, numero2) {
  return numero1 + numero2;
};
