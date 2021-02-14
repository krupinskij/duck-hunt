import { Component, Input } from "@angular/core";

@Component({
    selector: 'hit',
    templateUrl: './hit.component.html',
    styleUrls: ['./hit.component.scss']
})
export default class HitComponent {
  get hits(): Array<any> {
    return new Array(10);
  }
}