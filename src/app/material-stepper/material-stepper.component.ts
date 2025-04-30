import { Component, ViewChild } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { InformationComponent } from '../information/information.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { SecurityComponent } from '../security/security.component';
import { FinishComponent } from '../finish/finish.component';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-material-stepper',
  imports: [MatStepperModule, InformationComponent, ContactInfoComponent, SecurityComponent, FinishComponent],
  templateUrl: './material-stepper.component.html',
  styleUrl: './material-stepper.component.css'
})
export class MaterialStepperComponent {
  @ViewChild('stepper') stepper!: MatStepper; 
}
