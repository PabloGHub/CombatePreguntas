import {Component, EventEmitter, Output} from '@angular/core';
import {IonButton, IonCol, IonInput, IonItem, IonLabel, IonRow} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {SerJugadorService} from "../zzz_servicios/ser-jugador.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.scss'],
  imports: [
    IonRow,
    IonCol,
    IonInput,
    IonButton,
    FormsModule,
    NgIf
  ]
})
export class NombreComponent
{
  constructor(private _serJugador: SerJugadorService) { }

  @Output() _empezar = new EventEmitter<void>();
  @Output() _id_i = new EventEmitter<number>();
  @Output() _nombre_s = new EventEmitter<string>();
  _nombre: string = "";

  _errores: string = "";

  empezar()
  {
    if (this._nombre == "" || this._nombre == null || this._nombre.trim().length === 0)
    {
      this._errores = `Error, No puedes dejarlo vacío, ni contener "<" o ">"`;
      return;
    }

    let _id: number = 1;
    this._serJugador.crearJugador(this._nombre).subscribe
    ({
      next: (_datos: number)=>
      {
        console.log("Usuario: " + _datos);
        _id = _datos;
      },
      error: (_error)=>
      {
        console.error('Web:(Nombre:empezar):', _error);
        this._errores = `Error, No puedes dejarlo vacío, ni contener "<" o ">"`;
      },
      complete: ()=>
      {
        this._id_i.emit(_id);
        this._nombre_s.emit(this._nombre);
        this._empezar.emit();
      }
    });
  }
}
