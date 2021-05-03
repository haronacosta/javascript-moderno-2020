const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Teclado mecanico', precio: 600 },
];


// .find nos regresa como resultado la primera coincidencia que obtenga a diferencia de filter, regresa el objeto completo


const resultado = carrito.find((producto) => producto.precio === 100);

console.log(resultado);