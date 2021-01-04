// Reproductor en arrow functions

const reproductor = {
  reproducir: (id = 'aleatorio') =>
    console.log(`Reproduciendo canción con el id: ${id}`),
  pausar: () => console.log(`Pausando...`),
  borrar: (id) => console.log(`Borrando canción con el id ${id}`),
  crearPlaylist: (nombre) => console.log(`Creando la playlist de ${nombre}`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadido ${cancion}`);
  },

  get obtenerCanción() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = 'Infiel';

reproductor.obtenerCanción;

reproductor.reproducir(50);
reproductor.reproducir();
reproductor.pausar();

reproductor.borrar(30);

reproductor.crearPlaylist('Trap pesao');
