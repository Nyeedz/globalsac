import { TestBed } from '@angular/core/testing';

import { ConstrutorasService } from './construtoras.service';

describe('ConstrutorasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstrutorasService = TestBed.get(ConstrutorasService);
    expect(service).toBeTruthy();
  });
});
