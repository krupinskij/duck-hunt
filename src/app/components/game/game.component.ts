import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import Level from "../../shared/models/level";
import { Message, MessageAction } from "../../shared/models/message";
import { Target, TargetState } from "../../shared/models/target";
import { GameCommunicator } from "../../utils/game-communicator";
import { Gun } from "../../utils/gun";
import { TimerClock } from "../../utils/timer";
import gameConfig from "./game.config";

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export default class GameComponent implements OnInit {

  gameConfig = gameConfig;

  round = 1;
  score = 0;

  level: Level;
  allDucks: Target[] = [];
  batchDucks: Target[] = [];

  communicator = new GameCommunicator(new Subject<Message>());
  timerClock: TimerClock; 
  gun: Gun;

  private _firstDuck: number;
  private _killedDucks: number;
  private _deletedDucks: number;
  private _playing: boolean;

  ngOnInit() {
    this.level = gameConfig.levels[0];
    this._firstDuck = -this.level.batch;

    this.communicator.handleMessanger(this._messangerHandler.bind(this));

    this.timerClock = new TimerClock(1000, this.level.timeout);
    this.gun = new Gun(this.level.bullets);
    this.gun.handleGun(
      id => this.communicator.killDuck([ id ]),
      () => this.communicator.loseDuck(this.batchDucks.map(duck => duck.id))
    )

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
    this._playing = true;
    this._killedDucks = 0;
    this._deletedDucks = 0;

    this.timerClock.resetTimerClock(
      () => this.communicator.loseDuck(this.batchDucks.map(duck => duck.id)),
      timer => timer !== this.level.timeout && this._playing
    )

    if(this._firstDuck >= this.level.all) {
      this.reloadAllDucks();
      this._firstDuck = 0;
      this.round++;
    }

    this.gun.resetBullets(this.level.bullets);
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

  killDuck({ id, points }) {
    setTimeout(() => { this.score += points });
    this.allDucks = this.allDucks.map((duck, idx) => {
      if(id === idx) {
        return {
          ...duck,
          state: TargetState.Killed
        }
      }

      return duck;
    })
  }

  loseDuck({ id }) {
    this.allDucks = this.allDucks.map((duck, idx) => {
      if(id === idx) {
        return {
          ...duck,
          state: TargetState.Default
        }
      }

      return duck;
    })
  }

  removeDuck({ id }) {
    this.batchDucks = this.batchDucks.filter(duck => duck.id !== id);
  }

  private _messangerHandler({ payload: { action, state }}: Message) {
    switch(action) {
      case MessageAction.RemoveDuck:
        this.removeDuck(state);
        this._deletedDucks++;
        if(this._deletedDucks === this.level.batch) {
          this.reloadBatchDucks();
        }
        break;
      case MessageAction.KillDuck:
        this.killDuck(state);
        this._killedDucks++;
        if(this._killedDucks === this.level.batch) {
          this._playing = false;
        }
        break;
      case MessageAction.LoseDuck:
        this.loseDuck(state);
        break;
    }
  }
}