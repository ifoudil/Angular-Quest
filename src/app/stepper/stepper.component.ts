import { Component, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CdkStepperModule, CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }] 
})
export class StepperComponent extends CdkStepper {
  @Input() linearModeSelected = true;
  @Input() stepper!: MatStepper;


  onClick(index: number) {
    this.selectedIndex = index;
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
