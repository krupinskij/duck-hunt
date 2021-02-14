import { Component, Input } from "@angular/core";

@Component({
    selector: 'score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss']
})
export default class ScoreComponent {
  @Input() score: number;
}