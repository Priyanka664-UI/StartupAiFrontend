import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8087/api/auth';
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('token'));
  
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.tokenSubject.next(response.token);
        }
      })
    );
  }

  register(userData: { name: string; email: string; password: string }): Observable<any> {
    console.log('AuthService: Sending registration request:', userData);
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  googleLogin(idToken: string): Observable<any> {
    console.log('AuthService: Sending Google login request with token:', idToken.substring(0, 50) + '...');
    const payload = { idToken };
    console.log('AuthService: Request payload:', payload);
    
    return this.http.post(`${this.apiUrl}/google`, payload).pipe(
      tap((response: any) => {
        console.log('AuthService: Google login response:', response);
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.tokenSubject.next(response.token);
        }
      })
    );
  }

  googleRegister(email: string, name: string, googleId: string): Observable<any> {
    console.log('AuthService: Sending Google registration request for:', email);
    const payload = { email, name, googleId };
    
    return this.http.post(`${this.apiUrl}/google/register`, payload).pipe(
      tap((response: any) => {
        console.log('AuthService: Google registration response:', response);
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.tokenSubject.next(response.token);
        }
      })
    );
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  logout() {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}