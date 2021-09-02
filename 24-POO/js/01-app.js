// Dos formas de declarar una clase /

// Class declaration
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostarInformacion() {
    return `Cliente: ${this.nombre} tiene un saldo de ${this.saldo}`;
  }

  //  Una propiedad statica no es necesario instanciar la clase para usarla
  static bienvenida() {
    return 'Bienvenido/a al cajero';
  }
}

const haron = new Cliente('Haron', 1000);
console.log(haron);
console.log(haron.mostarInformacion());

console.log(Cliente.bienvenida());

// class expression
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostarInformacion() {
    return `Cliente: ${this.nombre} tiene un saldo de ${this.saldo}`;
  }
};

const haron2 = new Cliente2('Haron', 1000);

console.log(haron2.mostarInformacion());
