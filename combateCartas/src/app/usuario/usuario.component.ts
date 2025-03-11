import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent  implements OnInit
{
  constructor() { }
  ngOnInit()
  {
    if (this._cantidad_i <= 0)
      this._comentario_s = "Ni una... ¡¡NI UNA!!";

    else if (this._cantidad_i == 1)
      this._comentario_s = "Esto no es lo tuyo";

    else if (this._cantidad_i == 2)
      this._comentario_s = "maguichupendido";

    else if (this._cantidad_i == 3)
      this._comentario_s = "¡Felicidades! as roto las leyes de la física";

    else if (this._cantidad_i == 4)
      this._comentario_s = "¡Ole! ¡Olee! ¡los caracoles!";

    else if (this._cantidad_i == 5)
      this._comentario_s = "Ete sevillano e un fiera"; // me lo ah recomendado copilot, jajaja

    else if (this._cantidad_i == 6)
      this._comentario_s = "Ete a etudiao";

    else if (this._cantidad_i == 7)
      this._comentario_s = "¡Eres un crack!";

    else if (this._cantidad_i == 8)
      this._comentario_s = "¡A donde va!";

    else if (this._cantidad_i == 9)
      this._comentario_s = "¿Eres un bot?";

    else if (this._cantidad_i == 10)
      this._comentario_s = "¡Ese copilot que yo no lo vea!";

    else if (this._cantidad_i == 11)
      this._comentario_s = "Admin, admin, admin";

    else if (this._cantidad_i == 12)
      this._comentario_s = "¡¿¡NANI!?!";

    else
      this._comentario_s = "¡Hermano que me he quedado sin imaginación ya para comentarios!";
  }

  @Input() _nombre_s: string = "";
  @Input() _cantidad_i: number = 0;
  _comentario_s: string = ""; // cantidad de aciertos
}
