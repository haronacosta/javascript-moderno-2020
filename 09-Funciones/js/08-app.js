// Funciones que retornan valores
function sumar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = sumar(2, 5);

console.log(resultado);

// Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return total * 1.15;
}

agregarCarrito(300);
agregarCarrito(100);
agregarCarrito(800);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar}`);
