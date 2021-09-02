// Constructores

function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

// Realiza la cotización del seguro
Seguro.prototype.cotizarSeguro = function () {
  /*
  1. Americano = 1.15
  2. Asiatico = 1.05
  3. Europeo = 1.35
  */

  let cantidad = 0;
  const base = 2000;

  switch (this.marca) {
    case '1':
      cantidad = base * 1.15;
      break;
    case '2':
      cantidad = base * 1.05;
      break;
    case '3':
      cantidad = base * 1.35;
      break;

    default:
      break;
  }

  // Leemos el año
  const diferencia = new Date().getFullYear() - this.year;

  // Se le resta un 3% por cada año de diferencia
  cantidad -= (diferencia * 3 * cantidad) / 100;

  /* 
  1. Si el seguro es basico se multiplica por un 30% mas
  2. Si el seguro es completo se multipla por un 50% mas
  */

  if (this.tipo === 'basico') {
    cantidad *= 1.3;
  } else {
    cantidad *= 1.5;
  }

  return cantidad;
};

function UI() {}

// Llenar las opciones de los años
UI.prototype.llenarOpciones = () => {
  const today = new Date();

  const max = today.getFullYear();
  const min = max - 10;

  const selectYear = document.querySelector('#year');

  for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};

// Muestra las alertas en pantalal
UI.prototype.mostrarAlerta = (mensaje, tipo) => {
  const div = document.createElement('div');

  const resultado = document.querySelector('#resultado div');

  if (resultado) {
    resultado.remove();
  }

  if (tipo === 'error') {
    div.classList.add('error');
  } else {
    div.classList.add('correcto');
  }

  div.classList.add('mensaje');

  div.textContent = mensaje;

  // Insertar HTML

  const formulario = document.querySelector('#cotizar-seguro');
  formulario.insertBefore(div, document.querySelector('#resultado'));

  setTimeout(() => {
    div.remove();
  }, 3000);
};

UI.prototype.mostarResultado = (total, seguro) => {
  // Crear resultado
  const div = document.createElement('div');

  const { marca, year, tipo } = seguro;

  let marcaTexto;

  switch (marca) {
    case '1':
      marcaTexto = ' Americano';
      break;
    case '2':
      marcaTexto = ' Asiatico';
      break;
    case '3':
      marcaTexto = 'Europeo';
      break;

    default:
      break;
  }

  div.classList.add('mt-10');

  div.innerHTML = `
  <p class="header">Tu resumen</p>
  <p class="font-bold">Marca: <span class="font-normal">${marcaTexto}</span></p>
  <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
  <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
  <p class="font-bold">Total: <span class="font-normal">${total}</span></p>
  `;

  const resultado = document.querySelector('#resultado');

  const spinner = document.querySelector('#cargando');

  spinner.classList.remove('hidden');

  spinner.classList.add('block');

  setTimeout(() => {
    // Se borra el spinner
    spinner.classList.add('hidden');
    spinner.classList.remove('block');

    // Se muestra el resultado

    resultado.appendChild(div);
  }, 3000);
};

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
  ui.llenarOpciones();
});

eventListeners();

function eventListeners() {
  const formulario = document.querySelector('#cotizar-seguro');
  formulario.addEventListener('submit', cotizarSeguro);
}

// Funciones

function cotizarSeguro(e) {
  e.preventDefault();

  // Leer la marca seleccionada
  const marca = document.querySelector('#marca').value;

  // Leer el año selecionado
  const year = document.querySelector('#year').value;

  // Leer el tipo de cobertura
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if (marca.length === 0 || year === '' || tipo === '') {
    ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
    return;
  }

  ui.mostrarAlerta('Cotizando...', 'exito');

  // Instanciar el Seguro
  const seguro = new Seguro(marca, year, tipo);

  const total = seguro.cotizarSeguro();

  ui.mostarResultado(total, seguro);

  // Utilizar el prototype que va a calcular el seguro
}
