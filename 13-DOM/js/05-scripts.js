const texto = document.querySelector('.contenido-hero h1');

// tres formar de obtener el texto 

// si en el CSS esta visibility: hidden; no lo va a encontrar
// console.log(texto.innerText);

// Este si lo va a encontrar a pesar del CSS
// console.log(texto.textContent);

// innerHTML se trae el HTML
// console.log(texto.innerHTML); 

// texto.textContent = `Nuevo texto`; // Modificamos el texto desde JS


// Selecionamos una imagen 
// const img = document.querySelector('.card img');

// Cambiamos la imagen  
// img.src="img/hacer2.jpg";