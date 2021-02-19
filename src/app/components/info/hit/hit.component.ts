import { Component, Input, OnChanges, OnInit } from "@angular/core";

import { Target, TargetState } from "src/app/shared/models/target";

@Component({
    selector: 'hit',
    templateUrl: './hit.component.html',
    styleUrls: ['./hit.component.scss']
})
export default class HitComponent implements OnChanges {
  @Input() ducks: Target[];
  classes = [];
  srcs = [];

  ngOnChanges() {
    this.classes = this.ducks.map(duck => this.class(duck));
    this.srcs = this.ducks.map(duck => this.src(duck));
  }

  class(target: Target): {} {
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