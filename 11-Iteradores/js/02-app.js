// break y countinue
/* for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log(`NUMERO SIETE`);
    continue;
  }

  console.log(`${i}`);
} */

// BREAK PARA POR COMPLETO EL FOR
// CONTINUE TERMINA LA ITERACIÓN Y SALTA A LA SIGUIENTE

const carrito = [
  { nombre: 'Monitor de 20 pulgadas', precio: 500 },
  { nombre: 'Monitor de 25 pulgadas', precio: 600 },
  { nombre: 'Telefono inteligente', precio: 350 },
  { nombre: 'Teclado USB', precio: 50, descuento: true },
  { nombre: 'Mouse USB', precio: 40 },
  { nombre: 'Memoria RAM', precio: 75 },
  { nombre: 'Disco SSD 450GB', precio: 100 },
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`${carrito[i].nombre} tiene un descuento`);
  }
  console.log(carrito[i].nombre);
}
