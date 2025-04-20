import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  currentInput: string = '';
  result: string = '';

  appendToInput(value: string): void {
    this.currentInput += value;
  }

  clearInput(): void {
    this.currentInput = '';
    this.result = '';
  }

  calculateResult(): void {
    try {
      this.result = eval(this.currentInput).toString();
    } catch (error) {
      this.result = 'Error';
    }
  }
}