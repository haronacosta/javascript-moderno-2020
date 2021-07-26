function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

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

// Heredamos propiedades
function Persona(nombre, saldo, telefono) {
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
}

// Heredamos el prototype
Persona.prototype = Object.create(Cliente.prototype);

// Recuperamos el constructor
Persona.prototype.constructor = Cliente;

const carlos = new Persona('Carlos', 5000, '+5741236547895');

console.log(carlos);
