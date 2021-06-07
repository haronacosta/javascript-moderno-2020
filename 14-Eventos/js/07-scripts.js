// Detener Event bubbling con delegation

const cardDiv = document.querySelector('.card');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('titulo')) {
        console.log(`Diste click en un titulo`);
    }

      if (e.target.classList.contains('precio')) {
        console.log(`Diste click en el precio`);
    }


      if (e.target.classList.contains('card')) {
        console.log(`Diste click en el card`);
    }
})