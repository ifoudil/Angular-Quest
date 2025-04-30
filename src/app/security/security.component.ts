import { Component, Input } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { ButtonNextComponent } from '../button-next/button-next.component';
import { MatStepper } from '@angular/material/stepper';
import { ButtonBackComponent } from '../button-back/button-back.component';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [CdkStepperModule, ButtonNextComponent, ButtonBackComponent],
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  @Input() stepper!: MatStepper;
  @Input() stepperCdk!: CdkStepper;
}
