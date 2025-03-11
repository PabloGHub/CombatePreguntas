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
import {SerPreguntasService} from "../zzz_servicios/ser-preguntas.service";
import {SerResponderService} from "../zzz_servicios/ser-responder.service";
import {SerJugadorService} from "../zzz_servicios/ser-jugador.service";
import {DTOpreguntaIndividual} from "../zzz_dtos/pregunta/DTOpreguntaIndividual";
import {DTOresponder} from "../zzz_dtos/DTOresponder";

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
  constructor
  (
    private _serPreguntas: SerPreguntasService,
    private _serResponder: SerResponderService
  ) { }
  ngOnInit()
  {
    this.iniciarBucle();
    this.Update();
    console.log("Iniciando Partida");
  }

  // ****** Declaraciones ***** //
  _bocadillo_s: string = "";
  _preguntaTemporal: DTOpreguntaIndividual = new DTOpreguntaIndividual(0, "", "", []);
  _acertado_b: boolean = false;
  _bocadilloAparecer_b: boolean = false;


  // -- variables de jugador -- //
  _Jugador_i: number = 1;
  _nombre_s: string = "Jugador";
  _aciertos_i: number = 0;


  // -- variables de barras -- //
  _maxTiempo_i: number = 20;
  _tiempo_i: number = 20;
  _vida_i: number = 100;


  // -- variables de Maquina de estados -- //
  _estadoPartida: _MaquinaEstados = _MaquinaEstados.NOMBRE;
  _MaquinaEstados = _MaquinaEstados;


  // -- variables de preguntas -- //
  _pregunta_s: string = "¿Esto es una pregunta?";
  _respuesta1_s: string = "Respuesta 1";
  _respuesta2_s: string = "Respuesta 2";
  _respuesta3_s: string = "Respuesta 3";
  _respuesta4_s: string = "Respuesta 4";


  // -- variables de intervalo -- //
  _intervaloRelog: any;
  _intervaloBucle: any;
  _intervaloLetras: any;


  // -- variables dar acceso -- //
  _pedirDisponible_b: boolean = true;
  _preguntaPreparada_b: boolean = false;
  _rondaIniciandose_b: boolean = false;
  _enviandoRespuesta_b: boolean = false;


  // ****** Funciones ***** //
  iniciarRonda()
  {
    if ((this._estadoPartida == _MaquinaEstados.NOMBRE ||
         this._estadoPartida == _MaquinaEstados.COMPROBANDO) &&
        !this._rondaIniciandose_b)
    {
      this._rondaIniciandose_b = true;

      if (this._vida_i <= 0)
      {
        this._vida_i = 0;
        this._estadoPartida = _MaquinaEstados.NUEVA;
        this.escribirBocadillo("Lo siento, Se quedo sin vida. Ponga 1 pregunta, 1 respuesta correcta y 3 incorrectas.");
        console.log("partida perdida");
        return;
      }

      this.pedirPregunta();
      this.terminandoIniciarRonda();
    }
  }

  async terminandoIniciarRonda()
  {
    while (!this._preguntaPreparada_b)
      await new Promise(r => setTimeout(r, 100));

    console.log("Pregunta esta preparada");

    this._estadoPartida = _MaquinaEstados.RESPONDIENDO;
    let _b: string = `De parte de: ${this._preguntaTemporal._nombreJugador}, ¿${this._pregunta_s}?`;
    this.escribirBocadillo(_b);
    this.iniciarRelog();
    this._rondaIniciandose_b = false;
  }



  responderPregunta(_respuesta_i: number)
  {
    if (this._estadoPartida == _MaquinaEstados.RESPONDIENDO)
    {
      this._estadoPartida = _MaquinaEstados.COMPROBANDO;

      if (_respuesta_i == -1)
      {
        this._vida_i -= 20;
        this._acertado_b = false;
      }
      else if (!this._preguntaTemporal._respuestas[_respuesta_i]._correcta)
      {
        this._vida_i -= 30;
        this._acertado_b = false;
      }
      else
      {
        console.log("Respuesta correcta");
        this._aciertos_i += 1;
        this._vida_i += 25
        this._acertado_b = true;
      }

      this._enviandoRespuesta_b = true;
      let _resTemp = new DTOresponder(this._Jugador_i, this._preguntaTemporal._idPregunta, this._acertado_b);
      this._serResponder.responder(_resTemp).subscribe
      ({
        error: (error) => console.error('Web:(Partida:responderPregunta):', error),
        complete: () =>
        {
          this._enviandoRespuesta_b = false;
        }
      });

      this.pedirPregunta();
      this._preguntaPreparada_b = false;
    }
  }


  async pedirPregunta()
  {
    if (this._pedirDisponible_b && !this._preguntaPreparada_b)
    {
      while (this._enviandoRespuesta_b)
        await new Promise(r => setTimeout(r, 100));

      this._pedirDisponible_b = false;
      console.log("Pidiendo pregunta");
      this._serPreguntas.preguntaAleatoria(this._Jugador_i).subscribe
      ({
        next: (_datos: DTOpreguntaIndividual) =>
        {
          this._preguntaTemporal = _datos;

          this._pregunta_s = _datos._pregunta;
          this._respuesta1_s = _datos._respuestas[0]._respuesta;
          this._respuesta2_s = _datos._respuestas[1]._respuesta;
          this._respuesta3_s = _datos._respuestas[2]._respuesta;
          this._respuesta4_s = _datos._respuestas[3]._respuesta;
        },
        error: (_error) =>
        {
          console.error('Web:(Partida:iniciarRonda):', _error);
        },
        complete: () =>
        {
          if
          (
            this._preguntaTemporal._idPregunta == null &&
            this._preguntaTemporal._nombreJugador == null &&
            this._preguntaTemporal._pregunta == null &&
            this._preguntaTemporal._respuestas == null
          )
          {
            this._vida_i = 0;
            this._estadoPartida = _MaquinaEstados.NUEVA;
            this.escribirBocadillo("¡¡¡ENHORABUENA!!!, Me as dejado sin preguntas que ofrecer.");
            console.log("lol");
            return;
          }

          this._pedirDisponible_b = true;
          this._preguntaPreparada_b = true;
        },
      });
    }
  }


  Update()
  {
      if (this._estadoPartida == _MaquinaEstados.NOMBRE)
      {
        this._bocadilloAparecer_b = false;
        clearInterval(this._intervaloRelog);
      }
      else if (this._estadoPartida == _MaquinaEstados.RESPONDIENDO)
      {
        this._bocadilloAparecer_b = true;
      }
      else if (this._estadoPartida == _MaquinaEstados.COMPROBANDO)
      {
        this._bocadilloAparecer_b = false;
        clearInterval(this._intervaloRelog);
      }
      else if (this._estadoPartida == _MaquinaEstados.NUEVA)
      {
        this._bocadilloAparecer_b = true;
        clearInterval(this._intervaloRelog);
      }

      if (this._vida_i <= 0)
        this._vida_i = 0;

      else if (this._vida_i > 100)
        this._vida_i = 100;
  }


  // ****** Reloges y Bocles ***** //
  escribirBocadillo(_texto_s: string)
  {
    this._bocadillo_s = ``;
    clearInterval(this._intervaloLetras);
    this._intervaloLetras = setInterval(() =>
    {
      if (this._bocadillo_s.length < _texto_s.length)
        this._bocadillo_s += _texto_s[this._bocadillo_s.length];
      else
      {
        clearInterval(this._intervaloLetras);
      }
    }, 25);
  }

  iniciarRelog()
  {
    this._tiempo_i = 20;
    clearInterval(this._intervaloRelog);
    this._intervaloRelog = setInterval(() =>
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
    }, 33); // 30 FPS
  }
}
