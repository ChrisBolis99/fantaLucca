import { Component } from '@angular/core';
import { ScoreSetDisplayComponent } from "../../components/scoreset-display-component/scoreset-display-component";
import { RulesKind } from '../../enum/rules-kind';

@Component({
  selector: 'app-scores-page',
  imports: [ScoreSetDisplayComponent],
  templateUrl: './scores-page.html',
  styleUrl: './scores-page.scss'
})
export class ScoresPage {
  RulesKind = RulesKind;
}
