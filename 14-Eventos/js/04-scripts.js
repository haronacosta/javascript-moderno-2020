// Eventos en el formulario
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);
function validarFormulario (e) {
    e.preventDefault();

    console.log(`Consumiendo API`);
}