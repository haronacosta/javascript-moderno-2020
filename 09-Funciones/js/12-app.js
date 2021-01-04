// .map con arrow functions

const carrito = [
  { nombre: 'Monitor de 20 pulgadas', precio: 500 },
  { nombre: 'Monitor de 25 pulgadas', precio: 600 },
  { nombre: 'Telefono inteligente', precio: 350 },
  { nombre: 'Teclado USB', precio: 50 },
  { nombre: 'Mouse USB', precio: 40 },
  { nombre: 'Memoria RAM', precio: 75 },
  { nombre: 'Disco SSD 450GB', precio: 100 },
];

// .map te regresa un nuevo arreglo

// const nuevoArreglo = carrito.map(function (producto) {
//     return `${producto.nombre} - Precio: ${producto.precio}`;
//   });

const nuevoArreglo = carrito.map(
  (producto) => `${producto.nombre} - Precio: ${producto.precio}`
);

console.log(nuevoArreglo);
