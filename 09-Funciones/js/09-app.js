// Añadir funciones a un objeto

const reproductor = {
  reproducir: function (id = 'aleatorio') {
    console.log(`Reproduciendo canción con el id: ${id}`);
  },
  pausar: function () {
    console.log(`Pausando...`);
  },
  borrar: function (id) {
    console.log(`Borrando canción con el id ${id}`);
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la playlist de ${nombre}`);
  },
};

reproductor.reproducir(50);
reproductor.reproducir();
reproductor.pausar();

reproductor.borrar(30);

reproductor.crearPlaylist('Trap');
