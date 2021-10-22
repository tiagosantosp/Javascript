import { TestBed } from '@angular/core/testing';

import { ListaMercadoService } from './lista-mercado.service';

describe('ListaMercadoService', () => {
  let service: ListaMercadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaMercadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
