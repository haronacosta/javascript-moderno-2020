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

// const haron = new Cliente('Haron', 1000);

// Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }

  static bienvenida() {
    return 'Bienvenido/a al cajero de empresas';
  }
}

const empresa = new Empresa('Bigtec', 10000, 04125550055, 'Tech');
console.log(Cliente.bienvenida());

console.log(Empresa.bienvenida());
