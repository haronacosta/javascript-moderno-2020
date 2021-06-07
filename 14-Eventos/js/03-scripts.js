// Eventos de teclado 

const busqueda = document.querySelector('.busqueda');

//Evento que se ejecuta cuando se presiona una tecla
// busqueda.addEventListener('keydown', () => {
//     console.log("Presione una tecla");
// });


//Evento que se ejecuta cuando se suelta una tecla
// busqueda.addEventListener('keyup', () => {
//     console.log("Solte una tecla");
// });

//Evento que se ejecuta cuando se hace click por fuera del input selecionado
// busqueda.addEventListener('blur', () => {
//     console.log("Se hizo click fuera del input");
// });

//Evento que se ejecuta cuando se copia el contenido del input
// busqueda.addEventListener('copy', () => {
//     console.log("Se copio el contenido");
// });

//Evento que se ejecuta cuando se corta el contenido del input
// busqueda.addEventListener('cut', () => {
//     console.log("Se corto el contenido");
// });

//Evento que se ejecuta cuando se pega contenido en el input
// busqueda.addEventListener('paste', () => {
//     console.log("Se pego contenido");
// });

//Evento que se ejecuta cuando sucede alguno de los eventos anteriores excepto blur, es un todo en uno
busqueda.addEventListener('input', (evt) => {
    // evt es el evento que se ejecuto
    // target.value para obtener el valor del input en el evento actual 
    console.log(evt.target.value);
});