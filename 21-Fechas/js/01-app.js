const hoy = new Date();

// Año
let valor = hoy.getFullYear();

// Mes
valor = hoy.getMonth() + 1;

//  Dia del mes
valor = hoy.getDate();

// Minutos
valor = hoy.getMinutes();

console.log(valor);
