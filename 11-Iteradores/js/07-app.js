// for .. of itera sobre arreglos

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

const productos = [
  { nombre: 'Monitor de 20 pulgadas', precio: 500 },
  { nombre: 'Monitor de 25 pulgadas', precio: 600 },
  { nombre: 'Telefono inteligente', precio: 350 },
  { nombre: 'Teclado USB', precio: 50 },
  { nombre: 'Mouse USB', precio: 40 },
  { nombre: 'Memoria RAM', precio: 75 },
  { nombre: 'Disco SSD 450GB', precio: 100 },
];

for (const pendiente of pendientes) {
  console.log(pendiente);
}

for (const producto of productos) {
  console.log(producto.nombre);
}
