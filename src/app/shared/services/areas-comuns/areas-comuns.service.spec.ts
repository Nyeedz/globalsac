import { TestBed } from '@angular/core/testing';

import { AreasComunsService } from './areas-comuns.service';

describe('AreasComunsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreasComunsService = TestBed.get(AreasComunsService);
    expect(service).toBeTruthy();
  });
});
