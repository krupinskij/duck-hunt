import { Component, Input } from "@angular/core";
import { Target } from "../../../shared/models/target";

@Component({
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss']
})
export default class PanelComponent {
    @Input() bullets: number;
    @Input() ducks: Target[];
    @Input() score: number;
    @Input() round: number;
    @Input() timer: number;
}