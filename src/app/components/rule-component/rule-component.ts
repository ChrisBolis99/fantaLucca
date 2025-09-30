import { Component, computed, input, Signal } from '@angular/core';
import { Rule } from '../../models/rule';

@Component({
  selector: 'app-rule-component',
  imports: [],
  templateUrl: './rule-component.html',
  styleUrl: './rule-component.scss'
})
export class RuleComponent {
  rule = input.required<Rule>();

  isPositive : Signal<boolean> = computed(() => this.rule().points > 0);
  sign : Signal<'+' | ''> = computed(() => (this.rule().points > 0 ? '+' : ''));
}
