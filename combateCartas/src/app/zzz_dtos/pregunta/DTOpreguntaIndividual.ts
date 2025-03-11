import { DTOrespuestaIndividual } from './DTOrespuestaIndividual';

export class DTOpreguntaIndividual
{
  private _idPregunta_i: number;
  private _nombreJugador_s: string;
  private _pregunta_s: string;
  private _respuestas_dto: DTOrespuestaIndividual[];

  constructor(idPregunta: number, nombreJugador: string, pregunta: string, respuestas: DTOrespuestaIndividual[])
  {
    this._idPregunta_i = idPregunta;
    this._nombreJugador_s = nombreJugador;
    this._pregunta_s = pregunta;
    this._respuestas_dto = respuestas;
  }

  public get _idPregunta(): number
  {
    return this._idPregunta_i;
  }

  public set _idPregunta(value: number)
  {
    this._idPregunta_i = value;
  }

  public get _nombreJugador(): string
  {
    return this._nombreJugador_s;
  }

  public set _nombreJugador(value: string)
  {
    this._nombreJugador_s = value;
  }

  public get _pregunta(): string
  {
    return this._pregunta_s;
  }

  public set _pregunta(value: string)
  {
    this._pregunta_s = value;
  }

  public get _respuestas(): DTOrespuestaIndividual[]
  {
    return this._respuestas_dto;
  }

  public set _respuestas(value: DTOrespuestaIndividual[])
  {
    this._respuestas_dto = value;
  }

  public toString(): string
  {
    return `DTOpreguntaIndividual { idPregunta: ${this._idPregunta_i}, idJugador: ${this._nombreJugador_s}, pregunta: ${this._pregunta_s}, respuestas: ${this._respuestas_dto.map(r => r.toString()).join(', ')} }`;
  }
}
