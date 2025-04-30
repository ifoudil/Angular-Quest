import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialStepperComponent } from './material-stepper.component';

describe('MaterialStepperComponent', () => {
  let component: MaterialStepperComponent;
  let fixture: ComponentFixture<MaterialStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
