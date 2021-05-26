import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaktaComponent } from './fakta.component';

describe('FaktaComponent', () => {
  let component: FaktaComponent;
  let fixture: ComponentFixture<FaktaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaktaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaktaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
