import { Component, computed, inject, input, Signal } from '@angular/core';
import { RulesService } from '../../services/rules-service';
import { RulesKind } from '../../enum/rules-kind';
import { toSignal } from '@angular/core/rxjs-interop';
import { Rule } from '../../models/rule';
import { RuleComponent } from "../rule-component/rule-component";

@Component({
  selector: 'app-ruleset-display-component',
  imports: [RuleComponent],
  templateUrl: './ruleset-display-component.html',
  styleUrl: './ruleset-display-component.scss'
})
export class RulesetDisplayComponent {
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
