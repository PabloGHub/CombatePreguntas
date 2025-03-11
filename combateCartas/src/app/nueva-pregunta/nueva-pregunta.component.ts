import {Component, Input} from '@angular/core';
import {IonButton, IonCol, IonInput, IonProgressBar, IonRouterLink, IonRow} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {SerPreguntasService} from "../zzz_servicios/ser-preguntas.service";
import {DTOcrearPregunta} from "../zzz_dtos/DTOcrearPregunta";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-nueva-pregunta',
    templateUrl: './nueva-pregunta.component.html',
    styleUrls: ['./nueva-pregunta.component.scss'],
  imports: [
    IonButton,
    IonCol,
    IonRow,
    IonInput,
    FormsModule,
    IonRouterLink,
    NgIf
  ]
})
export class NuevaPreguntaComponent
{
  constructor
  (
    private _SerPreguntas: SerPreguntasService,
    private _ruter: Router
  ) { }


  // Variables
  public _pregunta_s: string = "";
  public _respuesta_s: string = "";
  public _fallo1_s: string = "";
  public _fallo2_s: string = "";
  public _fallo3_s: string = "";

  @Input() public _jugador_i: number = 0;

  _errores: string = "";

  // Metodos
  public guardar()
  {
    console.log("Guardando pregunta");

    let _pregunta: DTOcrearPregunta = new DTOcrearPregunta
    (
      this._jugador_i,
      this._pregunta_s,
      this._respuesta_s,
      this._fallo1_s,
      this._fallo2_s,
      this._fallo3_s
    );

    console.log("_jugador_i:", _pregunta._idJugador);
    console.log("_pregunta_s:", _pregunta._pregunta);
    console.log("_respuesta_s:", _pregunta._respuesta);
    console.log("_fallo1_s:", _pregunta._fallo1);
    console.log("_fallo2_s:", _pregunta._fallo2);
    console.log("_fallo3_s:", _pregunta._fallo3);

    this._SerPreguntas.crearPregunta(_pregunta).subscribe
    ({
      next: () =>
      {
        console.log("Pregunta creada")
        this._ruter.navigate(['/home']);
      },
      error: () =>
      {
        console.error("Error al crear pregunta")
        this._errores = `Error, No puedes dejar ningún campo vacío, ni contener "<" o ">"`;
      }
    });
  }

}
