const navegacion = document.querySelector('.navegacion');

// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos

// console.log(navegacion.children[0]); // Toma en consideración los elementos HTML


const card = document.querySelector('.card');

// card.children[1].children[1].textContent = ' Cambio en el titulo desde traversing the DOM'

// card.children[0].src = 'img/hacer2.jpg';

// console.log(card.children[0].src);

// Traversing del hijo al padre

// console.log(card.parentNode);

// Traversing al hermano siguiente 
// console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
// Seleceionamos el hermano anterior 
console.log(ultimoCard.previousElementSibling);

