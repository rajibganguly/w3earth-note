import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  notes: Array<{ title: string; details: string; dateTime: string; currentTime: string }> = [];
  name = '';

  constructor(private router: Router, private userService: UserService) {
    this.name = JSON.parse(this.userService.getUser()) // Get user from UserService and convert to uppercase
  }


  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    const storedNotes = localStorage.getItem('notes');
    this.notes = storedNotes ? JSON.parse(storedNotes) : [];
  }

  deleteNote(index: number): void {
    this.notes.splice(index, 1); // Remove the note from the array
    localStorage.setItem('notes', JSON.stringify(this.notes)); // Update localStorage
    alert('Note deleted successfully!');
  }

  deleteAllNotes(): void {
    if (confirm('Are you sure you want to delete all notes?')) {
      this.notes = []; // Clear the notes array
      localStorage.removeItem('notes'); // Remove notes from localStorage
      alert('All notes deleted successfully!');
      this.router.navigate(['/note']); // Redirect to note component
    }
  }
}
