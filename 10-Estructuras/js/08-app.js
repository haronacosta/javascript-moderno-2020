const autenticado = true;

/* if (autenticado) {
  console.log('El usuario esta autenticado');
} */

const puntaje = 500;

revisarPuntaje(puntaje);

function revisarPuntaje(puntaje) {
  if (puntaje > 400) {
    console.log('Excelente!!');
    return;
  }

  if (puntaje > 300) {
    console.log('Buen puntaje... felicidades');
    return;
  }
}
