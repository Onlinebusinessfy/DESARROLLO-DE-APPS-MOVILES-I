import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  usuario = '';
  password = '';
  error = false;

  @Output() loginEvent = new EventEmitter<void>();

  login() {

    if (this.usuario === 'samueldominguez' && this.password === 'samuel123') {
      this.error = false;
      this.loginEvent.emit();
    } else {
      this.error = true;
    }

  }

}