// For loop

// for (let i = 0; i <= 10; i += 2) {
//   console.log(`Numero: ${i}`);
// }

// Numero pares e impares

/* for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`El numero ${i} es par`);
  } else {
    console.log(`El numero ${i} es impar`);
  }
}
 */

const carrito = [
  { nombre: 'Monitor de 20 pulgadas', precio: 500 },
  { nombre: 'Monitor de 25 pulgadas', precio: 600 },
  { nombre: 'Telefono inteligente', precio: 350 },
  { nombre: 'Teclado USB', precio: 50 },
  { nombre: 'Mouse USB', precio: 40 },
  { nombre: 'Memoria RAM', precio: 75 },
  { nombre: 'Disco SSD 450GB', precio: 100 },
];

for (let i = 0; i < carrito.length; i++) {
  const producto = carrito[i];

  console.log(producto);
}
