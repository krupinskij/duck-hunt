import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss'],
    animations: [ trigger('show', [ 
      state('void', style({ opacity: 0 })),
      transition(`* => *`, animate('1s')),
    ]) ]
})
export default class ScoreComponent {
  @Input() score: number;
}