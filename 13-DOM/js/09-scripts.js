// Cramos un nuevo enlace 

const enlace = document.createElement('a');

enlace.textContent = "Nuevo Enlace";

enlace.href = "#";

enlace.target = "_blank";

enlace.setAttribute('data-enlace', 'Valor de data');

enlace.classList.add('nueva-clase');

// Agregamos un evento 
enlace.onclick = miFuncion;

const navegacion = document.querySelector('.navegacion');

// Asi se agrega el enlace al ultimo 
// navegacion.appendChild(enlace); 

// Insertamos el enlace en la segunda posición 
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion() {
    alert("Se dio click");
}

// Creamos un card

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('concierto', 'categoria');


const parrafo2 = document.createElement('p');
parrafo2.textContent = "Concierto de Solomun";
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p');
parrafo3.textContent = "200$ por persona";
parrafo3.classList.add('precio');

// Creamos el contenedor con la clase info 

const info = document.createElement('div');

info.classList.add('info');

info.appendChild(parrafo1);

info.appendChild(parrafo2);

info.appendChild(parrafo3);

// Creamos la imagen 
const imagen = document.createElement('img');

imagen.src = 'img/hacer3.jpg';

imagen.alt = 'Concierto de Solomun';

imagen.classList.add('img-fluid');

// Creamos el card

const card = document.createElement('div');

card.appendChild(imagen);

card.appendChild(info);


// Agregamos el card al contenedor 
const contenedor = document.querySelector('.contenedor-cards');

contenedor.insertBefore(card, contenedor.children[0]);

