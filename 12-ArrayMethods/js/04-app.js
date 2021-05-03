const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Teclado mecanico', precio: 600 },
];

  
// Filter crea un nuevo arreglo con los elementos que cumplan la condición 

// const resultado = carrito.filter((producto) => producto.precio > 400) 

// const resultado = carrito.filter((producto) => producto.precio < 400) 

// Usando includes podemos validar si esta presente la palabra teclado 

const resultado = carrito.filter((producto) => producto.nombre.includes('Teclado')) 

console.log(resultado);