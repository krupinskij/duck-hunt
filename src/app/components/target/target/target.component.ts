import { Component, Input, OnInit } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";

import Image from "src/app/shared/models/image";
import Point from "src/app/shared/models/point";

import { TargetState } from "./target.state";
import gameConfig from "../../game/game.config"
import { Subject } from "rxjs";
import { Message } from "src/app/shared/models/message";

@Component({
  template: '',
  animations: [
    trigger('changeImage', [
      state(TargetState.State1, style({
        backgroundImage: '{{ src1 }}'
      }), { params: { src1: '#', src2: '#'} }),
      state(TargetState.State2, style({
        backgroundImage: '{{ src2 }}'
      }), { params: { src1: '#', src2: '#'} }),
      transition('* => *', animate('0.1s'))
    ])
  ]
})
export default abstract class TargetComponent implements OnInit {

  targetState = TargetState.State1;

  prevPoint: Point;
  nextPoint: Point;

  time: number;
  image: Image = { src1: "", src2: ""};

  @Input() id: number;
  @Input() messanger: Subject<Message>;

  private _gh = gameConfig.height;
  private _gw = gameConfig.width - 12;

  ngOnInit() {
    this.time = 0;
  }

  getTargetState(): void {
    switch(this.targetState) {
      case TargetState.State1:
        this.setTargetState(TargetState.State2);
        break;
      case TargetState.State2:
        this.setTargetState(TargetState.State1);
        break;
    }
  }

  setTargetState(state: TargetState): void {
    this.targetState = state;
  }
    
  calculateBasePosition(currPoint?: Point): [Point, Point] {
    const nextPoint = {
      X: Math.random() * this._gw,
      Y: Math.random() > 0.5 ? 0 : this._gh
    }

    return [nextPoint, currPoint];
  }

  calculateWallPosition(currPoint?: Point): [Point, Point] {
    const nextPoint = {
      X: Math.random() > 0.5 ? 0 : this._gw,
      Y: Math.random() * this._gh
    }

    return [nextPoint, currPoint];
  }

  calculateTime(speed: number): number {
    return Math.random() * 100 / speed + 0.5;
  }
}