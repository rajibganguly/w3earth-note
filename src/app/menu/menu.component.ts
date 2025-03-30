import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private userService: UserService) {

    }
       
}
