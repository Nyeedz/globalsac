import { TestBed } from '@angular/core/testing';

import { PesquisaSatisfacaoService } from './pesquisa-satisfacao.service';

describe('PesquisaSatisfacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PesquisaSatisfacaoService = TestBed.get(PesquisaSatisfacaoService);
    expect(service).toBeTruthy();
  });
});
