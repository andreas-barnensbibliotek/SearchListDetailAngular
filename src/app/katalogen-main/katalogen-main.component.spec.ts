import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatalogenMainComponent } from './katalogen-main.component';

describe('KatalogenMainComponent', () => {
  let component: KatalogenMainComponent;
  let fixture: ComponentFixture<KatalogenMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatalogenMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatalogenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
