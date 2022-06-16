import { TestBed } from '@angular/core/testing';

import { RetoCrudService } from './reto-crud.service';

describe('RetoCrudService', () => {
  let service: RetoCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetoCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
