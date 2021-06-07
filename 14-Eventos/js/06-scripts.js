// Event bubbling 

const cardDiv = document.querySelector('.card');

const infoDiv = document.querySelector('.info');

const titulo = document.querySelector('.titulo');

// Para evitar el event bubbling usamos el stopPropagation
cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en Card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en info');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en titulo');
});