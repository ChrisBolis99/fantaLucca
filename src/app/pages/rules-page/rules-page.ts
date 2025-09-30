import { Component, Signal, signal } from '@angular/core';
import { RulesetDisplayComponent } from "../../components/ruleset-display-component/ruleset-display-component";
import { RulesKind } from '../../enum/rules-kind';

@Component({
  selector: 'app-rules-page',
  imports: [RulesetDisplayComponent],
  templateUrl: './rules-page.html',
  styleUrl: './rules-page.scss'
})
export class RulesPage {
  RulesKind = RulesKind;
}
