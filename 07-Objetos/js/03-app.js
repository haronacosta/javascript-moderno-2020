// Agregar y elminar propiedades de un objeto

const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
};

// Agregar nuevas propiedades a los objetos
producto.imagen = 'imagen.jpg';

// Eliminar una propiedad
delete producto.disponible;

console.log(producto.nombre);
console.log(producto);
