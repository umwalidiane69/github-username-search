import { TestBed } from '@angular/core/testing';

import { ProfeService } from './profe.service';

describe('ProfeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfeService = TestBed.get(ProfeService);
    expect(service).toBeTruthy();
  });
});
