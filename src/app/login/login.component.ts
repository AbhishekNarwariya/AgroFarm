import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService, User } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signupForm: FormGroup;
  loginForm: FormGroup;
  showLogin = true;
  hideSignupPassword = true;
  hideLoginPassword = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const user: User = this.signupForm.value;
      this.authService.signup(user).subscribe({
        next: (res) => {
          // Signup successful, go directly to dashboard
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          // Handle error (e.g., show error message)
          console.error('Signup failed', err);
        }
      });
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      console.log('Attempting login with', email, password);
      

      this.authService.login(email, password).subscribe({
        next: (user: User | null) => {
          if (user) {
            console.log('Login successful', user);
            
            this.router.navigate(['/dashboard']);
          } else {
            alert('Invalid email or password');
          }
        },
        error: (err: any) => {
          console.error('Login failed', err);
          alert('Login failed');
        }
      });
    }
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignup() {
    this.showLogin = false;
  }
}
