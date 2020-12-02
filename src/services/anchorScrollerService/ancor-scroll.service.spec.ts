import { TestBed } from '@angular/core/testing';

import { AncorScrollService } from './ancor-scroll.service';

describe('AncorScrollService', () => {
  let service: AncorScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AncorScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
