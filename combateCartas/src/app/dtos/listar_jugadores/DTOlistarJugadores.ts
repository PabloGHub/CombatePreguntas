import { DTOjugadorMenu } from './DTOjugadorMenu';

export class DTOlistarJugadores
{
  private _jugadores: DTOjugadorMenu[];

  constructor(jugadores: DTOjugadorMenu[] = [])
  {
    this._jugadores = jugadores;
  }

  public get jugadores(): DTOjugadorMenu[]
  {
    return this._jugadores;
  }

  public set jugadores(value: DTOjugadorMenu[])
  {
    this._jugadores = value;
  }

  public toString(): string
  {
    return `DTOlistarJugadores { jugadores: ${this._jugadores.map(j => j.toString()).join(', ')} }`;
  }
}
