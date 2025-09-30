import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Rule } from '../components/rule/rule';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly captainRulesURL: string = environment.captainRulesURL;
  private readonly teamRulesURL: string = environment.teamRulesURL;

  getCaptainRules() : Observable<Rule[]> {
    return this.http.get<Rule[]>(this.captainRulesURL);
  }

  getTeamRules(): Observable<Rule[]> {
    return this.http.get<Rule[]>(this.teamRulesURL);
  }
}
