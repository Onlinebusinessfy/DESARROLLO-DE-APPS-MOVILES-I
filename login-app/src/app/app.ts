import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  isLoggedIn = false;

  loginSuccess() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

}