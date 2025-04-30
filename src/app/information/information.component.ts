import { Component, Input } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { ButtonNextComponent } from '../button-next/button-next.component';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CdkStepperModule, ButtonNextComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  @Input() stepper!: MatStepper;
  @Input() stepperCdk!: CdkStepper;

}
