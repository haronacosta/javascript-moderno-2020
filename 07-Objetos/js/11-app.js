// Funciones en objetos y acceder a sus valores
'use strict';

const producto = {
  nombre: 'Monitor de 20 pulgadas',
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de ${this.precio}`
    );
  },
};

const producto2 = {
  nombre: 'Monitor de 24 pulgadas',
  precio: 350,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de ${this.precio}`
    );
  },
};

producto.mostrarInfo();
