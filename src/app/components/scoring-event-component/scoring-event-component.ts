import { Component, computed, input, Signal } from '@angular/core';
import { Rule } from '../../models/rule';

@Component({
  selector: 'app-scoring-event-component',
  imports: [],
  templateUrl: './scoring-event-component.html',
  styleUrl: './scoring-event-component.scss'
})
export class ScoringEventComponent {
  rule = input.required<Rule>();

  isPositive : Signal<boolean> = computed(() => this.rule().points > 0);
  sign : Signal<'+' | ''> = computed(() => (this.rule().points > 0 ? '+' : ''));
}
