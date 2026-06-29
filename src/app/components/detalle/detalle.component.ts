import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../../services/movies';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  @Input() id!: number;

  constructor(private movies: Movies) { }

  ngOnInit() {

    this.movies.getPeliculaDetalle(this.id.toString())
      .subscribe(resp => {
        console.log(resp);});
    this.movies.getActoresPelicula(this.id.toString())
      .subscribe(resp => {
        console.log(resp);});
  }

}
