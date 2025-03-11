export class DTOcrearPregunta
{
  private _idJugador_i: number;
  private _pregunta_s: string;
  private _respuesta_s: string;
  private _fallo1_s: string;
  private _fallo2_s: string;
  private _fallo3_s: string;

  constructor(idJugador: number, pregunta: string, respuesta: string, fallo1: string, fallo2: string, fallo3: string)
  {
    this._idJugador_i = idJugador;
    this._pregunta_s = pregunta;
    this._respuesta_s = respuesta;
    this._fallo1_s = fallo1;
    this._fallo2_s = fallo2;
    this._fallo3_s = fallo3;
  }


  public get _idJugador(): number
  {
    return this._idJugador_i;
  }

  public set _idJugador(value: number)
  {
    this._idJugador_i = value;
  }

  public get _pregunta(): string
  {
    return this._pregunta_s;
  }

  public set _pregunta(value: string)
  {
    this._pregunta_s = value;
  }

  public get _respuesta(): string
  {
    return this._respuesta_s;
  }

  public set _respuesta(value: string)
  {
    this._respuesta_s = value;
  }

  public get _fallo1(): string
  {
    return this._fallo1_s;
  }

  public set _fallo1(value: string)
  {
    this._fallo1_s = value;
  }

  public get _fallo2(): string
  {
    return this._fallo2_s;
  }

  public set _fallo2(value: string)
  {
    this._fallo2_s = value;
  }

  public get _fallo3(): string
  {
    return this._fallo3_s;
  }

  public set _fallo3(value: string)
  {
    this._fallo3_s = value;
  }

  public toJSON(): object{
    return {
      _idJugador: this._idJugador_i,
      _pregunta: this._pregunta_s,
      _respuesta: this._respuesta_s,
      _fallo1: this._fallo1_s,
      _fallo2: this._fallo2_s,
      _fallo3: this._fallo3_s
    };
  }

  public toString(): string
  {
    return `DTOcrearPregunta { idJugador: ${this._idJugador_i}, pregunta: ${this._pregunta_s}, respuesta: ${this._respuesta_s}, fallo1: ${this._fallo1_s}, fallo2: ${this._fallo2_s}, fallo3: ${this._fallo3_s} }`;
  }
}
