import {Component, OnInit} from '@angular/core';
import {
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonImg
} from '@ionic/angular/standalone';
import {DTOlistarJugadores} from "../zzz_dtos/listar_jugadores/DTOlistarJugadores";
import {SerJugadorService} from "../zzz_servicios/ser-jugador.service";
import {UsuarioComponent} from "../usuario/usuario.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonGrid, IonCol, IonRow, IonButton, IonImg, UsuarioComponent, NgForOf],
})
export class HomePage implements OnInit
{
  constructor(private _SerJugador: SerJugadorService) {}
  ngOnInit()
  {
    this._SerJugador.listarJugadores().subscribe
    (
      (data: DTOlistarJugadores) =>
      {
        this._jugadores = data;
        console.log(this._jugadores._jugadores[0]._nombre);
      },
      error =>
      {
        console.error('Web:(Home:ngOnInit):', error);
      }
    )
  }

  // --- Variables --- //
  _jugadores: DTOlistarJugadores | undefined;
}
