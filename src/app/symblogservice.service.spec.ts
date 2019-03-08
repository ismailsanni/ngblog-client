import { TestBed } from '@angular/core/testing';

import { SymblogserviceService } from './symblogservice.service';

describe('SymblogserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SymblogserviceService = TestBed.get(SymblogserviceService);
    expect(service).toBeTruthy();
  });
});
