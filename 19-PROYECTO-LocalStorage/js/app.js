// Variables
const formulario = document.querySelector('#formulario');

const lista_tweets = document.querySelector('#lista-tweets');

const array = [1, 2, 'aasf', '1', '123', 123, '5'];

let tweets = [];

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  tweets = JSON.parse(localStorage.getItem('tweets')) || [];

  crearHTML();

  eventListeners();
});

function eventListeners() {
  formulario.addEventListener('submit', agregarTweet);
}

// Funciones
function agregarTweet(e) {
  e.preventDefault();

  // Text area donde el usuario escribe el tweet
  const tweet = document.querySelector('#tweet').value;

  if (tweet === '') {
    mostrarError('Contenido no puede ir vacio');
    return;
  }

  const tweetObj = {
    id: Date.now(),
    tweet,
  };

  tweets = [...tweets, tweetObj];

  //   reinicar el formulario
  formulario.reset();

  //  Creamos el HTML de los tweets
  crearHTML(tweets);
}

// Mostrar mensaje de error
function mostrarError(error) {
  const mensaje_error = document.createElement('div');
  mensaje_error.textContent = error;
  mensaje_error.classList.add('error');

  //   Insertamos en el contenido
  const contenido = document.querySelector('#contenido');

  contenido.appendChild(mensaje_error);

  //   Eliminar mensaje de error despues de 3 segundos
  setTimeout(() => {
    mensaje_error.remove();
  }, 3000);
}

// Muestra un listado de los tweets
function crearHTML() {
  if (tweets.length >= 0) {
    limpiarHTML();

    tweets.forEach((tweet) => {
      // Agregar botton de eliminar

      const boton_eliminar = document.createElement('button');
      boton_eliminar.classList.add('borrar-tweet');
      boton_eliminar.innerText = 'X';

      //   Añadir la function de eliminar el tweet

      boton_eliminar.onclick = () => {
        borrarTweet(tweet.id);
      };

      //   Creamos el html
      const li = document.createElement('li');

      //  Añadimos el texto
      li.textContent = tweet.tweet;

      li.appendChild(boton_eliminar);

      //   Agremados a la lista
      lista_tweets.appendChild(li);
    });

    sincronizarStorage();
  }
}

// Agregar tweets actuales a localStorage

function sincronizarStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

function limpiarHTML() {
  while (lista_tweets.firstChild) {
    lista_tweets.removeChild(lista_tweets.firstChild);
  }
}

function borrarTweet(id) {
  tweets = tweets.filter((t) => t.id !== id);

  crearHTML();
}
