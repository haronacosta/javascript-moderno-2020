const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
];

//Comprobar si un valor existe en un arreglo

// meses.forEach((mes) => {
//   if (mes === 'Enero') {
//     console.log('Enero si existe');
//   }
// });

// Includes verifica si un valor esta en un array, no funciona en un arreglo de objetos
// const resultado = meses.includes('Dciciembre');

// console.log(resultado);

//  .some se utiliza en un arreglo de objetos
const existe = carrito.some((producto) => producto.nombre === 'Teclado');

console.log(existe);

// Un arreglo tradicional con .some()

// const existe2 = meses.some((mes) => mes === 'Febrero');

// console.log(existe2);
