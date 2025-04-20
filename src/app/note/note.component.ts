import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { UserService } from '../user.service';
import { CalculatorComponent } from '../calculator/calculator.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [FormsModule, CommonModule, MenuComponent, CalculatorComponent],
  // The component is standalone and imports FormsModule, MenuComponent, and CalculatorComponent
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {

  note = {
    title: '',
    details: '',
    dateTime: '',
    currentTime: new Date().toISOString()
  };
  calcFlag: boolean = false;

  user = localStorage.getItem('user');
  name = this.user;

    constructor(private userService: UserService) {
      this.name = JSON.parse(this.userService.getUser()) // Get user from UserService and convert to uppercase
    }

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent default form submission behavior
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.push(this.note);
    localStorage.setItem('notes', JSON.stringify(notes));
    alert('Note saved successfully!');
    this.resetForm();
  }

  resetForm(): void {
    this.note = {
      title: '',
      details: '',
      dateTime: '',
      currentTime: new Date().toISOString()
    };
  }

  CalculatorApp() {
    if(this.calcFlag == false) {
      this.calcFlag = true;
    }
    else {
      this.calcFlag = false;
    }
  }
}
