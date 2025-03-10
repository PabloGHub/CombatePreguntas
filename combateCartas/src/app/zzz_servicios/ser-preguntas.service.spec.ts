import { TestBed } from '@angular/core/testing';

import { SerPreguntasService } from './ser-preguntas.service';

describe('SerPreguntasService', () => {
  let service: SerPreguntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerPreguntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
