// String methods

const producto = 'Monitor 20';

console.log(producto);

// Conoce la cantidad de letras de la cadena de texto
console.log(producto.length);

//  Conocer la posición de un string en especifico, regresa -1 si no hay coincidencia
console.log(producto.indexOf('pulgadas'));

// includes regresa true si consigue la cadena de texto (Diferencia entre mayusculas y minusculas)
console.log(producto.includes('Monitor'));

console.log(producto.includes('monitor'));
