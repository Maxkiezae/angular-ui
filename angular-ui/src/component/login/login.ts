import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from '../../service/interface-app/login-interface';
import { LoginResponseInterface } from '../../service/interface-model/response/login-response.interface';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username = '';
  password = '';

  constructor(
    private router: Router,
    private loginInterface: LoginInterface
  ) { }

  onSubmit(event: Event): void {
    event.preventDefault();

    this.loginInterface
      .login({
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (response: LoginResponseInterface) => {
          if (response.statusCode == 200) {
            this.router.navigate(['/home']);
            localStorage.setItem('token', JSON.stringify(response));
            localStorage.setItem('username', this.username);
          } else {
            alert('Login failed: ' + response.message);
          }
        },
        error: (error) => {
          console.error('Login failed', error);
        },
      });
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }
}
