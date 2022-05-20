import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { PlatformLocation } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nouroulhijab-backoffice';

  isAuth: any
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }


  initializeApp() {
      this.authService.isAuth$.subscribe(state => {
        console.log(state)
        this.isAuth = state
        if (state) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/login']);
        }
      });
  }
}
