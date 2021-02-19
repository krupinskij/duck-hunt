import { Component, Input } from "@angular/core";

@Component({
    selector: 'shots',
    templateUrl: './shots.component.html',
    styleUrls: ['./shots.component.scss']
})
export default class ShotsComponent {
  @Input() shots: number;

  get bullets(): Array<any> {
    return new Array(this.shots).fill(0);
  }
}