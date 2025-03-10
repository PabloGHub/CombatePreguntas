export class DTOjugadorMenu
{
  private _nombre_s: string;
  private _respuestasCorrectas_i: number;

  constructor(nombre: string, respuestasCorrectas: number)
  {
    this._nombre_s = nombre;
    this._respuestasCorrectas_i = respuestasCorrectas;
  }

  public get _nombre(): string
  {
    return this._nombre_s;
  }

  public set _nombre(value: string)
  {
    this._nombre_s = value;
  }

  public get _respuestasCorrectas(): number
  {
    return this._respuestasCorrectas_i;
  }

  public set _respuestasCorrectas(value: number)
  {
    this._respuestasCorrectas_i = value;
  }

  public toString(): string
  {
    return `DTOjugadorMenu { nombre: ${this._nombre_s}, respuestasCorrectas: ${this._respuestasCorrectas_i} }`;
  }
}
