import { Component, OnInit } from "@angular/core";
import { Subject, fromEvent } from "rxjs";
import { filter } from 'rxjs/operators';
import Level from "../shared/models/level";
import { Message, MessageAction, MessageSender } from "../shared/models/message";
import { Target, TargetState } from "../shared/models/target";
import { getIdFromEvent } from "../utils/events";
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

  communicator = new Subject<Message>();
  clickObserver = fromEvent(document, 'click');

  private _firstDuck: number;

  ngOnInit() {
    this.round = 1;
    this.score = 0;
    this.level = gameConfig.levels[1];
    this.bullets = this.level.bullets;
    this._firstDuck = -this.level.batch;

    this.handleEvents();
    this.handleCommunicator();

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

    if(this._firstDuck >= this.level.all) {
      this.reloadAllDucks();
      this._firstDuck = 0;
      this.round++;
    }

    this.bullets = this.level.bullets;
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

  handleEvents() {
    this.clickObserver.pipe(
      filter(() => this.bullets > 0)
    ).subscribe(clickEvent => {
      this.bullets--;

      const id = getIdFromEvent(clickEvent);
      if(id) {
        this.communicator.next({
          sender: MessageSender.Game,
          payload: { 
            action: MessageAction.KillDuck, 
            state: [ +id ] 
          }
        })
      }

      if(this.bullets === 0) {
        this.communicator.next({
          sender: MessageSender.Game,
          payload: { 
            action: MessageAction.NoBullets, 
            state: this.batchDucks.map(duck => duck.id)
          }
        })
      }
     })
  }

  handleCommunicator() {
    let counter = 0;
    this.communicator.pipe(
      filter(message => message.sender === MessageSender.Duck)
    ).subscribe(({ payload: { action, state }}) => {
      switch(action) {
        case MessageAction.RemoveDuck:
          this.removeDuck(state);
          counter++;
          if(counter === this.level.batch) {
            counter = 0;
            this.reloadBatchDucks();
          }
          break;
        case MessageAction.KillDuck:
          this.killDuck(state);
          break;
        case MessageAction.LoseDuck:
          this.loseDuck(state);
          break;
      }
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

  loseDuck(id: number) {
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

  removeDuck(id: number) {
    this.batchDucks = this.batchDucks.filter(duck => duck.id !== id);
  }
}