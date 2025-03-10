export class DTOcrearPregunta
{
  private _idJugador: number;
  private _pregunta: string;
  private _respuesta: string;
  private _fallo1: string;
  private _fallo2: string;
  private _fallo3: string;

  constructor(idJugador: number, pregunta: string, respuesta: string, fallo1: string, fallo2: string, fallo3: string)
  {
    this._idJugador = idJugador;
    this._pregunta = pregunta;
    this._respuesta = respuesta;
    this._fallo1 = fallo1;
    this._fallo2 = fallo2;
    this._fallo3 = fallo3;
  }

  public get idJugador(): number
  {
    return this._idJugador;
  }

  public set idJugador(value: number)
  {
    this._idJugador = value;
  }

  public get pregunta(): string
  {
    return this._pregunta;
  }

  public set pregunta(value: string)
  {
    this._pregunta = value;
  }

  public get respuesta(): string
  {
    return this._respuesta;
  }

  public set respuesta(value: string)
  {
    this._respuesta = value;
  }

  public get fallo1(): string
  {
    return this._fallo1;
  }

  public set fallo1(value: string)
  {
    this._fallo1 = value;
  }

  public get fallo2(): string
  {
    return this._fallo2;
  }

  public set fallo2(value: string)
  {
    this._fallo2 = value;
  }

  public get fallo3(): string
  {
    return this._fallo3;
  }

  public set fallo3(value: string)
  {
    this._fallo3 = value;
  }

  public toString(): string
  {
    return `DTOcrearPregunta { idJugador: ${this._idJugador}, pregunta: ${this._pregunta}, respuesta: ${this._respuesta}, fallo1: ${this._fallo1}, fallo2: ${this._fallo2}, fallo3: ${this._fallo3} }`;
  }
}
