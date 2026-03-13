import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <div class="welcome-robot">🤖</div>
          <h2>Welcome Back</h2>
          <p>Email Address</p>
        </div>
        
        <form (ngSubmit)="onSubmit()" #loginForm="ngForm" class="auth-form">
          <div class="form-group">
            <input 
              type="email" 
              [(ngModel)]="credentials.email" 
              name="email" 
              placeholder="Enter your email" 
              required
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label>Password</label>
            <input 
              type="password" 
              [(ngModel)]="credentials.password" 
              name="password" 
              placeholder="Enter your password" 
              required
              class="form-input"
            >
          </div>
          
          <button type="submit" [disabled]="loading" class="btn-login">
            <span *ngIf="!loading">Login</span>
            <span *ngIf="loading">Logging in...</span>
          </button>
          
          <div class="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
        </form>
        
        <div class="auth-footer">
          <p>Don't have an account? <a routerLink="/register" class="signup-link">Sign up</a></p>
        </div>
        
        <div *ngIf="error" class="error-message">
          {{error}}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      background: #f8fafc;
    }
    
    .auth-card {
      background: white;
      padding: 3rem 2.5rem;
      border-radius: 20px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      border: 1px solid #e2e8f0;
    }
    
    .auth-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .welcome-robot {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    
    h2 {
      color: #1e293b;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    
    .auth-header p {
      color: #64748b;
      font-size: 1rem;
      margin-bottom: 0;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    label {
      display: block;
      color: #374151;
      font-weight: 500;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
    
    .form-input {
      width: 100%;
      padding: 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      background: #f9fafb;
      color: #1f2937;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .form-input:focus {
      outline: none;
      border-color: #6366f1;
      background: white;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
    
    .form-input::placeholder {
      color: #9ca3af;
    }
    
    .btn-login {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      border: none;
      border-radius: 12px;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 1rem;
    }
    
    .btn-login:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    }
    
    .btn-login:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }
    
    .forgot-password {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    
    .forgot-password a {
      color: #6366f1;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .forgot-password a:hover {
      text-decoration: underline;
    }
    
    .auth-footer {
      text-align: center;
      color: #64748b;
      font-size: 0.9rem;
    }
    
    .signup-link {
      color: #6366f1;
      text-decoration: none;
      font-weight: 600;
    }
    
    .signup-link:hover {
      text-decoration: underline;
    }
    
    .error-message {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: #dc2626;
      padding: 0.75rem;
      border-radius: 8px;
      margin-top: 1rem;
      font-size: 0.9rem;
      text-align: center;
    }
  `]
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  loading = false;
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.loading = true;
    this.error = '';
    
    // For demo purposes, simulate successful login
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/dashboard']);
    }, 1500);
  }
}