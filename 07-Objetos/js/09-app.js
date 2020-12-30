// Sellar un objeto

// Se activa el modo estricto
'use strict';

const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
};

// Se sella un objeto, no se puede agregar o eliminar propiedades, solo se pueden modificar
Object.seal(producto);

// Validamos que este congelado el objeto
console.log(producto);
