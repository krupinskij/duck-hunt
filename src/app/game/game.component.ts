import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import Level from "../shared/models/level";
import { Target, TargetState } from "../shared/models/target";
import gameConfig from "./game.config";

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export default class GameComponent implements OnInit {

  gameConfig = gameConfig;

  round: number;
  level: Level;
  allDucks: Target[] = [];
  batchDucks: Target[] = [];
  duckSubject = new Subject();

  private _firstDuck: number;

  ngOnInit() {
    this.round = 1;
    this.level = gameConfig.levels[1];
    this._firstDuck = -this.level.batch;
    
    this.reloadAllDucks();
    this.reloadBatchDucks();
  }

  reloadAllDucks() {
    this.allDucks = Array(this.level.all).fill(0).map((_, id) => {
      return {
        id: id,
        state: TargetState.Default
      }
    })
  }

  reloadBatchDucks() {
    this._firstDuck += this.level.batch;
    this.batchDucks = this.allDucks.slice(this._firstDuck, this._firstDuck + this.level.batch);
    this.allDucks = this.allDucks
        .map((duck, id) => {
          if(id >= this._firstDuck && id < this._firstDuck + this.level.batch) {
            return {
              ...duck,
              state: TargetState.Active
            }
          }
          
          return duck;
        })
  }

  killDuck(id: number) {
    this.allDucks[id].state = TargetState.Killed;
  }

  loseDuck(id: number) {
    this.allDucks[id].state = TargetState.Default;
  }

  removeDuck(id: number) {
    this.batchDucks = this.batchDucks.filter(duck => duck.id !== id);
  }

}