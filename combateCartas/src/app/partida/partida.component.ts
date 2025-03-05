import {Component, numberAttribute, OnInit} from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonCol,
  IonContent, IonFooter,
  IonGrid,
  IonImg,
  IonProgressBar,
  IonRow
} from "@ionic/angular/standalone";

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
    IonProgressBar,
    IonImg,
    IonFooter
  ]
})
export class PartidaComponent  implements OnInit
{
  constructor() { }
  ngOnInit()
  {
    this.iniciarRonda();
  }

  // ****** Declaraciones ***** //
  _numPregunta_i: number = 0;
  _tiempo_i: number = 30;
  _vida_i: number = 100;

  // variables de preguntas
  _pregunta_s: string = "¿Esto es una pregunta?";
  _respuesta1_s: string = "Respuesta 1";
  _respuesta2_s: string = "Respuesta 2";
  _respuesta3_s: string = "Respuesta 3";
  _respuesta4_s: string = "Respuesta 4";

  // variables de intervalo
  _intervaloID: any;


  // ****** Funciones ***** //
  iniciarRonda()
  {
    this._numPregunta_i = this.generarRandom(0, this._preguntas.length);
    console.log("Num pregunta: " + this._numPregunta_i);

    this._pregunta_s = this._preguntas[this._numPregunta_i].pregunta;
    this._respuesta1_s = this._preguntas[this._numPregunta_i].respuestas[0].respuesta;
    this._respuesta2_s = this._preguntas[this._numPregunta_i].respuestas[1].respuesta;
    this._respuesta2_s = this._preguntas[this._numPregunta_i].respuestas[2].respuesta;
    this._respuesta2_s = this._preguntas[this._numPregunta_i].respuestas[3].respuesta;

    this.iniciarRelog();
  }

  generarRandom(_min_i:number, _max_i:number): number
  {
    return Math.floor
    (
      Math.random() * (_max_i - _min_i)
    ) + _min_i;
  }

  responderPregunta(_respuesta_i: number)
  {
    clearInterval(this._intervaloID);

    if (_respuesta_i == -1)
    {
      this._vida_i -= 10;
    }
    else if (!this._preguntas[this._numPregunta_i].respuestas[_respuesta_i].correcta)
    {
      this._vida_i -= 20;
    }
    else
    {
      console.log("Respuesta correcta");
      this._vida_i += 10
    }

    if (this._vida_i <= 0)
    {
      // TODO: Perder partida.
      this._vida_i = 0;
      console.log("partida perdida");
    }

    if (this._vida_i > 100)
      this._vida_i = 100;


    this.iniciarRonda();
  }

  iniciarRelog()
  {
    this._tiempo_i = 30;
    this._intervaloID = setInterval(() =>
    {
      if (this._tiempo_i > 0)
        this._tiempo_i--;
      else
        this.responderPregunta(-1);

    }, 1000);
  }

  //
  _preguntas: any[] =
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
    },
    {
      pregunta: "Pregunta 3",
      respuestas:
      [
        {respuesta: "Respuesta 1", correcta: true},
        {respuesta: "Respuesta 2", correcta: false},
        {respuesta: "Respuesta 3", correcta: false},
        {respuesta: "Respuesta 4", correcta: false}
      ]
    },
    {
      pregunta: "Pregunta 4",
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
