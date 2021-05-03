// spred operator 

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Teclado mecanico', precio: 600 },
];

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Esta forma no modifica el arreglo original
const meses2 = [...meses, 'Agosto'];

const nuevoProducto = {nombre: 'Disco duro', precio: 450};

const carrito2 = [...carrito, nuevoProducto];

console.log(carrito2);