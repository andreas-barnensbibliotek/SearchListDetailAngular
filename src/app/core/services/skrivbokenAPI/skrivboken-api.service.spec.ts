import { TestBed } from '@angular/core/testing';

import { SkrivbokenAPIService } from './skrivboken-api.service';

describe('SkrivbokenAPIService', () => {
  let service: SkrivbokenAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkrivbokenAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
