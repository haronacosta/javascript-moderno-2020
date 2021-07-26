const hoy = new Date();

let valor = hoy;

moment.locale('es');

console.log(moment().format('DD MMMM YYYY HH:mm:ss'));

console.log(moment().format('LLLL', hoy));
