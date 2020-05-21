export class Api {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }
  async queryCancion() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
}
