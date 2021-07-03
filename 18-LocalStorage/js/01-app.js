// LocalStorage solo admite strings

localStorage.setItem('nombre', 'Haron');

// Manera de agregar un objeto
const producto = {
  nombre: 'Monitor',
  precio: 300,
};

const productoString = JSON.stringify(producto);

localStorage.setItem('producto', productoString);

// Manera de agregar un array

const meses = ['Enero', 'Febrero', 'Marzo'];

const mesesString = JSON.stringify(meses);

localStorage.setItem('meses', mesesString);
