let elemento;

elemento = document; // Toma todos los elementos del documento

elemento = document.all; //Lista todos los elementos

elemento = document.head; // Toma la etiqueta head del documento

elemento = document.body; // Toma la etiqueta body

elemento = document.domain; // Trae el dominio donde esta alojado el documento

// FORMULARIOS

elemento = document.forms; // Seleciona y lista todos los formularios, regresa un array

elemento = document.forms[0];

elemento = document.forms[0].id; // Toma el id del primer formulario del documento

elemento = document.forms[0].method; // Toma el metodo del primer formulario del documento

elemento = document.forms[0].classList; // Lista las clases en el formulario, regresa un array

elemento = document.forms[0].action; // Nos regresa el action del formulario

// LINKS

elemento = document.links; // Listamos los enlaces en el documento

elemento = document.links[4]; // Toma el quinto enlace que consigue

elemento = document.links[4].classList; // Listas las clases en formato de array

elemento = document.links[4].className; // Regresa un string con lo que se tenga en la propiedad class

// IMAGENES

elemento = document.images; // Lista todas las imagenes del documento

elemento = document.scripts; // Lista todos los scripts que se cargan en el documento

console.log(elemento);
