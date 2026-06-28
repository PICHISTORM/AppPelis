import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/interfaces';
import { register } from 'swiper/element/bundle';
register();
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { IonButton, IonCard, IonIcon } from '@ionic/angular/standalone';
import { ParesPipe } from "../../pipes/pares-pipe";

import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ImagenPipe, IonCard, ParesPipe, IonButton, IonIcon,]

})
export class SlideshowParesComponent  implements OnInit {
    @Input() peliculas: Peliculas[] = [];
    @Output() cargarMas = new EventEmitter();
  constructor() {
    addIcons({ add });
  }




  ngOnInit() {}

    onClick(){
    this.cargarMas.emit();
  }

}
