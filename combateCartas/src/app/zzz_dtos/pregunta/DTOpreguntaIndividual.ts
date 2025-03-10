import { DTOrespuestaIndividual } from './DTOrespuestaIndividual';

export class DTOpreguntaIndividual
{
  private _idPregunta: number;
  private _idJugador: number;
  private _pregunta: string;
  private _respuestas: DTOrespuestaIndividual[];

  constructor(idPregunta: number, idJugador: number, pregunta: string, respuestas: DTOrespuestaIndividual[])
  {
    this._idPregunta = idPregunta;
    this._idJugador = idJugador;
    this._pregunta = pregunta;
    this._respuestas = respuestas;
  }

  public get idPregunta(): number
  {
    return this._idPregunta;
  }

  public set idPregunta(value: number)
  {
    this._idPregunta = value;
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

  public get respuestas(): DTOrespuestaIndividual[]
  {
    return this._respuestas;
  }

  public set respuestas(value: DTOrespuestaIndividual[])
  {
    this._respuestas = value;
  }

  public toString(): string
  {
    return `DTOpreguntaIndividual { idPregunta: ${this._idPregunta}, idJugador: ${this._idJugador}, pregunta: ${this._pregunta}, respuestas: ${this._respuestas.map(r => r.toString()).join(', ')} }`;
  }
}
