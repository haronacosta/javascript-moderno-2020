// Concatenar strings y template strings

const producto = 'Monitor 20 pulgadas';

const precio = '30 USD';

// Opción 1 con el metodo concat
console.log(producto.concat(' en ' + precio));

// Opción 2 con el signo +
console.log('El producto ' + producto + ' en ' + precio);

// Opción 3 Template strings ó template literals

console.log(`El producto ${producto} en ${precio}`);
