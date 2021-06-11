// Variables
const btn_enviar = document.querySelector('#enviar');
const btn_reset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();

function eventListeners() {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Envio del formulario
    formulario.addEventListener('submit', enviarEmail);

    // Resetear formulario

    btn_reset.addEventListener('click', reiniciarFormulario);
}

//Funciones
function iniciarApp() {
    btn_enviar.disabled = true;

    btn_enviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (e.target.value.length > 0) {
        // Elimina los errores 

        const error = document.querySelector('p.error');

        if (error) {
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');

    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son requeridos');
    }

    if (e.target.type === 'email') {
        
        if (regex.test(e.target.value)) {

           const error = document.querySelector('p.error');

            if (error) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {

            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');

            mostrarError('El email no es valido');
        }
    }

    if (regex.test(email.value) && asunto.value !== '' && mensaje.value  !== '') {
        btn_enviar.disabled = false;

        btn_enviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } 
}

function mostrarError(mensaje) {
   const mensajeError = document.createElement('p');

   mensajeError.textContent = mensaje;

   mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'error');

   const errores = document.querySelectorAll('.error');

   if (errores.length === 0) {
        formulario.appendChild(mensajeError);
   }
}

function enviarEmail(e) {
    e.preventDefault();

    //  Mostrar el spinner 
    const spinner = document.querySelector('#spinner');

    spinner.style.display = 'flex';

    // Despues de tres segundos ocultar spinner y mostrar mensaje

    setTimeout(() =>{
        spinner.style.display = 'none';

        // Mensaje que dice que el mensaje se envio correctamente
        const parrafo = document.createElement('p');
        
        parrafo.textContent = 'El mensaje se envio correctamente';

        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();
            reiniciarFormulario()
        }, 5000);
    }, 3000)

}

// Funcion para el reset del formulario  
function reiniciarFormulario() {
    formulario.reset();

    email.classList.remove('border', 'border-green-500');
    asunto.classList.remove('border', 'border-green-500');
    mensaje.classList.remove('border', 'border-green-500');

    email.classList.remove('border', 'border-red-500');
    asunto.classList.remove('border', 'border-red-500');
    mensaje.classList.remove('border', 'border-red-500');

    iniciarApp();
}