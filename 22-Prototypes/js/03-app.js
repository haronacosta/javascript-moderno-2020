function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

/* La diferencia entre usar arrow functions y 
function es que el arrow buscara el this en 
la ventana global y function en el objeto actual
*/
Cliente.prototype.tipoCliente = function () {
  let tipo;

  if (this.saldo > 10000) {
    tipo = 'Gold';
  } else if (this.saldo > 6000) {
    tipo = 'Platinum';
  } else {
    tipo = 'Regular';
  }

  return tipo;
};

Cliente.prototype.datosCliente = function () {
  return `Nombre: ${this.nombre}, Saldo: ${
    this.saldo
  }, Tipo: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo -= retira;
};

// Instanciarlo

const pedro = new Cliente('Pedro', 12000);

// console.log(pedro);

console.log(pedro.datosCliente());

pedro.retiraSaldo(500);

console.log(pedro.datosCliente());
