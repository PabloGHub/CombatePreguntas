export class DTOresponder
{
  private _idJugador: number;
  private _idPregunta: number;
  private _respuesta: boolean; // false = respuesta incorrecta, true = respuesta correcta.

  constructor(idJugador: number, idPregunta: number, respuesta: boolean)
  {
    this._idJugador = idJugador;
    this._idPregunta = idPregunta;
    this._respuesta = respuesta;
  }

  public get idJugador(): number
  {
    return this._idJugador;
  }

  public set idJugador(value: number)
  {
    this._idJugador = value;
  }

  public get idPregunta(): number
  {
    return this._idPregunta;
  }

  public set idPregunta(value: number)
  {
    this._idPregunta = value;
  }

  public get respuesta(): boolean
  {
    return this._respuesta;
  }

  public set respuesta(value: boolean)
  {
    this._respuesta = value;
  }

  public toString(): string
  {
    return `DTOresponder { idJugador: ${this._idJugador}, idPregunta: ${this._idPregunta}, respuesta: ${this._respuesta} }`;
  }
}
