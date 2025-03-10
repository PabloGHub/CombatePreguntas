import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SerPreguntasService
{
  constructor(private _http: HttpClient) { }

  preguntaAleatoria(_idJugador_i: number)
  {

  }
}
