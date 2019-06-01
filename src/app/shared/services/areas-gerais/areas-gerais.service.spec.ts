import { TestBed } from '@angular/core/testing';

import { AreasGeraisService } from './areas-gerais.service';

describe('AreasGeraisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreasGeraisService = TestBed.get(AreasGeraisService);
    expect(service).toBeTruthy();
  });
});
