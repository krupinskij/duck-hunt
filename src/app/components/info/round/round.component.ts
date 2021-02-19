import { Component, Input } from "@angular/core";

@Component({
    selector: 'round',
    templateUrl: './round.component.html',
    styleUrls: ['./round.component.scss']
})
export default class RoundComponent {
  @Input() round: number;
}