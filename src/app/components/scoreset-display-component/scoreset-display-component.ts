import { Component, computed, inject, input, Signal } from '@angular/core';
import { RulesService } from '../../services/rules-service';
import { RulesKind } from '../../enum/rules-kind';
import { toSignal } from '@angular/core/rxjs-interop';
import { Rule } from '../../models/rule';
import { ScoringEventComponent } from "../scoring-event-component/scoring-event-component";

@Component({
  selector: 'app-scoreset-display-componentt',
  imports: [ScoringEventComponent],
  templateUrl: './scoreset-display-component.html',
  styleUrl: './scoreset-display-component.scss'
})
export class ScoreSetDisplayComponent {
  private readonly rulesService = inject(RulesService);

  kind = input<RulesKind>(RulesKind.Captain);

  rules: Signal<Rule[]> = toSignal(
    this.rulesService.getRules(this.kind()),
    { initialValue: [] }
  );

  bonusRules = computed(() => this.rules().filter(r => r.points > 0));
  malusRules = computed(() => this.rules().filter(r => r.points < 0));

  trackByText = (_: number, r: Rule) => r.text;
  protected readonly RulesKind = RulesKind;
}
