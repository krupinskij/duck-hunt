import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
    animations: [ trigger('show', [ 
      state('void', style({ opacity: 0 })),
      transition(`* => *`, animate('1s')),
    ]) ]
})
export default class TimerComponent {
  @Input() timer: number;
}