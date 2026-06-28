import { Component, Input, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { Peliculas } from '../../interfaces/interfaces';
import { IonCard } from '@ionic/angular/standalone';



@Component({

  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [ImagenPipe, IonCard]
})
export class SlideshowBackdropComponent  implements OnInit {
  @Input() peliculas: Peliculas[] = [];

  constructor() { }

  ngOnInit() {}

}
