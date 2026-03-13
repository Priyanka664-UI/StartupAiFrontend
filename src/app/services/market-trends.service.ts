import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface TrendingIndustry {
  industryName: string;
  trendScore: number;
  growthPercentage: number;
  strongestRegion: string;
  opportunityScore: number;
}

export interface StartupOpportunity {
  title: string;
  problemStatement: string;
  solution: string;
  opportunityScore: number;
  industry: string;
}

export interface MarketNews {
  title: string;
  summary: string;
  source: string;
  publishedDate: string;
  url: string;
}

export interface CompetitorInfo {
  startupName: string;
  industry: string;
  description: string;
  websiteUrl: string;
  fundingStage: string;
}

export interface TechnologyTrend {
  technologyName: string;
  programmingLanguage: string;
  stars: number;
  description: string;
  repositoryUrl: string;
}

export interface MarketInsightSummary {
  marketGrowth: string;
  investmentTrends: string;
  emergingOpportunities: string;
  keyInsights: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MarketTrendsService {
  private apiUrl = `${environment.apiUrl}/api/market-trends`;

  constructor(private http: HttpClient) {}

  getTrendingIndustries(): Observable<TrendingIndustry[]> {
    return this.http.get<TrendingIndustry[]>(`${this.apiUrl}/industries`);
  }

  getStartupOpportunities(): Observable<StartupOpportunity[]> {
    return this.http.get<StartupOpportunity[]>(`${this.apiUrl}/startup-opportunities`);
  }

  getMarketNews(): Observable<{news: MarketNews[], insights: MarketInsightSummary}> {
    return this.http.get<{news: MarketNews[], insights: MarketInsightSummary}>(`${this.apiUrl}/news`);
  }

  getCompetitors(industry: string = 'AI'): Observable<CompetitorInfo[]> {
    return this.http.get<CompetitorInfo[]>(`${this.apiUrl}/competitors?industry=${industry}`);
  }

  getTrendingTechnologies(): Observable<TechnologyTrend[]> {
    return this.http.get<TechnologyTrend[]>(`${this.apiUrl}/tech`);
  }

  getOpportunityScoreDashboard(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/opportunities`);
  }

  getComprehensiveMarketTrends(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/comprehensive`);
  }
}