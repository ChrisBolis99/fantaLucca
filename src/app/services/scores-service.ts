import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { forkJoin, map, Observable } from 'rxjs';
import { Rule } from '../models/rule';
import { ScoresGroup } from '../enum/scores-group';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {
  private readonly http: HttpClient = inject(HttpClient);

  getScores(kind: ScoresGroup): Observable<Rule[]> {
    let url : string;

    switch (kind) {
      case ScoresGroup.Captain:
        url = environment.captainScoresURL;
        break;

      case ScoresGroup.Team:
        url = environment.teamScoresURL;
        break;

      default: 
        throw new Error(`Unsupported rules kind: ${kind}`);
    }

    return this.http.get<Omit<Rule, 'type'>[]>(url).pipe(
      map(rules => rules.map(r => ({ ...r, type: kind })))
    );
  }
}
