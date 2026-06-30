import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonLabel, IonList, IonItem, IonListHeader, IonGrid, IonRow, IonSpinner, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, ModalController } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Movies } from '../services/movies';
import { ImagenPipe } from "../pipes/imagen-pipe";
import { DetalleComponent } from '../components/detalle/detalle.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonLabel, IonList, IonItem, IonListHeader, IonGrid, IonRow, IonSpinner, IonCol, IonCard, ImagenPipe, IonCardHeader, IonCardSubtitle, IonCardContent]
})
export class Tab2Page {

  textBuscar: string = '';
  peliculas: any[] = [];
  buscando: boolean = false;

  ideas: string[] = [
    'Spider-Man',
    'Batman',
    'Iron Man',
    'Superman',
    'Wonder Woman',
    'Doctor Strange',
    'The Flash',
    'Wolverine',
    'Green Lantern',
    'Thor',
    'Nightwing',
    'Daredevil',
    'Aquaman',
    'Deadpool',
    'Martian Manhunter',
    'Black Panther',
    'Zatanna',
    'Scarlet Witch',
    'Green Arrow',
    'Captain America'
  ];

    constructor(private movies: Movies,
                private modalCtrl: ModalController) {

    }


  buscar($event: any) {
    const valor= $event.detail.value;
    //console.log(valor);
    this.buscando= true;
    this.movies.buscarPeliculas(valor).subscribe( resp => {
      console.log(resp);
      this.peliculas= (resp as any)['results'];
      this.buscando= false;
    });
  }

  async detalle(id: string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: { id }
    });
    await modal.present();
  }


}
