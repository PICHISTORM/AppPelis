import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Movies } from '../services/movies';
import { Peliculas, RespuestaMDB } from '../interfaces/interfaces';
import { register } from 'swiper/element/bundle';
import { ImagenPipe } from '../pipes/imagen-pipe';
import { SlideshowBackdropComponent } from '../components/slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from '../components/slideshow-poster/slideshow-poster.component';

register();

@Component({
  selector: 'app-tab1',
  standalone:true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,ImagenPipe,SlideshowBackdropComponent,SlideshowPosterComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page implements OnInit{

  peliculasReciente: Peliculas[]=[];

  Populares: Peliculas[]=[];

  constructor(private movies: Movies) {}

  ngOnInit() {
    this.movies.getFeature()
      .subscribe( (resp:RespuestaMDB)=>{

        this.peliculasReciente = resp.results;

      });

      this.movies.getPopulares()
        .subscribe( (resp:RespuestaMDB)=>{
          console.log('Populares',resp);
          this.Populares = resp.results;
        });

  }

}
