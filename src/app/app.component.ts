import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce-frontend';

  constructor(private router: Router){}

  isLoginOrRegister() {
    return this.router.url.includes('/login') || this.router.url.includes('/register')
  }
}
