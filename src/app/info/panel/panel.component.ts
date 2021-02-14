import { Component, Input } from "@angular/core";
import Level from "src/app/shared/models/level";
import { Target } from "src/app/shared/models/target";

@Component({
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss']
})
export default class PanelComponent {
    @Input() round: number;
    @Input() level: Level;
    @Input() ducks: Target[];
}