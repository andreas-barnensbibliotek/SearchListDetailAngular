import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaexempelComponent } from './mediaexempel.component';

describe('MediaexempelComponent', () => {
  let component: MediaexempelComponent;
  let fixture: ComponentFixture<MediaexempelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaexempelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaexempelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
