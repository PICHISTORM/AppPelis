import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Movies } from '../../services/movies';
import { IonContent, IonLabel, IonItem, IonCol, IonIcon, IonNote, IonGrid, IonRow, IonCard, IonChip, ModalController } from "@ionic/angular/standalone";
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
register();

import { addIcons } from 'ionicons';
import { thumbsUpOutline, peopleOutline, arrowBackCircleOutline, starOutline, star } from 'ionicons/icons';
import { DataLocalService } from 'src/app/services/data-local';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonLabel, ImagenPipe, IonItem, IonCol, IonIcon, IonNote, IonGrid, IonRow, IonCard, CommonModule, IonChip],
})
export class DetalleComponent  implements OnInit {

  @Input() id!: number;

  pelicula?: PeliculaDetalle;
  actores: Cast[] = [];
  oculto: number = 150;
  esFavorito = false;

  constructor(
    private movies: Movies,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService,
  ) {

    addIcons({ thumbsUpOutline, peopleOutline, arrowBackCircleOutline, starOutline, star });

    }

  async ngOnInit() {
    this.movies.getPeliculaDetalle(this.id.toString())
      .subscribe(async resp => {
        this.pelicula = resp;
        if (this.pelicula?.id) {
          this.esFavorito = await this.dataLocal.esFavorita(this.pelicula.id);
        }
      });

    this.movies.getActoresPelicula(this.id.toString())
      .subscribe(resp => {
        console.log(resp);
        this.actores = resp.cast;
      });
  }


  onClick(){

  }

  regresar(){
    this.modalCtrl.dismiss();

  }

  async favorito() {
    if (!this.pelicula?.id) return;

    if (this.esFavorito) {
      await this.dataLocal.eliminarPelicula(this.pelicula.id);
    } else {
      await this.dataLocal.guardarPelicula(this.pelicula);
    }

    this.esFavorito = await this.dataLocal.esFavorita(this.pelicula.id);
  }

}
