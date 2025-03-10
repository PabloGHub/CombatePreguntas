import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DTOresponder} from "../zzz_dtos/DTOresponder";

@Injectable({
  providedIn: 'root'
})
export class SerResponderService
{
  constructor(private _http: HttpClient) { }

  responder(_respuesta: DTOresponder)
  {
    this._http.post(`http://sui.casacam.net:8080/responder`, _respuesta)
  }
}
