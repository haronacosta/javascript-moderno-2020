// Elimar elementos de un array
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

const producto4 = {
  nombre: 'Teclado mecanico plus',
  precio: 300,
};

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.push(producto4);

console.table(carrito);

// Eliminar ultimo elemento de un arreglo
// carrito.pop();
// console.table(carrito);

// Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

carrito.splice(1, 1);
console.table(carrito);
