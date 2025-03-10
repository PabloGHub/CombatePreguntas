import {Component, Input} from '@angular/core';
import {IonButton, IonCol, IonInput, IonProgressBar, IonRow} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-nueva-pregunta',
    templateUrl: './nueva-pregunta.component.html',
    styleUrls: ['./nueva-pregunta.component.scss'],
  imports: [
    IonButton,
    IonCol,
    IonRow,
    IonInput,
    FormsModule
  ]
})
export class NuevaPreguntaComponent
{
  constructor() { }


  // Variables
  public _pregunta_s: string = "";
  public _respuesta_s: string = "";
  public _fallo1_s: string = "";
  public _fallo2_s: string = "";
  public _fallo3_s: string = "";

  @Input() public _jugador_i: number = 0;

  // Metodos
  public guardar()
  {
    //TODO: llamar a BD.
  }
}
