import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DTOresponder} from "../zzz_dtos/DTOresponder";
import {catchError, throwError} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SerResponderService
{
  constructor(private _http: HttpClient) { }

  responder(_respuesta: DTOresponder)
  {
    this._http.post(`${environment.apiUrl}/responder`, _respuesta)
      .pipe
      (
        catchError(error =>
        {
          console.error('Web:(Servicios:responder):', error);
          return throwError(() => new Error('Error al responder'));
        })
      );
  }
}
