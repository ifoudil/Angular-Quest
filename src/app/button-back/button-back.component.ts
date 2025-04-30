import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-button-back',
  imports: [],
  templateUrl: './button-back.component.html',
  styleUrl: './button-back.component.css'
})
export class ButtonBackComponent {
  @Input() stepper!: MatStepper;
  @Input() stepperCdk!: CdkStepper;

  previousStep() {
    console.log('MatStepper:', this.stepper);
    console.log('CdkStepper:', this.stepperCdk);

    if (this.stepper) {
      this.stepper.previous();
    } else if (this.stepperCdk) {
      this.stepperCdk.previous();
    } else {
      console.error('No stepper defined');
    }
  }
}
