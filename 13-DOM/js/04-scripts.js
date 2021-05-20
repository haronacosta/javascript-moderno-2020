// Tanto getElementsByClassName como getElementById no se usan mucho, hay una solución mucho mas moderna
// querySelector y querySelectorAll

// querySelector se comporta de manera similar a getElementById solo retorna un elemento o null si no lo encuentra, pero los selectores son como los de CSS

const card = document.querySelector('.card');

console.log(card);

// Podemos tener selectores especificos como CSS

const info = document.querySelector('.premium .info');

console.log(info);

// Seleccionamos el segundo card de hospedaje
const card2 = document.querySelector('section.hospedaje .card:nth-child(2)');

console.log(card2);

// Seleccionamos el formulario por el ID
const formulario = document.querySelector('#formulario');

console.log(formulario);
