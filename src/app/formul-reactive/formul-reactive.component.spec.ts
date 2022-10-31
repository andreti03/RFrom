import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulReactiveComponent } from './formul-reactive.component';

describe('FormulReactiveComponent', () => {
  let component: FormulReactiveComponent;
  let fixture: ComponentFixture<FormulReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
