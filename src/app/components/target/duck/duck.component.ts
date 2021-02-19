import { Component, OnInit } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";

import Point from "src/app/shared/models/point";
import Image from "src/app/shared/models/image";

import FlyingTargetComponent from "../flying-target/flying-target.component";
import DuckConfig from "./duck.config";
import DuckState from "./duck.state";
import { Message, MessageAction } from "../../../shared/models/message";

@Component({
  selector: 'duck',
  templateUrl: './duck.component.html',
  styleUrls: ['./duck.component.scss'],
  animations: [
    trigger('fly', [
      state('*', style({
          transform: 'translateX({{ X }}vw) translateY({{ Y }}vh)',
      }), { params: { X: 0, Y: 0}}),
      transition(`${DuckState.FlyHorizontally} <=> ${DuckState.FlyVertically}`, animate('{{ time }}s'), { params: { time: '1s'}}),
      transition(`${DuckState.FlyHorizontally} => ${DuckState.Shot}`, animate('{{ time }}s'), { params: { time: '1s'}}),
      transition(`${DuckState.FlyVertically} => ${DuckState.Shot}`, animate('{{ time }}s'), { params: { time: '1s'}}),
      transition(`${DuckState.Shot} => ${DuckState.Fall}`, animate('500s')),
      transition(`${DuckState.Fall} => ${DuckState.Dead}`, animate('2s')),
      transition(`${DuckState.FlyHorizontally} => ${DuckState.Flee}`, animate('5s')),
      transition(`${DuckState.FlyVertically} => ${DuckState.Flee}`, animate('5s')),
    ])
  ]
})
export default class DuckComponent extends FlyingTargetComponent implements OnInit  {

  duckState = DuckState.FlyHorizontally;
  config = DuckConfig;

  ngOnInit() {
    super.ngOnInit();
    [this.nextPoint] = this.calculateWallPosition();
    this.time = this.calculateTime(this.config.speed);

    this.communicator.handleMessanger(this._messangerHandler.bind(this));
  }

  getDuckState(param: any) {
    switch(this.duckState) {
      case DuckState.FlyHorizontally:
        this.setDuckState(DuckState.FlyVertically)
        break;
      case DuckState.FlyVertically:
        this.setDuckState(DuckState.FlyHorizontally);
        break;
      case DuckState.Shot:
        setTimeout(() => this.setDuckState(DuckState.Fall), 1000);
        this.communicator.killMe({ points: this.config.points });
        break;
      case DuckState.Fall:
        setTimeout(() => this.setDuckState(DuckState.Dead));
        break;
      case DuckState.Dead:
        if(DuckState.Dead !== param.toState) break;
        this.communicator.deleteMe({});
        break;
      case DuckState.Flee:
        if(DuckState.Flee !== param.toState) this.communicator.loseMe({});
        else this.communicator.deleteMe({});
        break;
    }
  }

  setDuckState(state: DuckState) {
      switch(state) {
        case DuckState.FlyVertically:
          this.duckState = state;
          [this.nextPoint, this.prevPoint] = this.calculateBasePosition(this.nextPoint);
          this.time = this.calculateTime(this.config.speed);
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
          break;
        case DuckState.FlyHorizontally: 
          this.duckState = state;
          [this.nextPoint, this.prevPoint] = this.calculateWallPosition(this.nextPoint);
          this.time = this.calculateTime(this.config.speed);
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
          break;
        case DuckState.Shot:
          this.duckState = state;
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
          break;
        case DuckState.Fall:
          this.duckState = state;
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
          break;
        case DuckState.Dead:
          this.duckState = state;
          this.nextPoint = { X: 50, Y: 100};
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
          break;
        case DuckState.Flee:
          this.duckState = state;
          this.nextPoint = { X: 50, Y: -50};
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
      }
  }

  setImage(prevPoint: Point, nextPoint: Point, state: DuckState): Image {

    let image: Image;

    switch(state) {
      case DuckState.FlyHorizontally:
      case DuckState.FlyVertically:
      case DuckState.Flee:
        {
          const x = nextPoint.X - prevPoint.X;
          const y = nextPoint.Y - prevPoint.Y;

          const w = x / y;

          if(Math.abs(w) > 4 && x > 0) image = { src1: "duck_fly_e_1.svg", src2: "duck_fly_e_2.svg" };
          else if(Math.abs(w) > 4) image = { src1: "duck_fly_w_1.svg", src2: "duck_fly_w_2.svg" };
          else if(Math.abs(w) < 0.25 && y > 0) image = { src1: "duck_fly_s_1.svg", src2: "duck_fly_s_2.svg" };
          else if(Math.abs(w) < 0.25) image = { src1: "duck_fly_n_1.svg", src2: "duck_fly_n_2.svg" };
          else if(x > 0 && y > 0) image = { src1: "duck_fly_se_1.svg", src2: "duck_fly_se_2.svg" };
          else if(x > 0) image = { src1: "duck_fly_ne_1.svg", src2: "duck_fly_ne_2.svg" };
          else if(y > 0) image = { src1: "duck_fly_sw_1.svg", src2: "duck_fly_sw_2.svg" };
          else image = { src1: "duck_fly_nw_1.svg", src2: "duck_fly_nw_2.svg" };

          break;
        }
      case DuckState.Shot:
        image = { src1: "duck_shot.svg", src2: "duck_shot.svg" };
        break;
      case DuckState.Fall:
      case DuckState.Dead:
        image = { src1: "duck_dead_1.svg", src2: "duck_dead_2.svg" };
    }
    
    return { 
      src1: `url(assets/duck/${image.src1})`,
      src2: `url(assets/duck/${image.src2})`
    }
  }

  private _messangerHandler({ payload: { action }}: Message) {
    if(![DuckState.FlyHorizontally, DuckState.FlyVertically].includes(this.duckState)) return;
    switch(action) {
      case MessageAction.KillDuck:
        this.setDuckState(DuckState.Shot);
        break;
      case MessageAction.LoseDuck:
        this.setDuckState(DuckState.Flee);
        break;
    }
  }

  get pointsVisible(): boolean {
    return this.duckState === DuckState.Shot;
  }
}