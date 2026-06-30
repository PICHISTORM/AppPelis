import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonLabel } from '@ionic/angular/standalone';
import { DataLocalService } from '../services/data-local';
import { Movies } from '../services/movies';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ImagenPipe } from '../pipes/imagen-pipe';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonLabel, ImagenPipe],
})
export class Tab3Page implements OnInit {
  peliculasFavoritas: PeliculaDetalle[] = [];
  generos: any[] = [];

  constructor(
    private dataLocal: DataLocalService,
    private movies: Movies,
  ) {}

  async ngOnInit() {
    this.peliculasFavoritas = await this.dataLocal.obtenerPeliculas();
    this.generos = await this.movies.cargarGeneros();
  }

  obtenerGeneros(pelicula: PeliculaDetalle): string {
    const peliculaConIds = pelicula as PeliculaDetalle & { genre_ids?: number[] };

    if (pelicula.genres?.length) {
      return pelicula.genres.map(g => g.name).join(', ');
    }

    if (peliculaConIds.genre_ids?.length) {
      return peliculaConIds.genre_ids
        .map(id => this.generos.find(g => g.id === id)?.name)
        .filter((nombre): nombre is string => Boolean(nombre))
        .join(', ');
    }

    return 'Sin géneros';
  }
}
