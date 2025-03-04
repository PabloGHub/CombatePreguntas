import { Component, OnInit } from '@angular/core';
import {IonBackButton, IonButton, IonCol, IonContent, IonGrid, IonProgressBar, IonRow} from "@ionic/angular/standalone";

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonProgressBar
  ]
})
export class PartidaComponent  implements OnInit
{
  constructor() { }
  ngOnInit()
  {
    console.log("MQM");
  }

  // ****** Declaraciones ***** //
  _tiempo_i: number = 30;
  _vida_i: number = 100;

  _pregunta_s: string = "¿Esto es una pregunta?";
  _respuesta1_s: string = "Respuesta 1";
  _respuesta2_s: string = "Respuesta 2";
  _respuesta3_s: string = "Respuesta 3";
  _respuesta4_s: string = "Respuesta 4";



  // ****** Funciones ***** //
  responderPregunta(_respuesta_i: number)
  {
    console.log("Respuesta: " + _respuesta_i);
  }



  //
  preguntas: any[] =
  [
    {
      pregunta: "Pregunta 1",
      respuestas:
      [
        {respuesta: "Respuesta 1", correcta: false},
        {respuesta: "Respuesta 2", correcta: false},
        {respuesta: "Respuesta 3", correcta: true},
        {respuesta: "Respuesta 4", correcta: false}
      ]
    },
    {
      pregunta: "Pregunta 2",
      respuestas:
      [
        {respuesta: "Respuesta 1", correcta: true},
        {respuesta: "Respuesta 2", correcta: false},
        {respuesta: "Respuesta 3", correcta: false},
        {respuesta: "Respuesta 4", correcta: false}
      ]
    }
  ]
}
