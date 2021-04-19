import { TestBed } from '@angular/core/testing';

import { KatalogenApiService } from './katalogen-api.service';

describe('KatalogenApiService', () => {
  let service: KatalogenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KatalogenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
