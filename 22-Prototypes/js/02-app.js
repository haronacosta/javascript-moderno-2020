function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
  const { nombre, saldo, categoria } = empresa;
  return `La empresa ${nombre} tiene un saldo de ${saldo} y está en la categoría ${categoria}`;
}

const haron = new Cliente('Haron', 600);

const bigtecdev = new Empresa('Bigtec', 5000, 'tecnología');

console.log(formatearCliente(haron));

console.log(formatearEmpresa(bigtecdev));
