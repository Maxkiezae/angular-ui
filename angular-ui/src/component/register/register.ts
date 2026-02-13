import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterInterface } from '../../service/interface-app/register-interface';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  username = '';
  password = '';
  confirmPassword = '';
  constructor(private router: Router , private registerInterface: RegisterInterface) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.valid()) {
      alert('Please fill in all fields and ensure passwords match.');
      return;
    }
    this.registerInterface.register({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response) => {
        if (response.statusCode === 200) {
          alert('Registration successful! Please log in.');
          this.router.navigate(['/login']);
        } else {
          alert('Registration failed: ' + response.message);
        }
      },
      error: (error) => {
        alert('Registration failed: ' + (error.error?.message || 'Unknown error'));
        console.error('Registration failed:', error);
      }
    });
  }
  onBack(): void {
    this.router.navigate(['/login'])
  }
  valid(): boolean {
    return this.username.trim() !== '' && this.password.trim() !== '' && this.password === this.confirmPassword;
  }
}
