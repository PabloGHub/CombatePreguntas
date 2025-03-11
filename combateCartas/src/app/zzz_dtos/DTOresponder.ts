export class DTOresponder
{
  private _idJugador_i: number;
  private _idPregunta_i: number;
  private _respuesta_b: boolean; // false = respuesta incorrecta, true = respuesta correcta.

  constructor(_idJugador: number, _idPregunta: number, _respuesta: boolean)
  {
    this._idJugador_i = _idJugador;
    this._idPregunta_i = _idPregunta;
    this._respuesta_b = _respuesta;
  }

  public get _idJugador(): number
  {
    return this._idJugador_i;
  }

  public set _idJugador(value: number)
  {
    this._idJugador_i = value;
  }

  public get _idPregunta(): number
  {
    return this._idPregunta_i;
  }

  public set _idPregunta(value: number)
  {
    this._idPregunta_i = value;
  }

  public get _respuesta(): boolean
  {
    return this._respuesta_b;
  }

  public set _respuesta(value: boolean)
  {
    this._respuesta_b = value;
  }

  public toJSON(): object{
    return {
      _idJugador: this._idJugador_i,
      _idPregunta: this._idPregunta_i,
      _respuesta: this._respuesta_b
    };
  }

  public toString(): string
  {
    return `DTOresponder { idJugador: ${this._idJugador_i}, idPregunta: ${this._idPregunta_i}, respuesta: ${this._respuesta_b} }`;
  }
}
