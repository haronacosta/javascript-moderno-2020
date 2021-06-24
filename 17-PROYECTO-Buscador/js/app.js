//Variables

const resultado = document.querySelector('#resultado');

const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const maximo = document.querySelector('#maximo');
const minimo = document.querySelector('#minimo');
const puertas = document.querySelector('#puertas');
const color = document.querySelector('#color');
const transmision = document.querySelector('#transmision');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un obeto con los datos de la busqueda
const datos_busqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  color: '',
  puertas: '',
  transmision: '',
};

//Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos);

  // Obtener años de los carros
  llenarSelect();
});

// Event listener de selects

marca.addEventListener('change', (e) => {
  datos_busqueda.marca = e.target.value;

  filtrarAuto();
});

year.addEventListener('change', (e) => {
  datos_busqueda.year = parseInt(e.target.value);
  filtrarAuto();
});

maximo.addEventListener('change', (e) => {
  datos_busqueda.maximo = e.target.value;
  filtrarAuto();
});

minimo.addEventListener('change', (e) => {
  datos_busqueda.minimo = e.target.value;

  filtrarAuto();
});

color.addEventListener('change', (e) => {
  datos_busqueda.color = e.target.value;

  filtrarAuto();
});

puertas.addEventListener('change', (e) => {
  datos_busqueda.puertas = parseInt(e.target.value);

  filtrarAuto();
});

transmision.addEventListener('change', (e) => {
  datos_busqueda.transmision = e.target.value;

  filtrarAuto();
});

//Funciones
const mostrarAutos = (autos) => {
  limpiarHTML();

  autos.forEach(
    ({ modelo, transmision, marca, year, puertas, precio, color }) => {
      const autoHtml = document.createElement('p');

      autoHtml.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión ${transmision} - Precio ${precio} - Color: ${color}
        `;

      // Insertamos en el HTML
      resultado.appendChild(autoHtml);
    }
  );
};

// Limpiamos el HTML5
const limpiarHTML = () => {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
};

const llenarSelect = () => {
  for (let i = max; i > min; i--) {
    const option = document.createElement('option');

    option.textContent = i;

    year.appendChild(option);
  }
};

const filtrarAuto = () => {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMaximo)
    .filter(filtrarMinimo)
    .filter(filtrarPuertas)
    .filter(filtrarColor)
    .filter(filtrarTransmision);

  console.log(resultado);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
};

const filtrarMarca = (auto) => {
  const { marca } = auto;

  if (datos_busqueda.marca) {
    return marca === datos_busqueda.marca;
  }

  return auto;
};

const filtrarYear = (auto) => {
  const { year } = auto;

  if (datos_busqueda.year) {
    return year === datos_busqueda.year;
  }

  return auto;
};

const filtrarMaximo = (auto) => {
  const { precio } = auto;

  if (datos_busqueda.maximo) {
    return precio <= datos_busqueda.maximo;
  }

  return auto;
};

const filtrarMinimo = (auto) => {
  const { precio } = auto;

  if (datos_busqueda.minimo) {
    return precio >= datos_busqueda.minimo;
  }

  return auto;
};

const filtrarPuertas = (auto) => {
  const { puertas } = auto;

  if (datos_busqueda.puertas) {
    return puertas === datos_busqueda.puertas;
  }

  return auto;
};

const filtrarColor = (auto) => {
  const { color } = auto;

  if (datos_busqueda.color) {
    return color === datos_busqueda.color;
  }

  return auto;
};

const filtrarTransmision = (auto) => {
  const { transmision } = auto;

  if (datos_busqueda.transmision) {
    return transmision === datos_busqueda.transmision;
  }

  return auto;
};

const noResultado = () => {
  const no_resultado = document.createElement('div');

  no_resultado.classList.add('alerta', 'error');

  no_resultado.textContent =
    'No hay resultados, intenta con otros terminos de busqueda';

  limpiarHTML();

  resultado.appendChild(no_resultado);
};
