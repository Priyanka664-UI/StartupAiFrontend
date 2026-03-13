import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="page-container">
      <nav class="navbar">
        <div class="container">
          <div class="logo">
            <div class="logo-icon">🚀</div>
            <span class="logo-text">StartSmart AI</span>
          </div>
          <div class="nav-links">
            <a routerLink="/">Home</a>
            <a routerLink="/solutions">Solutions</a>
            <a routerLink="/features">Features</a>
            <a routerLink="/contact" class="active">Contact</a>
          </div>
          <div class="nav-cta">
            <a routerLink="/login" class="nav-login">Log In</a>
            <a routerLink="/register" class="btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      <main class="main-content">
        <div class="container">
          <div class="page-header">
            <h1>Get in Touch</h1>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          <div class="contact-content">
            <div class="contact-info">
              <div class="info-card">
                <div class="info-icon">📧</div>
                <h3>Email Us</h3>
                <p>Get in touch via email for detailed inquiries</p>
                <a href="mailto:hello@startsmart.ai">hello@startsmart.ai</a>
              </div>

              <div class="info-card">
                <div class="info-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Chat with our support team in real-time</p>
                <button class="chat-btn">Start Chat</button>
              </div>

              <div class="info-card">
                <div class="info-icon">📞</div>
                <h3>Call Us</h3>
                <p>Speak directly with our team</p>
                <a href="tel:+1-555-0123">+1 (555) 012-3456</a>
              </div>

              <div class="info-card">
                <div class="info-icon">🏢</div>
                <h3>Office</h3>
                <p>Visit us at our headquarters</p>
                <address>
                  123 Innovation Drive<br>
                  Tech Valley, CA 94000<br>
                  United States
                </address>
              </div>
            </div>

            <div class="contact-form-section">
              <div class="form-card">
                <h2>Send us a Message</h2>
                <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="contact-form">
                  <div class="form-row">
                    <div class="form-group">
                      <label>First Name</label>
                      <input 
                        type="text" 
                        [(ngModel)]="formData.firstName" 
                        name="firstName" 
                        placeholder="John" 
                        required
                        class="form-input"
                      >
                    </div>
                    <div class="form-group">
                      <label>Last Name</label>
                      <input 
                        type="text" 
                        [(ngModel)]="formData.lastName" 
                        name="lastName" 
                        placeholder="Doe" 
                        required
                        class="form-input"
                      >
                    </div>
                  </div>

                  <div class="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      [(ngModel)]="formData.email" 
                      name="email" 
                      placeholder="john@example.com" 
                      required
                      class="form-input"
                    >
                  </div>

                  <div class="form-group">
                    <label>Subject</label>
                    <select [(ngModel)]="formData.subject" name="subject" required class="form-input">
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label>Message</label>
                    <textarea 
                      [(ngModel)]="formData.message" 
                      name="message" 
                      placeholder="Tell us how we can help you..." 
                      required
                      class="form-textarea"
                      rows="5"
                    ></textarea>
                  </div>

                  <button type="submit" [disabled]="loading" class="submit-btn">
                    <span *ngIf="!loading">Send Message</span>
                    <span *ngIf="loading">Sending...</span>
                  </button>
                </form>

                <div *ngIf="success" class="success-message">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>

                <div *ngIf="error" class="error-message">
                  ❌ {{error}}
                </div>
              </div>
            </div>
          </div>

          <div class="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-grid">
              <div class="faq-item">
                <h3>How does the AI idea generation work?</h3>
                <p>Our AI analyzes your skills, interests, and current market trends to generate personalized startup ideas with high success potential.</p>
              </div>
              <div class="faq-item">
                <h3>Is there a free trial available?</h3>
                <p>Yes! You can generate your first 3 startup ideas completely free. No credit card required.</p>
              </div>
              <div class="faq-item">
                <h3>How accurate is the market analysis?</h3>
                <p>Our market analysis uses real-time data from multiple sources and has been validated by industry experts with 85%+ accuracy.</p>
              </div>
              <div class="faq-item">
                <h3>Can I export my business plans?</h3>
                <p>Absolutely! You can export your business plans, pitch decks, and roadmaps in PDF, PowerPoint, and Word formats.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
      background: #f8fafc;
    }

    .navbar {
      background: white;
      border-bottom: 1px solid #e2e8f0;
      padding: 1rem 0;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      color: #1e293b;
    }

    .logo-icon {
      font-size: 2rem;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      font-weight: 500;
    }

    .nav-links a {
      color: #64748b;
      text-decoration: none;
      transition: color 0.3s;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #6366f1;
    }

    .nav-cta {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .nav-login {
      color: #64748b;
      text-decoration: none;
      font-weight: 500;
    }

    .btn-primary {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    }

    .main-content {
      padding: 4rem 0;
    }

    .main-content .container {
      display: block;
    }

    .page-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .page-header h1 {
      font-size: 3rem;
      font-weight: 800;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .page-header p {
      font-size: 1.3rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 4rem;
      margin-bottom: 5rem;
    }

    .contact-info {
      display: grid;
      gap: 1.5rem;
    }

    .info-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      text-align: center;
    }

    .info-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .info-card h3 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 0.5rem;
    }

    .info-card p {
      color: #64748b;
      margin-bottom: 1rem;
    }

    .info-card a {
      color: #6366f1;
      text-decoration: none;
      font-weight: 600;
    }

    .info-card a:hover {
      text-decoration: underline;
    }

    .chat-btn {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .chat-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    }

    .info-card address {
      font-style: normal;
      color: #64748b;
      line-height: 1.6;
    }

    .form-card {
      background: white;
      padding: 3rem;
      border-radius: 20px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    }

    .form-card h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 2rem;
      text-align: center;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      color: #374151;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .form-input,
    .form-textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      background: #f9fafb;
      color: #1f2937;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      border-color: #6366f1;
      background: white;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      width: 100%;
      padding: 1.2rem;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 700;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 1rem;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    }

    .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }

    .success-message {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #166534;
      padding: 1rem;
      border-radius: 12px;
      text-align: center;
      font-weight: 500;
    }

    .error-message {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: #dc2626;
      padding: 1rem;
      border-radius: 12px;
      text-align: center;
      font-weight: 500;
    }

    .faq-section {
      text-align: center;
    }

    .faq-section h2 {
      font-size: 2.5rem;
      font-weight: 800;
      color: #1e293b;
      margin-bottom: 3rem;
    }

    .faq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .faq-item {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      text-align: left;
    }

    .faq-item h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .faq-item p {
      color: #64748b;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      
      .page-header h1 {
        font-size: 2.5rem;
      }
      
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
      
      .form-card {
        padding: 2rem;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };
  loading = false;
  success = false;
  error = '';

  onSubmit() {
    this.loading = true;
    this.success = false;
    this.error = '';

    // Simulate form submission
    setTimeout(() => {
      this.loading = false;
      this.success = true;
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      };
    }, 2000);
  }
}