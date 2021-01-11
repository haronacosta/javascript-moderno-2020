// forEach y .map

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

// pendientes.forEach((pendiente) => console.log(pendiente));

const carrito = [
  { nombre: 'Monitor de 20 pulgadas', precio: 500 },
  { nombre: 'Monitor de 25 pulgadas', precio: 600 },
  { nombre: 'Telefono inteligente', precio: 350 },
  { nombre: 'Teclado USB', precio: 50 },
  { nombre: 'Mouse USB', precio: 40 },
  { nombre: 'Memoria RAM', precio: 75 },
  { nombre: 'Disco SSD 450GB', precio: 100 },
];

// forEach y .map funcionan de la misma manera, la unica diferencia es que .map genera un nuevo
// arreglo a partir de array

const nuevoArreglo = carrito.forEach((producto) => producto.nombre);

const nuevoArreglo2 = carrito.map((producto) => producto.nombre);

console.log(nuevoArreglo);

console.log(nuevoArreglo2);
