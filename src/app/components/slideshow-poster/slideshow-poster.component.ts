import { Component, Input, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DetalleComponent } from '../detalle/detalle.component';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { Peliculas } from '../../interfaces/interfaces';
import { IonCard, ModalController } from '@ionic/angular/standalone';
register();

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
  imports: [IonCard,ImagenPipe],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SlideshowPosterComponent  implements OnInit {
    @Input() peliculas: Peliculas[] = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
    async verDetalle(id:number){
      const modal = await this.modalCtrl.create({
        component: DetalleComponent,
        componentProps:{
          id
        }
      });
      modal.present();
    }


}
