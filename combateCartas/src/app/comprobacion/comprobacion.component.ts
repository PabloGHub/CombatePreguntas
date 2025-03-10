import {Component, Input, OnInit} from '@angular/core';
import {IonButton, IonCol, IonInput, IonProgressBar, IonRow} from "@ionic/angular/standalone";

@Component({
    selector: 'app-comprobacion',
    templateUrl: './comprobacion.component.html',
    styleUrls: ['./comprobacion.component.scss'],
  imports: [
    IonButton,
    IonCol,
    IonProgressBar,
    IonRow,
    IonInput
  ]
})
export class ComprobacionComponent implements OnInit
{
  constructor() { }
  ngOnInit()
  {
    if (this._acertado_b)
    {
      // TODO: css para aprobar
    }
    else
    {
      // TODO: css para suspender
    }
  }


  // ****** Declaraciones ***** //
  @Input() _vida_i: number = 100;
  @Input() _nombre_s: string = "";
  @Input() _cantidad_i: number = 0;
  @Input() _acertado_b: boolean = false;


  // ****** Metodos ***** //
  continuar()
  {

  }

}
