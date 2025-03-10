import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DTOpreguntaIndividual} from "../zzz_dtos/pregunta/DTOpreguntaIndividual";
import {catchError, Observable, throwError} from "rxjs";
import {DTOcrearPregunta} from "../zzz_dtos/DTOcrearPregunta";

@Injectable({
  providedIn: 'root'
})
export class SerPreguntasService
{
  constructor(private _http: HttpClient) { }

  preguntaAleatoria(_idJugador_i: number): Observable<DTOpreguntaIndividual>
  {
    return this._http.get<DTOpreguntaIndividual>(`http://sui.casacam.net:8080/pre/aleatoria?_idJugador=${_idJugador_i}`)
      .pipe
      (
        catchError(error =>
        {
          console.error('Web:(Servicios:preguntaAleatoria):', error);
          return throwError(() => new Error('Error al pedir pregunta aleatoria'));
        })
      );
  }

  crearPregunta(_pregunta: DTOcrearPregunta): void
  {
    this._http.post(`http://sui.casacam.net:8080/pre/crear`, null)
      .pipe
      (
        catchError(error =>
        {
          console.error('Web:(Servicios:crearPregunta):', error);
          return throwError(() => new Error('Error al crear pregunta'));
        })
      );
  }
}
