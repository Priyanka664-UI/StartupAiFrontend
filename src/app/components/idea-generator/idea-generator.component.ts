import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-idea-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="generator-container">
      <div class="generator-header">
        <h1>🎯 AI Idea Generator</h1>
        <p>Tell us about yourself and we'll generate personalized startup ideas</p>
      </div>

      <div class="generator-form">
        <div class="form-section">
          <h3>Your Skills</h3>
          <div class="skill-tags">
            <div *ngFor="let skill of availableSkills" 
                 class="skill-tag" 
                 [class.selected]="selectedSkills.includes(skill)"
                 (click)="toggleSkill(skill)">
              {{skill}}
            </div>
          </div>
          <input type="text" 
                 placeholder="Add custom skill..." 
                 [(ngModel)]="customSkill"
                 (keyup.enter)="addCustomSkill()"
                 class="custom-input">
        </div>

        <div class="form-section">
          <h3>Your Interests</h3>
          <div class="interest-tags">
            <div *ngFor="let interest of availableInterests" 
                 class="interest-tag" 
                 [class.selected]="selectedInterests.includes(interest)"
                 (click)="toggleInterest(interest)">
              {{interest}}
            </div>
          </div>
        </div>

        <div class="form-section">
          <h3>Industry Preference</h3>
          <select [(ngModel)]="selectedIndustry" class="industry-select">
            <option value="">Any Industry</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
            <option value="retail">Retail</option>
            <option value="sustainability">Sustainability</option>
          </select>
        </div>

        <button (click)="generateIdeas()" 
                [disabled]="loading || selectedSkills.length === 0" 
                class="generate-btn">
          <span *ngIf="!loading">Generate Ideas ✨</span>
          <span *ngIf="loading">Generating Ideas... 🔄</span>
        </button>
      </div>

      <div *ngIf="generatedIdeas.length > 0" class="results-section">
        <h2>Your Personalized Startup Ideas</h2>
        <div class="ideas-grid">
          <div *ngFor="let idea of generatedIdeas" class="idea-card">
            <div class="idea-header">
              <h3>{{idea.title}}</h3>
              <div class="score" [class.high]="idea.score >= 8">{{idea.score}}/10</div>
            </div>
            <p class="idea-description">{{idea.description}}</p>
            <div class="idea-tags">
              <span *ngFor="let tag of idea.tags" class="tag">{{tag}}</span>
            </div>
            <div class="idea-metrics">
              <div class="metric">
                <span class="metric-label">Market Size</span>
                <span class="metric-value">{{idea.marketSize}}</span>
              </div>
              <div class="metric">
                <span class="metric-label">Competition</span>
                <span class="metric-value">{{idea.competition}}</span>
              </div>
            </div>
            <div class="idea-actions">
              <button class="btn-secondary">Save Idea</button>
              <button class="btn-primary">Analyze Market</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .generator-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .generator-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .generator-header h1 {
      font-size: 2.5rem;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .generator-header p {
      font-size: 1.2rem;
      color: #64748b;
    }

    .generator-form {
      background: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
      margin-bottom: 3rem;
    }

    .form-section {
      margin-bottom: 2.5rem;
    }

    .form-section h3 {
      font-size: 1.3rem;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .skill-tags, .interest-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .skill-tag, .interest-tag {
      padding: 0.5rem 1rem;
      background: #f1f5f9;
      border: 2px solid #e2e8f0;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .skill-tag:hover, .interest-tag:hover {
      border-color: #6366f1;
    }

    .skill-tag.selected, .interest-tag.selected {
      background: #6366f1;
      color: white;
      border-color: #6366f1;
    }

    .custom-input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 1rem;
    }

    .custom-input:focus {
      outline: none;
      border-color: #6366f1;
    }

    .industry-select {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 1rem;
      background: white;
    }

    .generate-btn {
      width: 100%;
      padding: 1.2rem;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .generate-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    }

    .generate-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .results-section h2 {
      font-size: 2rem;
      color: #1e293b;
      margin-bottom: 2rem;
      text-align: center;
    }

    .ideas-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }

    .idea-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .idea-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    .idea-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .idea-header h3 {
      font-size: 1.3rem;
      color: #1e293b;
      margin: 0;
    }

    .score {
      background: #f1f5f9;
      color: #64748b;
      padding: 0.4rem 0.8rem;
      border-radius: 20px;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .score.high {
      background: #dcfce7;
      color: #166534;
    }

    .idea-description {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .idea-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .tag {
      background: #f1f5f9;
      color: #475569;
      padding: 0.3rem 0.8rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .idea-metrics {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .metric {
      text-align: center;
      padding: 0.75rem;
      background: #f8fafc;
      border-radius: 8px;
    }

    .metric-label {
      display: block;
      font-size: 0.8rem;
      color: #64748b;
      margin-bottom: 0.25rem;
    }

    .metric-value {
      font-weight: 600;
      color: #1e293b;
    }

    .idea-actions {
      display: flex;
      gap: 0.75rem;
    }

    .btn-primary, .btn-secondary {
      flex: 1;
      padding: 0.75rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white;
    }

    .btn-secondary {
      background: #f8fafc;
      color: #64748b;
      border: 1px solid #e2e8f0;
    }

    .btn-primary:hover, .btn-secondary:hover {
      transform: translateY(-1px);
    }
  `]
})
export class IdeaGeneratorComponent {
  availableSkills = [
    'JavaScript', 'Python', 'Marketing', 'Design', 'Sales', 'Data Analysis',
    'Project Management', 'Content Writing', 'SEO', 'Social Media', 'Finance', 'Operations'
  ];

  availableInterests = [
    'Technology', 'Health & Fitness', 'Education', 'Environment', 'Finance',
    'Entertainment', 'Travel', 'Food', 'Fashion', 'Gaming', 'Productivity', 'Social Impact'
  ];

  selectedSkills: string[] = [];
  selectedInterests: string[] = [];
  selectedIndustry = '';
  customSkill = '';
  loading = false;
  generatedIdeas: any[] = [];

  toggleSkill(skill: string) {
    const index = this.selectedSkills.indexOf(skill);
    if (index > -1) {
      this.selectedSkills.splice(index, 1);
    } else {
      this.selectedSkills.push(skill);
    }
  }

  toggleInterest(interest: string) {
    const index = this.selectedInterests.indexOf(interest);
    if (index > -1) {
      this.selectedInterests.splice(index, 1);
    } else {
      this.selectedInterests.push(interest);
    }
  }

  addCustomSkill() {
    if (this.customSkill.trim() && !this.selectedSkills.includes(this.customSkill.trim())) {
      this.selectedSkills.push(this.customSkill.trim());
      this.customSkill = '';
    }
  }

  generateIdeas() {
    this.loading = true;
    
    setTimeout(() => {
      this.generatedIdeas = [
        {
          title: 'EcoTrack - Carbon Footprint App',
          description: 'Help individuals and businesses track and reduce their carbon footprint with AI-powered recommendations.',
          score: 8.7,
          tags: ['Sustainability', 'Mobile App', 'AI'],
          marketSize: '$2.5B',
          competition: 'Medium'
        },
        {
          title: 'SkillBridge - Professional Mentorship',
          description: 'Connect professionals with mentors in their field using AI matching based on skills, goals, and experience.',
          score: 9.1,
          tags: ['Education', 'Networking', 'AI Matching'],
          marketSize: '$1.8B',
          competition: 'Low'
        },
        {
          title: 'SmartBudget - AI Financial Advisor',
          description: 'Personal finance app that uses AI to provide customized budgeting and investment advice.',
          score: 8.3,
          tags: ['Finance', 'AI', 'Personal Finance'],
          marketSize: '$4.2B',
          competition: 'High'
        }
      ];
      this.loading = false;
    }, 3000);
  }
}