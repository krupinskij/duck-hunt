import { Component, OnInit } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";

import Point from "src/app/shared/models/point";
import Image from "src/app/shared/models/image";

import TargetComponent from "../target/target.component";
import { Message, MessageAction } from "../../../shared/models/message";
import DogState from "./dog.state";
import DogConfig from "./dog.config";
import { fromEvent } from "rxjs";

@Component({
  selector: 'dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
  animations: [
    trigger('moveDog', [
      state('*', style({
          transform: 'translateX({{ X }}vw) translateY({{ Y }}vh)',
      }), { params: { X: 0, Y: 0}}),
      transition("* => *", animate('{{ time }}s'), { params: { time: 1}})
    ])
  ]
})
export default class DogComponent extends TargetComponent implements OnInit  {

  dogState = DogState.Default;
  config = DogConfig;

  private _front = true;

  ngOnInit() {
    super.ngOnInit();
    this.nextPoint = { X: 0, Y: 60 };

    this.communicator.handleMessanger(this._messangerHandler.bind(this));
  }

  getDogState(param: any) {
    switch(this.dogState) {
      case DogState.Default:
        this.setDogState(DogState.Walk)
        break;
      case DogState.Walk:
        this.setDogState(DogState.Found)
        break;
      case DogState.Found:
        this.setDogState(DogState.JumpUp)
        break;
      case DogState.JumpUp:
        this.setDogState(DogState.JumpDown)
        break;

      case DogState.DuckUp:
        this.setDogState(DogState.DuckDown);
        break;
      case DogState.DucksUp:
        this.setDogState(DogState.DucksDown);
        break;
      case DogState.LaughUp:
        this.setDogState(DogState.LaughDown);
        break;
      case DogState.ShotUp:
        this.setDogState(DogState.ShotDown);
        break;

      case DogState.JumpDown:
      case DogState.DuckDown:
      case DogState.DucksDown:
      case DogState.LaughDown:
      case DogState.ShotDown:
        this.communicator.reload();
        break;
    }
  }

  setDogState(state: DogState) {
      switch(state) {
        case DogState.Walk:
          this.dogState = state;
          [this.nextPoint, this.prevPoint] = [{ X: 29.9, Y: 60 }, this.nextPoint];
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
          this.time = 3;
          break;
        case DogState.Found:
          this.dogState = state;
          [this.nextPoint, this.prevPoint] = [{ X: 30, Y: 60 }, this.nextPoint];
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
          this.time = 0.5;
          break;

        case DogState.JumpUp:
          this.dogState = state;
          [this.nextPoint, this.prevPoint] = [{ X: 30, Y: 35 }, this.nextPoint];
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
          this.time = 1;
          break;
        case DogState.JumpDown:
          this.dogState = state;
          [this.nextPoint, this.prevPoint] = [{ X: 30, Y: 80 }, this.nextPoint];
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
          this.time = 1;
          this._front = false;
          break;

        case DogState.DuckUp:
        case DogState.DucksUp:
        case DogState.LaughUp:
        case DogState.ShotUp:
          this.dogState = state;
          [this.nextPoint, this.prevPoint] = [{ X: 30, Y: 40 }, this.nextPoint];
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
          this.time = 2;
          break;
        case DogState.DuckDown:
        case DogState.DucksDown:
        case DogState.LaughDown:
        case DogState.ShotDown:
          this.dogState = state;
          [this.nextPoint, this.prevPoint] = [{ X: 30, Y: 80 }, this.nextPoint];
          this.image = this.setImage(this.prevPoint, this.nextPoint, state);
          this.time = 2;
          break;
      }
  }

  setImage(prevPoint: Point, nextPoint: Point, state: DogState): Image {

    let image: Image;

    switch(state) {
      case DogState.Walk:
        image = { src1: "dog_walk_1.svg", src2: "dog_walk_2.svg" };
        break;
      case DogState.Found:
          image = { src1: "dog_found.svg", src2: "dog_found.svg" };
          break;
      case DogState.JumpUp:
      case DogState.JumpDown:
        image = { src1: "dog_jump.svg", src2: "dog_jump.svg" };
        break;
      case DogState.DuckUp:
      case DogState.DuckDown:
        image = { src1: "dog_duck.svg", src2: "dog_duck.svg" };
        break;
      case DogState.DucksUp:
      case DogState.DucksDown:
        image = { src1: "dog_ducks.svg", src2: "dog_ducks.svg" };
        break;
      case DogState.LaughUp:
      case DogState.LaughDown:
        image = { src1: "dog_laugh_1.svg", src2: "dog_laugh_2.svg" };
        break;
      case DogState.ShotUp:
      case DogState.ShotDown:
        image = { src1: "dog_shot.svg", src2: "dog_shot.svg" };
        break;
    }
    
    return { 
      src1: `url(assets/dog/${image.src1})`,
      src2: `url(assets/dog/${image.src2})`
    }
  }

  private _messangerHandler({ payload: { action }}: Message) {
    switch(action) {
      case MessageAction.GetDuck:
        this.setDogState(DogState.DuckUp);
        break;
      case MessageAction.KillDuck:
        this.setDogState(DogState.ShotUp);
        break;
    }
  }

  get dogClasses(): {} {
    return {
      dog: true,
      'dog-front': this._front,
      'dog-back': !this._front
    }
  }
}