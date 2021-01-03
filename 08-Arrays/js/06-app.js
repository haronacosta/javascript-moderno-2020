// Crear un arreglo con Spread operator
const carrito = [];

// Definir un producto
const producto = {
  nombre: 'Monitor de 20 pulgadas',
  precio: 500,
};

const producto2 = {
  nombre: 'Celular',
  precio: 600,
};

const producto3 = {
  nombre: 'Teclado mecanico',
  precio: 300,
};

let resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];

console.table(resultado);
