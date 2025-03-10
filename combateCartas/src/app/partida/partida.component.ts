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
  _maxTiempo_i: number = 20;
  _tiempo_i: number = 20;
  _vida_i: number = 100;
  _estadoPartida: _MaquinaEstados = _MaquinaEstados.NOMBRE;
  _MaquinaEstados = _MaquinaEstados;
  _acertado_b: boolean = false;
  _bocadilloAparecer_b: boolean = false;

  // variables de preguntas
  _pregunta_s: string = "¿Esto es una pregunta?";
  _respuesta1_s: string = "Respuesta 1";
  _respuesta2_s: string = "Respuesta 2";
  _respuesta3_s: string = "Respuesta 3";
  _respuesta4_s: string = "Respuesta 4";


  // variables de intervalo
  _intervaloID: any;
  _intervaloBucle: any;
  _intervaloLetras: any;



  // ****** Funciones ***** //
  iniciarRonda()
  {
    if (this._vida_i <= 0)
    {
      this._vida_i = 0;
      this._estadoPartida = _MaquinaEstados.NUEVA;
      console.log("partida perdida");
      return;
    }


    this._estadoPartida = _MaquinaEstados.RESPONDIENDO;

    this._numPregunta_i = this.generarRandom(0, this._preguntas.length);
    console.log("Num pregunta: " + this._numPregunta_i);

    this._pregunta_s = this._preguntas[this._numPregunta_i].pregunta;
    this._respuesta1_s = this._preguntas[this._numPregunta_i].respuestas[0].respuesta;
    this._respuesta2_s = this._preguntas[this._numPregunta_i].respuestas[1].respuesta;
    this._respuesta2_s = this._preguntas[this._numPregunta_i].respuestas[2].respuesta;
    this._respuesta2_s = this._preguntas[this._numPregunta_i].respuestas[3].respuesta;

    this._bocadillo_s = "";
    this.escribirBocadillo(`¿${this._pregunta_s}?`);
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
        this._bocadilloAparecer_b = false;
      }
      else if (this._estadoPartida == _MaquinaEstados.RESPONDIENDO)
      {
        this._bocadilloAparecer_b = true;
        //this._bocadillo_s = this._pregunta_s;
      }
      else if (this._estadoPartida == _MaquinaEstados.COMPROBANDO)
      {
        this._bocadilloAparecer_b = false;
      }
      else if (this._estadoPartida == _MaquinaEstados.NUEVA)
      {
        this._bocadilloAparecer_b = true;
      }

      if (this._vida_i <= 0)
      {
        this._vida_i = 0;
      }
  }

  responderPregunta(_respuesta_i: number)
  {
    clearInterval(this._intervaloID);
    this._estadoPartida = _MaquinaEstados.COMPROBANDO;

    if (_respuesta_i == -1)
    {
      this._vida_i -= 20;
      this._acertado_b = false;
    }
    else if (!this._preguntas[this._numPregunta_i].respuestas[_respuesta_i].correcta)
    {
      this._vida_i -= 30;
      this._acertado_b = false;
    }
    else
    {
      console.log("Respuesta correcta");
      this._vida_i += 25
      this._acertado_b = true;
    }

    if (this._vida_i > 100)
      this._vida_i = 100;
  }

  escribirBocadillo(_texto_s: string)
  {
    this._intervaloLetras = setInterval(() =>
    {
      if (this._bocadillo_s.length < _texto_s.length)
        this._bocadillo_s += _texto_s[this._bocadillo_s.length];
      else
      {
        clearInterval(this._intervaloLetras);
      }
    }, 60);
  }

  iniciarRelog()
  {
    this._tiempo_i = 20;
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
    }, 33); // 30 fps
  }

  //
  _preguntas: any[] =
  [
    {
      pregunta: "Pregunta 1 Pregunta 1 Pregunta 1 Pregunta 1",
      respuestas:
      [
        {respuesta: "Respuesta 1", correcta: false},
        {respuesta: "Respuesta 2", correcta: false},
        {respuesta: "Respuesta 3", correcta: true},
        {respuesta: "Respuesta 4", correcta: false}
      ]
    },
    {
      pregunta: "Pregunta 2 Pregunta 2 Pregunta 2 Pregunta 2",
      respuestas:
      [
        {respuesta: "Respuesta 1", correcta: true},
        {respuesta: "Respuesta 2", correcta: false},
        {respuesta: "Respuesta 3", correcta: false},
        {respuesta: "Respuesta 4", correcta: false}
      ]
    },
    {
      pregunta: "Pregunta 3 Pregunta 3 Pregunta 3 Pregunta 3",
      respuestas:
      [
        {respuesta: "Respuesta 1", correcta: false},
        {respuesta: "Respuesta 2", correcta: true},
        {respuesta: "Respuesta 3", correcta: false},
        {respuesta: "Respuesta 4", correcta: false}
      ]
    },
    {
      pregunta: "Pregunta 4 Pregunta 4 Pregunta 4 Pregunta 4",
      respuestas:
      [
        {respuesta: "Respuesta 1", correcta: false},
        {respuesta: "Respuesta 2", correcta: false},
        {respuesta: "Respuesta 3", correcta: false},
        {respuesta: "Respuesta 4", correcta: true}
      ]
    }
  ]
}
