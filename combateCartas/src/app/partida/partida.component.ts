import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonRow
} from "@ionic/angular/standalone";
import {PreguntaComponent} from "../pregunta/pregunta.component";
import {ComprobacionComponent} from "../comprobacion/comprobacion.component";
import {NombreComponent} from "../nombre/nombre.component";
import {NuevaPreguntaComponent} from "../nueva-pregunta/nueva-pregunta.component";

// Estados Posibles.
enum _MaquinaEstados
{
  NOMBRE = 0,
  RESPONDIENDO = 1,
  COMPROBANDO = 2,
  NUEVA = 3
}

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    NgIf,
    PreguntaComponent,
    ComprobacionComponent,
    NombreComponent,
    NuevaPreguntaComponent
  ],
  standalone: true
})
export class PartidaComponent  implements OnInit
{
  constructor() { }
  ngOnInit()
  {
    this.iniciarBucle();
    this.Update();
    console.log("Iniciando Partida");
  }

  // ****** Declaraciones ***** //
  _Jugador_i: number = 0;
  _bocadillo_s: string = "";
  _numPregunta_i: number = 0;
  _tiempo_i: number = 15;
  _vida_i: number = 100;
  _estadoPartida: _MaquinaEstados = _MaquinaEstados.NOMBRE;
  _MaquinaEstados = _MaquinaEstados;

  // variables de preguntas
  _pregunta_s: string = "¿Esto es una pregunta?";
  _respuesta1_s: string = "Respuesta 1";
  _respuesta2_s: string = "Respuesta 2";
  _respuesta3_s: string = "Respuesta 3";
  _respuesta4_s: string = "Respuesta 4";

  // variables de intervalo
  _intervaloID: any;
  _intervaloBucle: any;


  // ****** Funciones ***** //
  iniciarRonda()
  {
    this._estadoPartida = _MaquinaEstados.RESPONDIENDO;

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

  Update()
  {
      if (this._estadoPartida == _MaquinaEstados.NOMBRE)
      {
        this._bocadillo_s = "Introduce tu nombre que los demás jugadores van a ver";
      }
      else if (this._estadoPartida == _MaquinaEstados.RESPONDIENDO)
      {

      }
      else if (this._estadoPartida == _MaquinaEstados.COMPROBANDO)
      {

      }
      else if (this._estadoPartida == _MaquinaEstados.NUEVA)
      {

      }
  }

  responderPregunta(_respuesta_i: number)
  {
    clearInterval(this._intervaloID);
    this._estadoPartida = _MaquinaEstados.COMPROBANDO;

    if (_respuesta_i == -1)
    {
      this._vida_i -= 20;
    }
    else if (!this._preguntas[this._numPregunta_i].respuestas[_respuesta_i].correcta)
    {
      this._vida_i -= 30;
    }
    else
    {
      console.log("Respuesta correcta");
      this._vida_i += 15
    }

    if (this._vida_i <= 0)
    {
      // TODO: Perder partida.
      this._vida_i = 0;
      console.log("partida perdida");
    }

    if (this._vida_i > 100)
      this._vida_i = 100;
  }

  guardarJugador(_id:number)
  {
    this._Jugador_i = _id;
  }

  iniciarRelog()
  {
    this._tiempo_i = 15;
    this._intervaloID = setInterval(() =>
    {
      if (this._tiempo_i > 0)
        this._tiempo_i--;
      else
        this.responderPregunta(-1);

    }, 1000);
  }

  iniciarBucle()
  {
    this._intervaloBucle = setInterval(() =>
    {
      this.Update();
    }, 500); // medio segundo.
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
