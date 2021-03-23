import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'round',
    templateUrl: './round.component.html',
    styleUrls: ['./round.component.scss'],
    animations: [ trigger('show', [ 
      state('void', style({ opacity: 0 })),
      transition(`* => *`, animate('1s')),
    ]) ]
})
export default class RoundComponent {
  @Input() round: number;
}