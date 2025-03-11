import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DTOpreguntaIndividual} from "../zzz_dtos/pregunta/DTOpreguntaIndividual";
import {catchError, Observable, throwError} from "rxjs";
import {DTOcrearPregunta} from "../zzz_dtos/DTOcrearPregunta";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SerPreguntasService
{
  constructor(private _http: HttpClient) { }

  preguntaAleatoria(_idJugador_i: number): Observable<DTOpreguntaIndividual>
  {
    return this._http.get<DTOpreguntaIndividual>(`${environment.apiUrl}/pre/aleatoria?_idJugador=${_idJugador_i}`)
      .pipe
      (
        catchError(error =>
        {
          console.error('Web:(Servicios:preguntaAleatoria):', error);
          return throwError(() => new Error('Error al pedir pregunta aleatoria'));
        })
      );
  }

  crearPregunta(_pregunta: DTOcrearPregunta)
  {
    return this._http.post<any>(`${environment.apiUrl}/pre/crear`, _pregunta)
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
