import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StartupService } from '../../services/startup.service';
import { MarketTrendsComponent } from '../market-trends/market-trends.component';
import { MarketAnalysisComponent } from '../market-analysis/market-analysis.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MarketTrendsComponent, MarketAnalysisComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any = { name: 'John Doe', email: 'john@example.com' };
  ideas: any[] = [
    {
      id: 1,
      title: 'AI-Powered Fitness Coach',
      description: 'A personalized fitness app that uses AI to create custom workout plans based on user goals, fitness level, and available equipment.',
      opportunityScore: 8.5,
      tags: ['AI', 'Fitness', 'Health', 'Mobile App'],
      marketAnalysis: true
    },
    {
      id: 2,
      title: 'Smart Home Energy Manager',
      description: 'IoT solution that optimizes home energy consumption by learning usage patterns and automatically adjusting smart devices.',
      opportunityScore: 7.2,
      tags: ['IoT', 'Energy', 'Smart Home', 'Sustainability'],
      marketAnalysis: false
    },
    {
      id: 3,
      title: 'Virtual Reality Learning Platform',
      description: 'Immersive VR platform for educational institutions to provide hands-on learning experiences in science, history, and technical subjects.',
      opportunityScore: 9.1,
      tags: ['VR', 'Education', 'Technology', 'B2B'],
      marketAnalysis: true
    }
  ];
  loading = false;
  currentView = 'dashboard';
  selectedIdeaForAnalysis: any = null;

  constructor(
    private authService: AuthService,
    private startupService: StartupService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUserProfile();
    this.loadIdeas();
  }

  get highPotentialIdeas() {
    return this.ideas.filter(idea => idea.opportunityScore > 7).length;
  }

  get analyzedIdeas() {
    return this.ideas.filter(idea => idea.marketAnalysis).length;
  }

  loadUserProfile() {
    this.authService.getUserProfile().subscribe({
      next: (user) => this.user = user,
      error: () => {
        console.log('Using sample user data');
      }
    });
  }

  loadIdeas() {
    this.startupService.getUserIdeas().subscribe({
      next: (ideas) => this.ideas = ideas,
      error: (error) => {
        console.log('Using sample ideas data');
      }
    });
  }

  generateIdea() {
    this.currentView = 'generate';
  }

  quickGenerateIdea() {
    this.loading = true;
    
    setTimeout(() => {
      const newIdea = {
        id: this.ideas.length + 1,
        title: 'AI-Powered Learning Assistant',
        description: 'Personalized AI tutor that adapts to individual learning styles and provides real-time feedback for students.',
        opportunityScore: 8.9,
        tags: ['AI', 'Education', 'Personalization', 'EdTech'],
        marketAnalysis: false
      };
      this.ideas.unshift(newIdea);
      this.loading = false;
      this.currentView = 'dashboard';
    }, 2000);
  }

  showDashboard() {
    this.currentView = 'dashboard';
  }

  showTrends() {
    this.currentView = 'trends';
  }

  showMentor() {
    this.currentView = 'mentor';
  }

  showSettings() {
    this.currentView = 'settings';
  }

  testMarketAnalysis() {
    // Create a test idea for market analysis
    const testIdea = {
      id: 999,
      title: 'AI-Powered Market Analysis Tool',
      description: 'A comprehensive market analysis platform for startups',
      opportunityScore: 8.5,
      tags: ['AI', 'Analytics', 'SaaS'],
      marketAnalysis: false
    };
    this.analyzeMarket(testIdea);
  }

  viewIdeaDetails(idea: any) {
    console.log('Viewing details for:', idea.title);
  }

  analyzeMarket(idea: any) {
    console.log('Analyzing market for idea:', idea);
    this.selectedIdeaForAnalysis = idea;
    this.currentView = 'market-analysis';
  }

  backToDashboard() {
    console.log('Returning to dashboard');
    this.currentView = 'dashboard';
    this.selectedIdeaForAnalysis = null;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}