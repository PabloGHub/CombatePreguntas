import { TestBed } from '@angular/core/testing';

import { SerResponderService } from './ser-responder.service';

describe('SerResponderService', () => {
  let service: SerResponderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerResponderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
