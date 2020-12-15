// Cortar espacios en blanco
const producto = '                Monitor de 20 pulgadas             ';

console.log(producto);

console.log(producto.length);

// Eliminar del inicio
console.log(producto.trimStart());

// Eliminar el final
console.log(producto.trimEnd());

// Usando ambos metodos
console.log(producto.trimStart().trimEnd());

//Elimina los espacios en el inicio y el final
console.log(producto.trim().length);
