import { TestBed } from '@angular/core/testing';

import { UnidadesAutonomasService } from './unidades-autonomas.service';

describe('UnidadesAutonomasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnidadesAutonomasService = TestBed.get(UnidadesAutonomasService);
    expect(service).toBeTruthy();
  });
});
