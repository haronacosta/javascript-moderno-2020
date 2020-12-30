// Congelar un objeto

// Se activa el modo estricto
'use strict';

const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
};

// Se congela un objeto

Object.freeze(producto);

// Validamos que este congelado el objeto
console.log(Object.isFrozen(producto));
