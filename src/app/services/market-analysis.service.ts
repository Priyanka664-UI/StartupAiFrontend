import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketAnalysisService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMarketAnalysis(ideaId: number, industry: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/market-analysis/${ideaId}?industry=${industry}`);
  }

  getCompetitorAnalysis(ideaId: number, ideaTitle: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/competitors/${ideaId}?ideaTitle=${encodeURIComponent(ideaTitle)}`);
  }

  getTrendAnalysis(industry: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/trends/${industry}`);
  }

  getTechStackSuggestions(ideaId: number, ideaTitle: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/tech-stack/${ideaId}?ideaTitle=${encodeURIComponent(ideaTitle)}`);
  }
}