import { Component } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";

import Image from "src/app/shared/models/image";
import Point from "src/app/shared/models/point";

import FlyingTargetState from "./flying-target.state";

@Component({
  template: '',
  animations: [
    trigger('changeImage', [
      state(FlyingTargetState.State1, style({
        backgroundImage: '{{ src1 }}'
      }), { params: { src1: '#', src2: '#'} }),
      state(FlyingTargetState.State2, style({
        backgroundImage: '{{ src2 }}'
      }), { params: { src1: '#', src2: '#'} }),
      transition('* => *', animate('0.1s'))
    ])
  ]
})
export default abstract class FlyingTargetComponent {

  flyingTargetState = FlyingTargetState.State1;

  prevPoint: Point;
  nextPoint: Point;

  time: number;
  image: Image = { src1: "", src2: ""};

  private _gh = 85;
  private _gw = 88;

  getFlyingTargetState(): void {
    switch(this.flyingTargetState) {
      case FlyingTargetState.State1:
        this.setFlyingTargetState(FlyingTargetState.State2);
        break;
      case FlyingTargetState.State2:
        this.setFlyingTargetState(FlyingTargetState.State1);
        break;
    }
  }

  setFlyingTargetState(state: FlyingTargetState): void {
    this.flyingTargetState = state;
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