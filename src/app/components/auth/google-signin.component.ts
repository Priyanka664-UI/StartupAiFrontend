import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

declare const google: any;

@Component({
  selector: 'app-google-signin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="google-signin-container">
      <div id="google-signin-button"></div>
    </div>
  `,
  styles: [`
    .google-signin-container {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
    
    .google-btn {
      display: flex;
      align-items: center;
      gap: 12px;
      background: white;
      border: 1px solid #dadce0;
      border-radius: 4px;
      padding: 12px 16px;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #3c4043;
      cursor: pointer;
      transition: all 0.2s;
      min-width: 200px;
      justify-content: center;
    }
    
    .google-btn:hover {
      box-shadow: 0 1px 2px 0 rgba(60,64,67,.30), 0 1px 3px 1px rgba(60,64,67,.15);
      background-color: #f8f9fa;
    }
    
    .manual-button {
      display: flex;
      justify-content: center;
    }
  `]
})
export class GoogleSigninComponent implements OnInit, AfterViewInit {
  clientId = environment.googleClientId;
  googleLoaded = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Make handleCredentialResponse available globally
    (window as any).handleCredentialResponse = this.handleCredentialResponse.bind(this);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadGoogleScript();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initGoogleSignIn(), 1000);
    }
  }

  private loadGoogleScript() {
    if (typeof google !== 'undefined') {
      this.googleLoaded = true;
      this.initGoogleSignIn();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log('Google script loaded');
      this.googleLoaded = true;
      setTimeout(() => this.initGoogleSignIn(), 500);
    };
    script.onerror = () => {
      console.error('Failed to load Google script');
    };
    document.head.appendChild(script);
  }

  initGoogleSignIn() {
    if (typeof google !== 'undefined' && google.accounts) {
      console.log('Initializing Google Sign-In with client ID:', this.clientId);
      
      google.accounts.id.initialize({
        client_id: this.clientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });

      const buttonElement = document.getElementById('google-signin-button');
      if (buttonElement) {
        google.accounts.id.renderButton(buttonElement, {
          type: 'standard',
          shape: 'rectangular',
          theme: 'outline',
          text: 'signin_with',
          size: 'large',
          logo_alignment: 'left'
        });
        console.log('Google Sign-In button rendered');
      } else {
        console.error('Google Sign-In button element not found');
      }
    } else {
      console.error('Google accounts API not available');
    }
  }

  handleCredentialResponse(response: any) {
    console.log('Google credential response:', response);
    if (response.credential) {
      console.log('Sending credential to backend:', response.credential.substring(0, 50) + '...');
      
      this.authService.googleLogin(response.credential).subscribe({
        next: (result) => {
          console.log('Google login successful:', result);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Google login failed:', error);
          console.error('Error status:', error.status);
          console.error('Error message:', error.error);
          
          // Check if user needs to register
          if (error.error && typeof error.error === 'string' && error.error.includes('USER_NOT_REGISTERED')) {
            console.log('User not registered, extracting Google user info...');
            
            // Parse the error message to extract user info
            const errorParts = error.error.split(':');
            if (errorParts.length >= 4) {
              const email = errorParts[1];
              const name = errorParts[2];
              const googleId = errorParts[3];
              
              console.log('Redirecting to registration with Google info:', { email, name, googleId });
              
              // Store Google user info in localStorage temporarily
              localStorage.setItem('googleUserInfo', JSON.stringify({ email, name, googleId }));
              
              // Redirect to registration page
              this.router.navigate(['/register'], { 
                queryParams: { 
                  googleAuth: 'true',
                  email: email,
                  name: name
                }
              });
            } else {
              alert('Failed to extract Google user information. Please try again.');
            }
          } else {
            let errorMessage = 'Google login failed';
            if (error.error && typeof error.error === 'string') {
              errorMessage = error.error;
            } else if (error.message) {
              errorMessage = error.message;
            }
            
            alert('Google login failed: ' + errorMessage);
          }
        }
      });
    } else {
      console.error('No credential received from Google');
      alert('No credential received from Google');
    }
  }
}