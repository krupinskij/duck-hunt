import { Component, Input } from "@angular/core";

import { Target, TargetState } from "src/app/shared/models/target";

@Component({
    selector: 'hit',
    templateUrl: './hit.component.html',
    styleUrls: ['./hit.component.scss']
})
export default class HitComponent {
  @Input() ducks: Target[];

  class(target: Target) {
    return {
      hit: true,
      active: target.state === TargetState.Active
    }
  }

  src(target: Target): string {
    let fileName: string;

    if(target.state === TargetState.Killed) {
      fileName = "red-hit";
    } 
    else {
      fileName = "white-hit";
    }

    return `../../../assets/info/${fileName}.svg`
  }
}