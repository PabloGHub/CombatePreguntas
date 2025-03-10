export class DTOrespuestaIndividual
{
  private _respuesta: string;
  private _correcta: boolean;

  constructor(respuesta: string, correcta: boolean)
  {
    this._respuesta = respuesta;
    this._correcta = correcta;
  }

  public get respuesta(): string
  {
    return this._respuesta;
  }

  public set respuesta(value: string)
  {
    this._respuesta = value;
  }

  public get correcta(): boolean
  {
    return this._correcta;
  }

  public set correcta(value: boolean)
  {
    this._correcta = value;
  }

  public toString(): string
  {
    return `DTOrespuestaIndividual { respuesta: ${this._respuesta}, correcta: ${this._correcta} }`;
  }
}
