import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { NoteComponent } from '../note/note.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  name="";
  
  user = JSON.parse(localStorage.getItem('user') || '[]');

  constructor(private userService: UserService, private router: Router) {
    this.user = this.userService.getUser(); // Get user from UserService
    if(this.user && this.user !== '') {
      this.router.navigate(['/note']); // Redirect to note component if user exists
    } 
  }

  onSubmit(event: Event) {
    localStorage.setItem('user', JSON.stringify(this.name));
    if(this.name !== "") {
      this.router.navigate(['/note']);  // Navigate to the note component
      alert('Login successful!');
    } else {
      this.router.navigate(['/']);  // Navigate to the note component
      alert('Login again!');
    }
    
  }

}
