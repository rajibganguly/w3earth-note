import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { ReportComponent } from './report/report.component';
import { MenuComponent } from "./menu/menu.component";
import { LoginComponent } from "./login/login.component";
import { UserService } from './user.service';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'w3earth-note-app';
  user = localStorage.getItem('user');

  constructor(private userService: UserService, private router: Router) {
    console.log('this.isLoggedIn()', this.isLoggedIn())
    if (!this.isLoggedIn()) {
      this.router.navigate(['/']);
    } 
  }

  isLoggedIn(): boolean {
    return !!this.userService.getUser(); // Check if user exists
  }
}
