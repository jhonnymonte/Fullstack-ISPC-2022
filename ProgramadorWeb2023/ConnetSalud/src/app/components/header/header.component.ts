import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthStateService } from '../services/auth-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor( private authService: AuthService, private authStateService: AuthStateService )
{}

    logout() {
      this.authService.logout();
}

    isLoggedIn() {
  return this.authStateService.isUserLoggedIn();
}
}