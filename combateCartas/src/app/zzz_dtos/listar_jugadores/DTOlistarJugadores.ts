import { DTOjugadorMenu } from './DTOjugadorMenu';

export class DTOlistarJugadores
{
  private _jugadores_dto: DTOjugadorMenu[];

  constructor(jugadores: DTOjugadorMenu[] = [])
  {
    this._jugadores_dto = jugadores;
  }

  public get _jugadores(): DTOjugadorMenu[]
  {
    return this._jugadores_dto;
  }

  public set _jugadores(value: DTOjugadorMenu[])
  {
    this._jugadores_dto = value;
  }

  public toString(): string
  {
    return `DTOlistarJugadores { jugadores: ${this._jugadores_dto.map(j => j.toString()).join(', ')} }`;
  }
}
