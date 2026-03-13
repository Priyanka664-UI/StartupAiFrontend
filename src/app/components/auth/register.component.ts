import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <div class="welcome-robot">🤖</div>
          <h2 *ngIf="!isGoogleRegistration">Create Account</h2>
          <h2 *ngIf="isGoogleRegistration">Complete Google Registration</h2>
          <p *ngIf="!isGoogleRegistration">Join StartSmart AI today</p>
          <p *ngIf="isGoogleRegistration">Complete your account setup</p>
        </div>
        
        <form (ngSubmit)="onSubmit()" #registerForm="ngForm" class="auth-form">
          <div class="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              [(ngModel)]="userData.name" 
              name="name" 
              placeholder="Enter your full name" 
              required
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              [(ngModel)]="userData.email" 
              name="email" 
              placeholder="Enter your email" 
              required
              [readonly]="isGoogleRegistration"
              class="form-input"
              [class.readonly]="isGoogleRegistration"
            >
          </div>
          
          <div class="form-group" *ngIf="!isGoogleRegistration">
            <label>Password</label>
            <input 
              type="password" 
              [(ngModel)]="userData.password" 
              name="password" 
              placeholder="Create a password" 
              required
              class="form-input"
            >
          </div>
          
          <button type="submit" [disabled]="loading" class="btn-register">
            <span *ngIf="!loading && !isGoogleRegistration">Create Account</span>
            <span *ngIf="!loading && isGoogleRegistration">Complete Registration</span>
            <span *ngIf="loading && !isGoogleRegistration">Creating Account...</span>
            <span *ngIf="loading && isGoogleRegistration">Completing Registration...</span>
          </button>
        </form>
        
        <div class="auth-footer">
          <p>Already have an account? <a routerLink="/login" class="login-link">Sign in</a></p>
        </div>
        
        <div *ngIf="error" class="error-message">
          {{error}}
        </div>
        <div *ngIf="success" class="success-message">
          {{success}}
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
    
    .btn-register {
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
      margin-bottom: 1.5rem;
    }
    
    .btn-register:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    }
    
    .btn-register:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }
    
    .auth-footer {
      text-align: center;
      color: #64748b;
      font-size: 0.9rem;
    }
    
    .login-link {
      color: #6366f1;
      text-decoration: none;
      font-weight: 600;
    }
    
    .login-link:hover {
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
    
    .success-message {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #166534;
      padding: 0.75rem;
      border-radius: 8px;
      margin-top: 1rem;
      font-size: 0.9rem;
      text-align: center;
    }
    
    .readonly {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
  `]
})
export class RegisterComponent implements OnInit {
  userData = { name: '', email: '', password: '' };
  loading = false;
  error = '';
  success = '';
  isGoogleRegistration = false;
  googleUserInfo: any = null;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Check if this is a Google registration
    this.route.queryParams.subscribe(params => {
      if (params['googleAuth'] === 'true') {
        this.isGoogleRegistration = true;
        this.userData.email = params['email'] || '';
        this.userData.name = params['name'] || '';
        
        // Get Google user info from localStorage
        const googleUserInfo = localStorage.getItem('googleUserInfo');
        if (googleUserInfo) {
          this.googleUserInfo = JSON.parse(googleUserInfo);
        }
      }
    });
  }

  onSubmit() {
    this.loading = true;
    this.error = '';
    this.success = '';
    
    if (this.isGoogleRegistration && this.googleUserInfo) {
      // Register Google user
      this.authService.googleRegister(
        this.googleUserInfo.email,
        this.userData.name || this.googleUserInfo.name,
        this.googleUserInfo.googleId
      ).subscribe({
        next: (response) => {
          this.loading = false;
          this.success = 'Google account registered successfully! Redirecting to dashboard...';
          
          // Clear stored Google user info
          localStorage.removeItem('googleUserInfo');
          
          setTimeout(() => this.router.navigate(['/dashboard']), 2000);
        },
        error: (error) => {
          this.loading = false;
          console.error('Google registration error details:', error);
          console.error('Error status:', error.status);
          console.error('Error response:', error.error);
          this.error = error.error?.message || error.error || 'Google registration failed. Please try again.';
        }
      });
    } else {
      // Regular registration
      this.authService.register(this.userData).subscribe({
        next: (response) => {
          this.loading = false;
          this.success = 'Account created successfully! Redirecting to login...';
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        error: (error) => {
          this.loading = false;
          console.error('Registration error details:', error);
          console.error('Error status:', error.status);
          console.error('Error response:', error.error);
          this.error = error.error?.message || error.error || 'Registration failed. Please try again.';
        }
      });
    }
  }
}