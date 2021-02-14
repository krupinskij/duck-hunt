import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { filter } from 'rxjs/operators';
import Level from "../shared/models/level";
import { Message, MessageContent, MessageSender } from "../shared/models/message";
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
  score: number;
  bullets: number;
  level: Level;
  allDucks: Target[] = [];
  batchDucks: Target[] = [];
  targetSubject = new Subject<Message>();

  private _firstDuck: number;

  ngOnInit() {
    this.round = 1;
    this.score = 0;
    this.level = gameConfig.levels[1];
    this.bullets = this.level.bullets;
    this._firstDuck = -this.level.batch;

    this.handleGame();

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

  handleGame() {
    this.targetSubject.pipe(
      filter(message => message.sender === MessageSender.Duck)
    ).subscribe(message => {
      switch(message.content) {
        case MessageContent.DeleteMe:
          this.removeDuck(message.id);
          break;
        case MessageContent.KillMe:
          this.killDuck(message.id);
          break;
        case MessageContent.LoseMe:
          this.loseDuck(message.id);
          break;
      }
    })
  }

  killDuck(id: number) {
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

  loseDuck(id: number) {
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

  removeDuck(id: number) {
    this.batchDucks = this.batchDucks.filter(duck => duck.id !== id);
  }

}