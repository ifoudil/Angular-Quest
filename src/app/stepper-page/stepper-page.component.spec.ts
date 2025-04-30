import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperPageComponent } from './stepper-page.component';

describe('StepperPageComponent', () => {
  let component: StepperPageComponent;
  let fixture: ComponentFixture<StepperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
