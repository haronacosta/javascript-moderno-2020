class Cliente {
  #nombre;

  constructor(nombre, saldo) {
    this.#nombre = nombre;
    this.saldo = saldo;
  }

  mostarInformacion() {
    return `Cliente: ${this.#nombre} tiene un saldo de ${this.saldo}`;
  }

  //  Una propiedad statica no es necesario instanciar la clase para usarla
  static bienvenida() {
    return 'Bienvenido/a al cajero';
  }
}

const cliente = new Cliente('Haron', 1000);

console.log(cliente.mostarInformacion());
