import { TestBed } from '@angular/core/testing';

import { SerJugadorService } from './ser-jugador.service';

describe('SerJugadorService', () => {
  let service: SerJugadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerJugadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
