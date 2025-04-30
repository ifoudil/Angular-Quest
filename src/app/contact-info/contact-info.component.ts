import { Component, Input } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { ButtonNextComponent } from '../button-next/button-next.component';
import { MatStepper } from '@angular/material/stepper';
import { ButtonBackComponent } from '../button-back/button-back.component';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CdkStepperModule, ButtonNextComponent, ButtonBackComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {
  @Input() stepper!: MatStepper;
  @Input() stepperCdk!: CdkStepper;
}
