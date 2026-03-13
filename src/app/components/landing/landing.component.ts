import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="landing-container">
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
            <a routerLink="/contact">Contact</a>
          </div>
          <div class="nav-cta">
            <a routerLink="/login" class="nav-login">Log In</a>
            <a routerLink="/register" class="btn-primary">Generate Idea</a>
          </div>
        </div>
      </nav>

      <main class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">Turn Your Skills Into<br>a Startup with AI</h1>
              <p class="hero-subtitle">Our AI agents generate startup ideas, market insights,<br>and business plans in seconds.</p>
              <div class="hero-actions">
                <a routerLink="/register" class="btn-generate">
                  Generate Startup Idea ✨
                </a>
              </div>
            </div>
            <div class="hero-visual">
              <div class="ai-graphic">
                <div class="ai-nodes">
                  <div class="node node-1">💡</div>
                  <div class="node node-2">🔍</div>
                  <div class="node node-3">📊</div>
                  <div class="node node-4">🗺️</div>
                  <div class="node node-5">📄</div>
                </div>
                <div class="connections"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section class="features-section">
        <div class="container">
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">💡</div>
              <h3>AI Idea Generator</h3>
              <p>50 unique startup ideas based on your skills and market trends.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔍</div>
              <h3>Market Research Agent</h3>
              <p>Comprehensive market insights and demographic analysis.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📊</div>
              <h3>Competitor Analysis</h3>
              <p>Detailed breakdown of your biggest competitors.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🗺️</div>
              <h3>Startup Roadmap</h3>
              <p>Step-by-step actionable plan from idea to launch.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📄</div>
              <h3>Pitch Deck Generator</h3>
              <p>Create an investor-ready presentation in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="trusted-section">
        <div class="container">
          <p class="trusted-text">Trusted by entrepreneurs at</p>
          <div class="logo-cloud">
            <div class="company-logo">⬡ TechCorp</div>
            <div class="company-logo">△ Innovate</div>
            <div class="company-logo">○ GlobalNet</div>
            <div class="company-logo">▢ Nexus</div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .landing-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white;
    }
    
    .navbar {
      padding: 1.5rem 0;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
      opacity: 0.9;
      transition: opacity 0.3s;
    }
    
    .nav-links a:hover {
      opacity: 1;
    }
    
    .nav-cta {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
    
    .nav-login {
      font-weight: 500;
      opacity: 0.9;
      transition: opacity 0.3s;
    }
    
    .nav-login:hover {
      opacity: 1;
    }
    
    .btn-primary {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 12px;
      font-weight: 600;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .btn-primary:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }
    
    .hero-section {
      padding: 6rem 0;
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 4rem;
    }
    
    .hero-title {
      font-size: 4rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }
    
    .hero-subtitle {
      font-size: 1.3rem;
      opacity: 0.9;
      margin-bottom: 2.5rem;
      line-height: 1.6;
    }
    
    .btn-generate {
      background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
      color: white;
      padding: 1.2rem 2.5rem;
      border-radius: 16px;
      font-weight: 700;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
      display: inline-block;
    }
    
    .btn-generate:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(245, 158, 11, 0.6);
    }
    
    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .ai-graphic {
      position: relative;
      width: 400px;
      height: 400px;
    }
    
    .ai-nodes {
      position: relative;
      width: 100%;
      height: 100%;
    }
    
    .node {
      position: absolute;
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      animation: float 3s ease-in-out infinite;
    }
    
    .node-1 { top: 20%; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
    .node-2 { top: 40%; left: 20%; animation-delay: 0.5s; }
    .node-3 { top: 40%; right: 20%; animation-delay: 1s; }
    .node-4 { bottom: 30%; left: 30%; animation-delay: 1.5s; }
    .node-5 { bottom: 30%; right: 30%; animation-delay: 2s; }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    .features-section {
      padding: 4rem 0;
      background: rgba(255, 255, 255, 0.05);
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1.5rem;
    }
    
    .feature-card {
      background: rgba(255, 255, 255, 0.1);
      padding: 2rem 1.5rem;
      border-radius: 16px;
      text-align: center;
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.15);
    }
    
    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .feature-card h3 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }
    
    .feature-card p {
      font-size: 0.9rem;
      opacity: 0.9;
      line-height: 1.5;
    }
    
    .trusted-section {
      padding: 3rem 0;
      text-align: center;
    }
    
    .trusted-text {
      font-size: 0.9rem;
      opacity: 0.7;
      margin-bottom: 2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .logo-cloud {
      display: flex;
      justify-content: center;
      gap: 3rem;
      align-items: center;
    }
    
    .company-logo {
      font-size: 1.2rem;
      font-weight: 600;
      opacity: 0.6;
      transition: opacity 0.3s;
    }
    
    .company-logo:hover {
      opacity: 0.9;
    }
    
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .hero-title {
        font-size: 3rem;
      }
      
      .features-grid {
        grid-template-columns: 1fr;
      }
      
      .nav-links {
        display: none;
      }
      
      .logo-cloud {
        flex-wrap: wrap;
        gap: 1.5rem;
      }
    }
  `]
})
export class LandingComponent {}