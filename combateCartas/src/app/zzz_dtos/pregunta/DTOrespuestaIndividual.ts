export class DTOrespuestaIndividual
{
  private _respuesta_s: string;
  private _correcta_b: boolean;

  constructor(respuesta: string, correcta: boolean)
  {
    this._respuesta_s = respuesta;
    this._correcta_b = correcta;
  }

  public get _respuesta(): string
  {
    return this._respuesta_s;
  }

  public set _respuesta(value: string)
  {
    this._respuesta_s = value;
  }

  public get _correcta(): boolean
  {
    return this._correcta_b;
  }

  public set _correcta(value: boolean)
  {
    this._correcta_b = value;
  }

  public toString(): string
  {
    return `DTOrespuestaIndividual { respuesta: ${this._respuesta_s}, correcta: ${this._correcta_b} }`;
  }
}
