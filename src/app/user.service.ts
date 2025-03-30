import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null); // BehaviorSubject to store user state
  user$ = this.userSubject.asObservable(); // Observable for components to subscribe to

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('user') || '';

    if (storedUser) {
      this.userSubject.next(storedUser); // Initialize with user from localStorage
    } else {
      this.router.navigate(['/']); // Redirect to login if no user is found
    }
  }

  setUser(user: any): void {
    this.userSubject.next(user); // Update the BehaviorSubject
    localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage
  }

  getUser(): any {
    return this.userSubject.value; // Get the current user value
  }


}