const nombre = localStorage.getItem('nombre');

console.log(nombre);

const producto = localStorage.getItem('producto');

// JSON.parse convierte un strin en un objeto o un array, siempre y cuando el string tenga la forma adecuada

const productoJSON = JSON.parse(producto);

console.log(productoJSON);
