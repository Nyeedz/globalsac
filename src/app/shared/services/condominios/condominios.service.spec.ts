import { TestBed } from '@angular/core/testing';

import { CondominiosService } from './condominios.service';

describe('CondominiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CondominiosService = TestBed.get(CondominiosService);
    expect(service).toBeTruthy();
  });
});
