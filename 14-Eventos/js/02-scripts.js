// Eventos del mouse 

const navegacion = document.querySelector('.navegacion');

// Evento que se dispara al hacer click en el elemento
// navegacion.addEventListener('click', () => {
//     console.log("Click en navegación");
// })

//Evento que se dispara al entrar el mouse al elemento 
navegacion.addEventListener('mouseenter', () => {
    console.log("Entre al navegacion");
});


//Evento que se dispara al salir el mouse del elemento
navegacion.addEventListener('mouseout', () => {
    console.log("Salí de navegacion");
});

//Evento que se dispara al hacer click del elemento
navegacion.addEventListener('mousedown', () => {
    console.log("Hize click");
});

//Evento que se dispara despues de hacer click del elemento y levantar el click
navegacion.addEventListener('mouseup', () => {
    console.log("Post click");
});

//Evento que se dispara despues de hacer doble click en el elemento
navegacion.addEventListener('dblclick', () => {
    console.log("Hize doble click");
});