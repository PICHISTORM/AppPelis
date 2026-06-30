import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  private key = 'peliculas';

  async guardarPelicula(pelicula: PeliculaDetalle) {
    const actuales = await this.obtenerPeliculas();

    const yaExiste = actuales.some(p => p.id === pelicula.id);
    if (yaExiste) {
      console.log('Ya está en favoritos');
      return;
    }

    actuales.push(pelicula);

    await Preferences.set({
      key: this.key,
      value: JSON.stringify(actuales),
    });

    return true;
  }

  async eliminarPelicula(id?: number) {
    if (!id) {
      return false;
    }

    const actuales = await this.obtenerPeliculas();
    const filtradas = actuales.filter(p => p.id !== id);

    await Preferences.set({
      key: this.key,
      value: JSON.stringify(filtradas),
    });

    return true;
  }

  async obtenerPeliculas(): Promise<PeliculaDetalle[]> {
    const { value } = await Preferences.get({ key: this.key });
    return value ? JSON.parse(value) : [];
  }

  async esFavorita(id?: number): Promise<boolean> {
    if (!id) {
      return false;
    }

    const peliculas = await this.obtenerPeliculas();
    return peliculas.some(p => p.id === id);
  }

  async borrarPeliculas() {
    await Preferences.remove({ key: this.key });
  }

}
