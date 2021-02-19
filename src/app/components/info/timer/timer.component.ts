import { Component, Input } from "@angular/core";

@Component({
    selector: 'timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export default class TimerComponent {
  @Input() timer: number;
}