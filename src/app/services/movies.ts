import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/interfaces'; // Ajusta la ruta según donde esté
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Movies {

  constructor( private http: HttpClient){ }

  getFeature(){
    return  this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2025-09-15&primary_release_date.lte=2025-10-22&api_key=31cbb55bc2237c1f8729358c60290213&language=es')
  }

}
