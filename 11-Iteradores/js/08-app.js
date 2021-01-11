// for in itera sobre objetos

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

const automovil = {
  modelo: 'Camaro',
  year: 1969,
  motor: '6.0',
};

// for (let propiedad in automovil) {
//   console.log(`${automovil[propiedad]}`);
// }

// Con esto se itera para obtener la llave y el valor
for (let [llave, valor] of Object.entries(automovil)) {
  console.log(`El valor de ${llave} es ${valor}`);
}
