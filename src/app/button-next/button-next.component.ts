import { Component, Input } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatStepper } from '@angular/material/stepper';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-button-next',
  standalone: true,
  imports: [MatStepperModule],
  templateUrl: './button-next.component.html',
  styleUrl: './button-next.component.css'
})
export class ButtonNextComponent {
  @Input() stepper!: MatStepper;
  @Input() stepperCdk!: CdkStepper;


  nextStep() {
    console.log('Stepper:', this.stepper); 
    console.log('SteCdkStepperpper:', this.stepperCdk); 
    if (this.stepper) {
      this.stepper.next();
    } else if (this.stepperCdk) {
      this.stepperCdk.next();
    } else {
      console.error('No stepper defined');
    }
  }
}
