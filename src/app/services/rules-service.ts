import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { forkJoin, map, Observable } from 'rxjs';
import { Rule } from '../models/rule';
import { RulesKind } from '../enum/rules-kind';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly captainRulesURL: string = environment.captainRulesURL;
  private readonly teamRulesURL: string = environment.teamRulesURL;

  getRules(kind: RulesKind): Observable<Rule[]> {
    let url : string;

    switch (kind) {
      case RulesKind.Captain:
        url = environment.captainRulesURL;
        break;

      case RulesKind.Team:
        url = environment.teamRulesURL;
        break;

      default: 
        throw new Error(`Unsupported rules kind: ${kind}`);
    }

    return this.http.get<Omit<Rule, 'type'>[]>(url).pipe(
      map(rules => rules.map(r => ({ ...r, type: kind })))
    );
  }
}
