import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DTOlistarJugadores} from "../zzz_dtos/listar_jugadores/DTOlistarJugadores";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SerJugadorService
{
  constructor(private _http: HttpClient) { }

  crearJugador(_nombre_s: string): Observable<number>
  {
    return this._http.post<number>(`${environment.apiUrl}/juga/crear?_nombre=${_nombre_s}`, null)
      .pipe
      (
        catchError(error =>
        {
          console.error('Web:(Servicios:crearJugador):', error);
          return throwError(() => new Error('Error en crearJugador'));
        })
      );
  }

  listarJugadores(): Observable<DTOlistarJugadores>
  {
    return this._http.get<DTOlistarJugadores>(`${environment.apiUrl}/juga/listar`)
      .pipe
      (
        catchError(error =>
        {
          console.error('Web:(Servicios:listarJugadores):', error);
          return throwError(() => new Error('Error en listarJugadores'));
        })
      );
  }
}
