export class DTOjugadorMenu
{
  private _nombre: string;
  private _respuestasCorrectas: number;

  constructor(nombre: string, respuestasCorrectas: number)
  {
    this._nombre = nombre;
    this._respuestasCorrectas = respuestasCorrectas;
  }

  public get nombre(): string
  {
    return this._nombre;
  }

  public set nombre(value: string)
  {
    this._nombre = value;
  }

  public get respuestasCorrectas(): number
  {
    return this._respuestasCorrectas;
  }

  public set respuestasCorrectas(value: number)
  {
    this._respuestasCorrectas = value;
  }

  public toString(): string
  {
    return `DTOjugadorMenu { nombre: ${this._nombre}, respuestasCorrectas: ${this._respuestasCorrectas} }`;
  }
}
