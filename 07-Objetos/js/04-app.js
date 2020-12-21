const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
};

// const nombre = producto.nombre;

// console.log(nombre);
// Destructuring de las variables, se puede extraer variables del objeto
const { nombre, precio } = producto;

console.log(nombre, precio);
