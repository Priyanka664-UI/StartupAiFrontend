import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
            <a routerLink="/features" class="active">Features</a>
            <a routerLink="/contact">Contact</a>
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
            <h1>Powerful Features</h1>
            <p>Everything you need to build and launch your startup successfully</p>
          </div>

          <div class="features-showcase">
            <div class="feature-section">
              <div class="feature-content">
                <h2>🎯 Smart Idea Generation</h2>
                <p>Our AI analyzes your skills, interests, and market trends to generate personalized startup ideas with high success potential.</p>
                <ul>
                  <li>Skill-based matching algorithm</li>
                  <li>Real-time market trend analysis</li>
                  <li>Opportunity scoring system</li>
                  <li>Industry-specific recommendations</li>
                </ul>
              </div>
              <div class="feature-visual">
                <div class="demo-card">
                  <div class="demo-header">💡 AI Idea Generator</div>
                  <div class="demo-content">
                    <div class="idea-item">
                      <span class="idea-title">EcoTrack App</span>
                      <span class="score">Score: 8.5/10</span>
                    </div>
                    <div class="idea-item">
                      <span class="idea-title">Smart Fitness Coach</span>
                      <span class="score">Score: 9.2/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="feature-section reverse">
              <div class="feature-content">
                <h2>📊 Advanced Analytics</h2>
                <p>Get deep insights into market opportunities, competitor analysis, and business potential with our comprehensive analytics suite.</p>
                <ul>
                  <li>Market size estimation</li>
                  <li>Competitor landscape mapping</li>
                  <li>Revenue projections</li>
                  <li>Risk assessment reports</li>
                </ul>
              </div>
              <div class="feature-visual">
                <div class="demo-card">
                  <div class="demo-header">📈 Market Analysis</div>
                  <div class="chart-placeholder">
                    <div class="chart-bar" style="height: 60%"></div>
                    <div class="chart-bar" style="height: 80%"></div>
                    <div class="chart-bar" style="height: 45%"></div>
                    <div class="chart-bar" style="height: 90%"></div>
                  </div>
                  <div class="chart-label">Market Growth: +25%</div>
                </div>
              </div>
            </div>

            <div class="feature-section">
              <div class="feature-content">
                <h2>🗺️ Strategic Roadmapping</h2>
                <p>Create detailed execution plans with milestones, timelines, and resource requirements to guide your startup journey.</p>
                <ul>
                  <li>Milestone-based planning</li>
                  <li>Resource allocation guidance</li>
                  <li>Timeline optimization</li>
                  <li>Progress tracking tools</li>
                </ul>
              </div>
              <div class="feature-visual">
                <div class="demo-card">
                  <div class="demo-header">🎯 Startup Roadmap</div>
                  <div class="roadmap-steps">
                    <div class="step completed">✓ Market Research</div>
                    <div class="step active">🔄 MVP Development</div>
                    <div class="step">📋 Beta Testing</div>
                    <div class="step">🚀 Launch</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="feature-section reverse">
              <div class="feature-content">
                <h2>🤖 AI Mentor Assistant</h2>
                <p>Get 24/7 guidance from our AI mentor that provides personalized advice based on your startup's unique needs and challenges.</p>
                <ul>
                  <li>Real-time Q&A support</li>
                  <li>Personalized recommendations</li>
                  <li>Industry best practices</li>
                  <li>Progress monitoring</li>
                </ul>
              </div>
              <div class="feature-visual">
                <div class="demo-card">
                  <div class="demo-header">💬 AI Mentor Chat</div>
                  <div class="chat-messages">
                    <div class="message user">How do I validate my idea?</div>
                    <div class="message ai">Start with customer interviews and create an MVP to test core assumptions...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="cta-section">
            <h2>Ready to Transform Your Ideas?</h2>
            <p>Join thousands of entrepreneurs who are building successful startups with StartSmart AI</p>
            <a routerLink="/register" class="cta-button">Start Building Now</a>
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
      margin-bottom: 5rem;
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

    .features-showcase {
      margin-bottom: 5rem;
    }

    .feature-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      margin-bottom: 5rem;
    }

    .feature-section.reverse {
      direction: rtl;
    }

    .feature-section.reverse > * {
      direction: ltr;
    }

    .feature-content h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 1.5rem;
    }

    .feature-content p {
      font-size: 1.1rem;
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .feature-content ul {
      list-style: none;
    }

    .feature-content li {
      color: #64748b;
      padding: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    .feature-content li:before {
      content: "✓";
      color: #10b981;
      font-weight: bold;
      position: absolute;
      left: 0;
    }

    .demo-card {
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      border: 1px solid #e2e8f0;
    }

    .demo-header {
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #e2e8f0;
    }

    .idea-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid #f1f5f9;
    }

    .idea-title {
      color: #1e293b;
      font-weight: 500;
    }

    .score {
      background: #dcfce7;
      color: #166534;
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .chart-placeholder {
      display: flex;
      align-items: end;
      gap: 0.5rem;
      height: 100px;
      margin-bottom: 1rem;
    }

    .chart-bar {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      width: 20px;
      border-radius: 4px 4px 0 0;
    }

    .chart-label {
      color: #10b981;
      font-weight: 600;
      text-align: center;
    }

    .roadmap-steps {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .step {
      padding: 0.75rem;
      border-radius: 8px;
      font-weight: 500;
    }

    .step.completed {
      background: #dcfce7;
      color: #166534;
    }

    .step.active {
      background: #dbeafe;
      color: #1e40af;
    }

    .step:not(.completed):not(.active) {
      background: #f1f5f9;
      color: #64748b;
    }

    .chat-messages {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .message {
      padding: 0.75rem;
      border-radius: 12px;
      max-width: 80%;
    }

    .message.user {
      background: #6366f1;
      color: white;
      align-self: flex-end;
    }

    .message.ai {
      background: #f1f5f9;
      color: #1e293b;
      align-self: flex-start;
    }

    .cta-section {
      text-align: center;
      background: white;
      padding: 4rem 2rem;
      border-radius: 20px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    }

    .cta-section h2 {
      font-size: 2.5rem;
      font-weight: 800;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .cta-section p {
      font-size: 1.2rem;
      color: #64748b;
      margin-bottom: 2rem;
    }

    .cta-button {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white;
      padding: 1.2rem 2.5rem;
      border-radius: 16px;
      text-decoration: none;
      font-weight: 700;
      font-size: 1.1rem;
      display: inline-block;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(99, 102, 241, 0.4);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      
      .page-header h1 {
        font-size: 2.5rem;
      }
      
      .feature-section {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .feature-section.reverse {
        direction: ltr;
      }
    }
  `]
})
export class FeaturesComponent {}