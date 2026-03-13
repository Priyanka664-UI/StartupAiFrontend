import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  MarketTrendsService, 
  TrendingIndustry, 
  StartupOpportunity, 
  MarketNews, 
  CompetitorInfo, 
  TechnologyTrend,
  MarketInsightSummary 
} from '../../services/market-trends.service';

@Component({
  selector: 'app-market-trends',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-800 mb-2">Market Trends Intelligence</h1>
          <p class="text-gray-600">Discover high-growth startup opportunities with real-time market insights</p>
        </div>

        <!-- Loading State -->
        <div *ngIf="loading" class="flex justify-center items-center h-64">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>

        <!-- Main Dashboard -->
        <div *ngIf="!loading" class="space-y-8">
          
          <!-- Trending Industries Section -->
          <section class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="bg-blue-100 p-2 rounded-lg mr-3">📈</span>
              Trending Industries
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div *ngFor="let industry of trendingIndustries" 
                   class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200 hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-3">
                  <h3 class="font-semibold text-gray-800">{{industry.industryName}}</h3>
                  <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Score: {{industry.opportunityScore}}/10
                  </span>
                </div>
                <div class="space-y-2 text-sm text-gray-600">
                  <div class="flex justify-between">
                    <span>Trend Score:</span>
                    <span class="font-medium">{{industry.trendScore}}/10</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Growth:</span>
                    <span class="font-medium text-green-600">+{{industry.growthPercentage}}%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Top Region:</span>
                    <span class="font-medium">{{industry.strongestRegion}}</span>
                  </div>
                </div>
                <!-- Progress Bar -->
                <div class="mt-3">
                  <div class="bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                         [style.width.%]="industry.opportunityScore * 10"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Startup Opportunities Section -->
          <section class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="bg-green-100 p-2 rounded-lg mr-3">💡</span>
              AI-Generated Startup Opportunities
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div *ngFor="let opportunity of startupOpportunities" 
                   class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200 hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-3">
                  <h3 class="font-semibold text-gray-800 text-lg">{{opportunity.title}}</h3>
                  <div class="flex items-center space-x-2">
                    <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{{opportunity.industry}}</span>
                    <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      {{opportunity.opportunityScore}}/10
                    </span>
                  </div>
                </div>
                <div class="space-y-3 text-sm">
                  <div>
                    <span class="font-medium text-red-600">Problem:</span>
                    <p class="text-gray-700 mt-1">{{opportunity.problemStatement}}</p>
                  </div>
                  <div>
                    <span class="font-medium text-green-600">Solution:</span>
                    <p class="text-gray-700 mt-1">{{opportunity.solution}}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Market News & Insights Section -->
          <section class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="bg-purple-100 p-2 rounded-lg mr-3">📰</span>
              Market News & Insights
            </h2>
            
            <!-- Market Insights Summary -->
            <div *ngIf="marketInsights" class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 mb-6 border border-purple-200">
              <h3 class="font-semibold text-gray-800 mb-3">AI Market Analysis Summary</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span class="font-medium text-purple-600">Market Growth:</span>
                  <p class="text-gray-700 mt-1">{{marketInsights.marketGrowth}}</p>
                </div>
                <div>
                  <span class="font-medium text-purple-600">Investment Trends:</span>
                  <p class="text-gray-700 mt-1">{{marketInsights.investmentTrends}}</p>
                </div>
                <div>
                  <span class="font-medium text-purple-600">Opportunities:</span>
                  <p class="text-gray-700 mt-1">{{marketInsights.emergingOpportunities}}</p>
                </div>
              </div>
              <div class="mt-4">
                <span class="font-medium text-purple-600">Key Insights:</span>
                <ul class="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li *ngFor="let insight of marketInsights.keyInsights" class="text-sm">{{insight}}</li>
                </ul>
              </div>
            </div>

            <!-- News Articles -->
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              <div *ngFor="let news of marketNews" 
                   class="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <h4 class="font-semibold text-gray-800 mb-2 line-clamp-2">{{news.title}}</h4>
                <p class="text-gray-600 text-sm mb-3 line-clamp-3">{{news.summary}}</p>
                <div class="flex justify-between items-center text-xs text-gray-500">
                  <span class="font-medium">{{news.source}}</span>
                  <span>{{formatDate(news.publishedDate)}}</span>
                </div>
                <a [href]="news.url" target="_blank" 
                   class="inline-block mt-2 text-blue-600 hover:text-blue-800 text-xs font-medium">
                  Read More →
                </a>
              </div>
            </div>
          </section>

          <!-- Technology Trends Section -->
          <section class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="bg-orange-100 p-2 rounded-lg mr-3">⚡</span>
              Trending Technologies
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div *ngFor="let tech of trendingTechnologies" 
                   class="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200 hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold text-gray-800">{{tech.technologyName}}</h4>
                  <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{{tech.programmingLanguage}}</span>
                </div>
                <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{tech.description}}</p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center text-yellow-600">
                    <span class="text-xs">⭐</span>
                    <span class="text-sm font-medium ml-1">{{formatStars(tech.stars)}}</span>
                  </div>
                  <a [href]="tech.repositoryUrl" target="_blank" 
                     class="text-blue-600 hover:text-blue-800 text-xs font-medium">
                    View →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <!-- Competitors Section -->
          <section class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="bg-red-100 p-2 rounded-lg mr-3">🏢</span>
              Competitor Discovery
            </h2>
            <div class="mb-4">
              <select [(ngModel)]="selectedIndustry" (change)="loadCompetitors()" 
                      class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="AI">AI & Machine Learning</option>
                <option value="FinTech">FinTech</option>
                <option value="HealthTech">HealthTech</option>
                <option value="EdTech">EdTech</option>
                <option value="E-commerce">E-commerce</option>
              </select>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div *ngFor="let competitor of competitors" 
                   class="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 border border-red-200 hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold text-gray-800">{{competitor.startupName}}</h4>
                  <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{{competitor.fundingStage}}</span>
                </div>
                <p class="text-gray-600 text-sm mb-3">{{competitor.description}}</p>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-500">{{competitor.industry}}</span>
                  <a [href]="competitor.websiteUrl" target="_blank" 
                     class="text-blue-600 hover:text-blue-800 text-xs font-medium">
                    Visit →
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  `,
  styles: [`
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class MarketTrendsComponent implements OnInit {
  loading = true;
  selectedIndustry = 'AI';
  
  trendingIndustries: TrendingIndustry[] = [];
  startupOpportunities: StartupOpportunity[] = [];
  marketNews: MarketNews[] = [];
  marketInsights: MarketInsightSummary | null = null;
  competitors: CompetitorInfo[] = [];
  trendingTechnologies: TechnologyTrend[] = [];

  constructor(private marketTrendsService: MarketTrendsService) {}

  ngOnInit() {
    this.loadAllData();
  }

  loadAllData() {
    this.loading = true;
    
    // Load all market trends data
    this.marketTrendsService.getComprehensiveMarketTrends().subscribe({
      next: (data) => {
        this.trendingIndustries = data.trendingIndustries || [];
        this.startupOpportunities = data.startupOpportunities || [];
        this.marketNews = data.marketNews?.news || [];
        this.marketInsights = data.marketNews?.insights || null;
        this.trendingTechnologies = data.trendingTechnologies || [];
        this.loading = false;
        
        // Load competitors for default industry
        this.loadCompetitors();
      },
      error: (error) => {
        console.error('Error loading market trends:', error);
        this.loading = false;
      }
    });
  }

  loadCompetitors() {
    this.marketTrendsService.getCompetitors(this.selectedIndustry).subscribe({
      next: (data) => {
        this.competitors = data;
      },
      error: (error) => {
        console.error('Error loading competitors:', error);
      }
    });
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
}