import { Component, computed, inject, input, Signal } from '@angular/core';
import { ScoresService } from '../../services/scores-service';
import { ScoresGroup } from '../../enum/scores-group';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Rule } from '../../models/rule';
import { ScoringEventComponent } from "../scoring-event-component/scoring-event-component";
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-scoreset-display-component',
  imports: [ScoringEventComponent],
  templateUrl: './scoreset-display-component.html',
  styleUrl: './scoreset-display-component.scss'
})
export class ScoreSetDisplayComponent {
  private readonly scoresService = inject(ScoresService);

  kind = input<ScoresGroup>(ScoresGroup.Captain);

  rules: Signal<Rule[]> = toSignal(
    toObservable(this.kind).pipe(
      switchMap(kind => this.scoresService.getScores(kind))
    ),
    { initialValue: [] }
  );

  bonusRules = computed(() => this.rules().filter(r => r.points > 0));
  malusRules = computed(() => this.rules().filter(r => r.points < 0));

  trackByText = (_: number, r: Rule) => r.text;
  protected readonly RulesKind = ScoresGroup;
}
