import {Component, EventEmitter, Output} from '@angular/core';
import {IonButton, IonCol, IonInput, IonItem, IonLabel, IonRow} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.scss'],
  imports: [
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    FormsModule
  ]
})
export class NombreComponent
{
  constructor() { }

  @Output() _empezar = new EventEmitter<void>();
  @Output() _id_i = new EventEmitter<number>();
  _nombre: string = "";

  empezar()
  {
    // TODO: guardar nombre y devolver id.

    this._empezar.emit();
    this._id_i.emit(1);
  }
}
