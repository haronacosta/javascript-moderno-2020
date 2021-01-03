// Agregar valores al fianl y al inicio de un array
const meses = ['Enero', 'Febrero', 'Marzo'];

// Agregar al final del arreglo
meses.push('Abril');

// console.table(meses);

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

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.table(carrito);
