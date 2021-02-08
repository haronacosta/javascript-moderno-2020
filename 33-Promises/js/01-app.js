// Callbacks
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

// función de Callback
function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 4000);
}

function mostrarPaises() {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 2000);
}

nuevoPais('Alemania', mostrarPaises);
