// Copiar dos objetos
'use strict';

const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: '1 kgs',
  medida: '1m',
};

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator

const resultado2 = { ...producto, ...medidas };

console.log(resultado);
console.log(resultado2);
