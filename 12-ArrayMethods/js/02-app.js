const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
];

// En forEach si se le coloca un segundo parametro es el indice
meses.forEach((mes, i) => {
  if (mes === 'Abril') {
    console.log(`Encontrado en el indice ${i}`);
  }
});

// Encontrar el indice de abril usando findIndex
const indice = meses.findIndex((mes) => mes === 'Diciembre');

console.log(indice);

// Encontrar un indice de un arreglo de objetos, solo regresa el primer indice que cumpla con las caracteristicas
const indice2 = carrito.findIndex((producto) => producto.precio === 100);

console.log(indice2);
