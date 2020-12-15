// String methods replace, slice y substring

const producto = 'Monitor de 20 pulgadas';

console.log(producto);

// .replace remplaza una parte del string por otra
console.log(producto.replace('pulgadas', '"'));

console.log(producto.replace('Monitor', 'Monitor curvo'));

// .slice para cortar texto
console.log(producto.slice(0, 10));
// console.log(producto.slice(8));
// console.log(producto.slice(2, 1));

// Alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

const usuario = 'Haron';
// Obtener la inicial de un nombre
console.log(usuario.substring(0, 1));

console.log(usuario.charAt(0));
