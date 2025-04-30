import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper'; // CdkStepper importé
import { FinishComponent } from '../finish/finish.component';
import { InformationComponent } from '../information/information.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { SecurityComponent } from '../security/security.component';
import { StepperComponent } from '../stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-stepper-page',
  imports: [StepperComponent, FinishComponent, InformationComponent, ContactInfoComponent, SecurityComponent, CdkStepperModule],
  templateUrl: './stepper-page.component.html',
  styleUrls: ['./stepper-page.component.css']
})
export class StepperPageComponent implements AfterViewInit {
  @ViewChild(CdkStepper) stepperCdk!: CdkStepper;

  steps = [
    { label: 'Information', content: 'Information Content' },
    { label: 'Contact', content: 'Contact Content' },
    { label: 'Security', content: 'Security Content' },
    { label: 'Finish', content: 'Finish Content' }
  ];

  selectedIndex = 0;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    // Evite l'erreur : NG0100
    this.cdRef.detectChanges();
  }

  onClick(index: number) {
    this.selectedIndex = index;

    // On vérifie que le stepper Cdk est bien défini
    if (this.stepperCdk) {
      this.stepperCdk.selectedIndex = index;
    }
  }
}