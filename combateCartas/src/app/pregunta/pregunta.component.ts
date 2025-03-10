import {Component, Input} from '@angular/core';
import {IonButton, IonCol, IonGrid, IonProgressBar, IonRow} from "@ionic/angular/standalone";

@Component({
    selector: 'app-pregunta',
    templateUrl: './pregunta.component.html',
    styleUrls: ['./pregunta.component.scss'],
    imports: [
        IonButton,
        IonCol,
        IonGrid,
        IonProgressBar,
        IonRow
    ]
})
export class PreguntaComponent
{
  // ****** IONIC ***** //
  constructor() { }


  // ****** Declaraciones ***** //
  @Input() _numPregunta_i: number = 0;
  @Input() _tiempo_i: number = 15;
  @Input() _vida_i: number = 100;

  // variables de preguntas
  @Input() _pregunta_s: string = "¿Esto es una pregunta?";
  @Input() _respuesta1_s: string = "Respuesta 1";
  @Input() _respuesta2_s: string = "Respuesta 2";
  @Input() _respuesta3_s: string = "Respuesta 3";
  @Input() _respuesta4_s: string = "Respuesta 4";


  // ****** Metodos ***** //
  responderPregunta(_respuesta_i: number)
  {
    console.log("Respuesta: " + _respuesta_i);
  }
}
