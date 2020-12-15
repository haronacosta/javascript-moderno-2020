// String methods repeat y split

const producto = 'Monitor 20 pulgadas';

// .repeat te va a permitir repetir una cadena de texto
const texto = 'en promoción'.repeat(3);

console.log(texto);

console.log(`${producto} ${texto}!!!`);

// Split, para dividir un string, se le pasa por parametro el caracter de referencia

const actividad = 'Estoy aprendiendo javascript moderno';

console.log(actividad.split(' '));

const hobbies =
  'Leer, caminar, escuchar música, escribir, aprender a programar';

console.log(hobbies.split(','));
