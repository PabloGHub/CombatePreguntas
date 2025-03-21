import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IonButton, IonCol, IonGrid, IonProgressBar, IonRow} from "@ionic/angular/standalone";

@Component({
    selector: 'app-pregunta',
    templateUrl: './pregunta.component.html',
    styleUrls: ['./pregunta.component.scss'],
    imports: [
        IonButton,
        IonCol,
        IonProgressBar,
        IonRow
    ]
})
export class PreguntaComponent
{
  // ****** IONIC ***** //
  constructor() { }


  // ****** Declaraciones ***** //
  //@Input() _numPregunta_i: number = 0;
  @Input() _maxTiempo_i: number = 20;
  @Input() _tiempo_i: number = 20;
  @Input() _vida_i: number = 100;
  @Input() _nombre_s: string = "";
  @Input() _cantidad_i: number = 0;

  // variables de preguntas
  @Input() _pregunta_s: string = "¿Esto es una pregunta?";
  @Input() _respuesta1_s: string = "Respuesta 1";
  @Input() _respuesta2_s: string = "Respuesta 2";
  @Input() _respuesta3_s: string = "Respuesta 3";
  @Input() _respuesta4_s: string = "Respuesta 4";

  // Variables de retorno
  @Output() _respuesta_i = new EventEmitter<number>();


  // ****** Metodos ***** //
  responderPregunta(_respuesta_i: number)
  {
    console.log("Respuesta: " + _respuesta_i);
    this._respuesta_i.emit(_respuesta_i);
  }

  get barraTiempo()
  {
    if (this._tiempo_i <= this._maxTiempo_i * 0.25)
      return 'barraProgreso final';

    else if (this._tiempo_i <= this._maxTiempo_i * 0.6)
      return 'barraProgreso medio';

    else
      return 'barraProgreso';
  }

}
