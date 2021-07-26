const cliente = {
  nombre: 'Haron',
  saldo: 600,
};

console.log(cliente);

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const haron = new Cliente('Haron', 600);

console.log(haron);
