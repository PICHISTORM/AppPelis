import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Movies } from '../services/movies';
import { Peliculas, RespuestaMDB } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page implements OnInit{

  peliculasReciente: Peliculas[]=[];

  constructor(private movies: Movies) {}

  ngOnInit() {
    this.movies.getFeature()
      .subscribe( (resp:RespuestaMDB)=>{
        console.log('Resp',resp);
        this.peliculasReciente = resp.results;

      });

  }

}
