// Eventos con el scroll del mouse, los eventos de scroll se manejan con window
window.addEventListener('scroll', () => {
    // Scroll vertical en pixeles 
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);

    const premium = document.querySelector('.premium');
    // Obtener informacion del posicionamiento de un elemento 
    const ubicacion = premium.getBoundingClientRect();
    if (ubicacion.top < 784) {
        console.log("El elemnto ya esta visible");
    } else {
        console.log('Aun no esta visible');
    }

})