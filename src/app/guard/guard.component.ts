import { Component, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-guard',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './guard.component.html',
  styleUrl: './guard.component.css',
})
export class GuardComponent implements AfterViewInit{
  @ViewChild('inputA') inputA!: ElementRef<HTMLInputElement>;
  @ViewChild('inputB') inputB!: ElementRef<HTMLInputElement>;
  // storedA!:number; pour ngModel
  // storedB!:number; pour NgModel
  // somme!:number; pour ngModel

  storedA:FormControl = new FormControl("", Validators.required);
  storedB:FormControl = new FormControl("", Validators.required);
  somme:FormControl = new FormControl(""); 

  ngAfterViewInit(): void {
    // if there's some value in localStorage, recovered them
    let storedA = localStorage.getItem('a');
    let storedB = localStorage.getItem('b');
    let storedResult = localStorage.getItem('result');

    if (storedA) this.storedA.setValue(+storedA);
    if (storedB) this.storedB.setValue(+storedB);

    this.somme.setValue(storedResult?+storedResult:0);
  }

  onMultiply(): void {
    //event.preventDefault(); // Prevents to reload page
    let a = this.storedA.value;
    let b = this.storedB.value;
    this.somme.setValue(a * b);
    console.log(a + b)

    //FormControl et NgModel == exchange data between html and ts
    // local storage of values : attend toString
    localStorage.setItem('a', a.toString());
    localStorage.setItem('b', b.toString());
    localStorage.setItem('result', this.somme.value.toString());
  }
}