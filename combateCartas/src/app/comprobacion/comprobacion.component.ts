import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IonButton, IonCol, IonInput, IonProgressBar, IonRow} from "@ionic/angular/standalone";

@Component({
    selector: 'app-comprobacion',
    templateUrl: './comprobacion.component.html',
    styleUrls: ['./comprobacion.component.scss'],
  imports: [
    IonButton,
    IonCol,
    IonProgressBar,
    IonRow
  ]
})
export class ComprobacionComponent implements OnInit
{
  constructor() { }
  ngOnInit()
  {
    if (this._tiempo_i <= 0 && !this._acertado_b)
    {
      this._css_s = "text-danger";
      this._mensaje_s = "¡Se acabó el tiempo!";
    }
    else if (this._acertado_b)
    {
      this._css_s = "text-success";
      this._mensaje_s = "¡Correcto!";
    }
    else
    {
      this._css_s = "text-danger";
      this._mensaje_s = "¡Incorrecto!";
    }
  }


  // ****** Declaraciones ***** //
  @Input() _vida_i: number = 100;
  @Input() _tiempo_i: number = 20;
  @Input() _nombre_s: string = "";
  @Input() _cantidad_i: number = 0;
  @Input() _acertado_b: boolean = false;

  _css_s: string = "";
  _mensaje_s: string = "";

  @Output() _continuar = new EventEmitter<void>();

  // ****** Metodos ***** //
  continuar()
  {
    this._continuar.emit();
  }



}
