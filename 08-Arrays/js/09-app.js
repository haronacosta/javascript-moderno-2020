// forEach metodo de JS

const carrito = [
  { nombre: 'Monitor de 20 pulgadas', precio: 500 },
  { nombre: 'Monitor de 25 pulgadas', precio: 600 },
  { nombre: 'Telefono inteligente', precio: 350 },
  { nombre: 'Teclado USB', precio: 50 },
  { nombre: 'Mouse USB', precio: 40 },
  { nombre: 'Memoria RAM', precio: 75 },
  { nombre: 'Disco SSD 450GB', precio: 100 },
];

// for (let index = 0; index < carrito.length; index++) {
//   console.log(carrito[index].nombre);
// }

carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});
