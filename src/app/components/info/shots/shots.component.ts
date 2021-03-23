import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'shots',
    templateUrl: './shots.component.html',
    styleUrls: ['./shots.component.scss'],
    animations: [ trigger('show', [ 
      state('void', style({ opacity: 0 })),
      transition(`* => *`, animate('1s')),
    ]) ]
})
export default class ShotsComponent {
  @Input() shots: number;

  get bullets(): Array<any> {
    return new Array(this.shots).fill(0);
  }
}