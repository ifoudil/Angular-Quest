import { Component, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-guard',
  imports: [],
  templateUrl: './guard.component.html',
  styleUrl: './guard.component.css'
})
export class GuardComponent implements AfterViewInit{
  @ViewChild('inputA') inputA!: ElementRef<HTMLInputElement>;
  @ViewChild('inputB') inputB!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    // if there's some value in localStorage, recovered them
    let storedA = localStorage.getItem('a');
    let storedB = localStorage.getItem('b');
    let storedResult = localStorage.getItem('result');

    if (storedA) this.inputA.nativeElement.value = storedA;
    if (storedB) this.inputB.nativeElement.value = storedB;

    let resultInput = document.getElementById('result') as HTMLInputElement;
    if (resultInput && storedResult) {
      resultInput.value = storedResult;
    }
  }

  onMultiply(event: Event): void {
    event.preventDefault(); // Prevents to reload page

    let a = parseFloat(this.inputA.nativeElement.value);
    let b = parseFloat(this.inputB.nativeElement.value);
    let result = a * b;

    // Display result in #result input
    let resultInput = document.getElementById('result') as HTMLInputElement;
    resultInput.value = isNaN(result) ? ' ' : result.toString();

    // local storage of values
    localStorage.setItem('a', this.inputA.nativeElement.value);
    localStorage.setItem('b', this.inputB.nativeElement.value);
    localStorage.setItem('result', result.toString());
  }
}