import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonLabel, IonList, IonItem, IonListHeader, IonGrid, IonRow, IonSpinner, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonSearchbar, IonLabel, IonList, IonItem, IonListHeader, IonGrid, IonRow, IonSpinner, IonCol]
})
export class Tab2Page {

  textBuscar: string = '';
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

  buscar($event: any) {
    const valor= $event.detail.value;
    console.log(valor);
  }

  constructor() {}

}
