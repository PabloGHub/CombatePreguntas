import { Component, OnInit } from '@angular/core';
import {IonBackButton, IonButton, IonCol, IonContent, IonGrid, IonRow} from "@ionic/angular/standalone";

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonBackButton,
    IonButton
  ]
})
export class PartidaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
