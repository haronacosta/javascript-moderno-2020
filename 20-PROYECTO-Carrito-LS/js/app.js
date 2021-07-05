// Variables
const carrito = document.querySelector('#carrito');

const contenedor_carrito = document.querySelector('#lista-carrito tbody');

const vaciar_carrito = document.querySelector('#vaciar-carrito');

const lista_cursos = document.querySelector('#lista-cursos');

let articulos_carrito = [];

registrarEventListener();

function registrarEventListener() {
  // Cuando agregas un curso presionando agregar
  lista_cursos.addEventListener('click', agregarCarrito);

  // Eliminar curso
  carrito.addEventListener('click', eliminarCurso);

  document.addEventListener('DOMContentLoaded', () => {
    articulos_carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    mostrarCarrito();
  });

  //Vaciar el carrito de compra
  vaciar_carrito.addEventListener('click', (e) => {
    e.preventDefault();

    articulos_carrito = [];

    limpiarHTML();
  });
}

// Funciones
function agregarCarrito(e) {
  e.preventDefault();
  // Nos aseguramos que solo se dispare cuando se presione el boton de agregar
  if (e.target.classList.contains('agregar-carrito')) {
    const curso_selecionado = e.target.parentElement.parentElement;
    leerDatosCurso(curso_selecionado);
  }
}

function eliminarCurso(e) {
  if (e.target.classList.contains('borrar-curso')) {
    const curso_id = e.target.getAttribute('data-id');

    articulos_carrito = articulos_carrito.filter(
      (curso) => curso.id !== curso_id
    );

    mostrarCarrito();
  }
}

// Lee el contenido html del curso para agregar al carrito
function leerDatosCurso(curso) {
  // Creamos un objeto con el contenido del curso
  const info_curso = {
    img: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  };

  // Revisa si un elemento ya existe en el carrito
  const existe = articulos_carrito.some((curso) => curso.id === info_curso.id);

  if (existe) {
    // Actualizamos la cantidad
    const cursos = articulos_carrito.map((curso) => {
      if (curso.id === info_curso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });

    articulos_carrito = [...cursos];
  } else {
    // Agregamos elemento al arreglo del carrito
    articulos_carrito = [...articulos_carrito, info_curso];
  }

  mostrarCarrito();
}

// Muestra el carrito de compras en el HTML

function mostrarCarrito() {
  // Limpiamos el HTML

  limpiarHTML();

  // Recorre el carrito y genera el HTML

  articulos_carrito.forEach((curso) => {
    const { img, titulo, precio, cantidad, id } = curso;

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>
            <img src="${img}">
        </td>

        <td>
            ${titulo}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        
        <td>
            <a href='#' class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;

    // Agrega el contenido del carrito en el tbody
    contenedor_carrito.appendChild(row);
  });

  //   Sincronizamos con el localStorage

  sincronizarLocalStorage();
}

function sincronizarLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(articulos_carrito));
}

// Elimina el contendido del tbdoy
function limpiarHTML() {
  // Forma lenta
  contenedor_carrito.innerHTML = '';

  // Forma rapida
  while (contenedor_carrito.firstChild) {
    contenedor_carrito.removeChild(contenedor_carrito.firstChild);
  }
}
