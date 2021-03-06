// Desctructing objetos anidados
const producto = {
  nombre: 'Monitor de 20 pulgadas',
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: '1kg',
      medida: '1em',
    },
    fabricacion: {
      pais: 'China',
    },
  },
};

const {
  nombre,
  informacion,
  informacion: {
    fabricacion: { pais },
  },
} = producto;

console.log(nombre);
console.log(pais);
