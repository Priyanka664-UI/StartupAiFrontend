import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solutions',
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
            <a routerLink="/solutions" class="active">Solutions</a>
            <a routerLink="/features">Features</a>
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
            <h1>AI-Powered Solutions</h1>
            <p>Comprehensive tools to transform your ideas into successful startups</p>
          </div>

          <div class="solutions-grid">
            <div class="solution-card">
              <div class="solution-icon">🎯</div>
              <h3>Idea Generation</h3>
              <p>Generate 50+ unique startup ideas based on your skills, interests, and market trends using advanced AI algorithms.</p>
              <ul>
                <li>Personalized recommendations</li>
                <li>Market trend analysis</li>
                <li>Skill-based matching</li>
                <li>Industry insights</li>
              </ul>
              <a routerLink="/register" class="solution-btn">Try Now</a>
            </div>

            <div class="solution-card">
              <div class="solution-icon">📊</div>
              <h3>Market Research</h3>
              <p>Get comprehensive market analysis, target audience insights, and competitive landscape overview in minutes.</p>
              <ul>
                <li>Market size estimation</li>
                <li>Target audience profiling</li>
                <li>Trend analysis</li>
                <li>Growth projections</li>
              </ul>
              <a routerLink="/register" class="solution-btn">Explore</a>
            </div>

            <div class="solution-card">
              <div class="solution-icon">🏆</div>
              <h3>Competitor Analysis</h3>
              <p>Identify key competitors, analyze their strategies, and discover market gaps and opportunities.</p>
              <ul>
                <li>Competitor identification</li>
                <li>SWOT analysis</li>
                <li>Pricing strategies</li>
                <li>Market positioning</li>
              </ul>
              <a routerLink="/register" class="solution-btn">Analyze</a>
            </div>

            <div class="solution-card">
              <div class="solution-icon">🗺️</div>
              <h3>Business Roadmap</h3>
              <p>Create detailed step-by-step plans from concept to launch with milestones and actionable tasks.</p>
              <ul>
                <li>Milestone planning</li>
                <li>Resource allocation</li>
                <li>Timeline optimization</li>
                <li>Risk assessment</li>
              </ul>
              <a routerLink="/register" class="solution-btn">Plan</a>
            </div>

            <div class="solution-card">
              <div class="solution-icon">💼</div>
              <h3>Pitch Deck Creation</h3>
              <p>Generate investor-ready presentations with compelling narratives and professional design.</p>
              <ul>
                <li>Professional templates</li>
                <li>Data visualization</li>
                <li>Storytelling framework</li>
                <li>Export options</li>
              </ul>
              <a routerLink="/register" class="solution-btn">Create</a>
            </div>

            <div class="solution-card">
              <div class="solution-icon">🤖</div>
              <h3>AI Mentor Chat</h3>
              <p>Get personalized guidance and answers to your startup questions from our AI mentor available 24/7.</p>
              <ul>
                <li>Real-time assistance</li>
                <li>Expert knowledge base</li>
                <li>Personalized advice</li>
                <li>Progress tracking</li>
              </ul>
              <a routerLink="/register" class="solution-btn">Chat Now</a>
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

    .solutions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .solution-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .solution-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    .solution-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    .solution-card h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .solution-card p {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .solution-card ul {
      list-style: none;
      margin-bottom: 2rem;
    }

    .solution-card li {
      color: #64748b;
      padding: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    .solution-card li:before {
      content: "✓";
      color: #10b981;
      font-weight: bold;
      position: absolute;
      left: 0;
    }

    .solution-btn {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      display: inline-block;
      transition: all 0.3s ease;
    }

    .solution-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      
      .page-header h1 {
        font-size: 2.5rem;
      }
      
      .solutions-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SolutionsComponent {}