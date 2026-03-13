import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketAnalysisService } from '../../services/market-analysis.service';

@Component({
  selector: 'app-market-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-analysis.component.html',
  styleUrls: ['./market-analysis.component.css']
})
export class MarketAnalysisComponent implements OnInit {
  @Input() idea: any;
  
  marketData: any = null;
  competitorData: any = null;
  trendsData: any = null;
  techStackData: any = null;
  loading = false;
  activeTab = 'market';
  error: string | null = null;

  constructor(private marketAnalysisService: MarketAnalysisService) {}

  ngOnInit() {
    console.log('Market Analysis component initialized with idea:', this.idea);
    this.loadMarketAnalysis();
  }

  loadMarketAnalysis() {
    console.log('Loading market analysis for idea:', this.idea);
    this.loading = true;
    this.error = null;
    
    const industry = this.idea?.tags?.[0] || 'AI';
    const ideaTitle = this.idea?.title || 'Sample Startup Idea';
    const ideaId = this.idea?.id || 1;
    
    // Load market analysis - only real API data
    this.marketAnalysisService.getMarketAnalysis(ideaId, industry)
      .subscribe({
        next: (data) => {
          console.log('Market analysis data received:', data);
          this.marketData = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading market analysis:', error);
          this.error = 'Failed to load market analysis data';
          this.loading = false;
        }
      });

    // Load competitor analysis - only real API data
    this.marketAnalysisService.getCompetitorAnalysis(ideaId, ideaTitle)
      .subscribe({
        next: (data) => {
          console.log('Competitor data received:', data);
          this.competitorData = data;
        },
        error: (error) => {
          console.error('Error loading competitor analysis:', error);
        }
      });

    // Load trends - only real API data
    this.marketAnalysisService.getTrendAnalysis(industry)
      .subscribe({
        next: (data) => {
          console.log('Trends data received:', data);
          this.trendsData = data;
        },
        error: (error) => {
          console.error('Error loading trend analysis:', error);
        }
      });

    // Load tech stack suggestions - only real API data
    this.marketAnalysisService.getTechStackSuggestions(ideaId, ideaTitle)
      .subscribe({
        next: (data) => {
          console.log('Tech stack data received:', data);
          this.techStackData = data;
        },
        error: (error) => {
          console.error('Error loading tech stack suggestions:', error);
        }
      });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  formatStars(stars: number): string {
    if (stars >= 1000) {
      return (stars / 1000).toFixed(1) + 'k';
    }
    return stars.toString();
  }

  retryLoad() {
    this.loadMarketAnalysis();
  }
}