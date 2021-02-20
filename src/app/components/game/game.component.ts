import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { GameStore } from "src/app/utils/store";
import Level from "../../shared/models/level";
import { Message, MessageAction } from "../../shared/models/message";
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

  level: Level;
  store: GameStore;
  communicator: GameCommunicator;
  timerClock: TimerClock; 
  gun: Gun;

  ngOnInit() {
    this.level = gameConfig.levels[1];

    this.store = new GameStore(this.level);

    this.communicator = new GameCommunicator(new Subject<Message>());
    this.communicator.handleMessanger(this._messangerHandler.bind(this));

    this.timerClock = new TimerClock(1000, this.level.timeout);

    this.gun = new Gun(this.level.bullets);
    this.gun.handleGun(
      id => this.communicator.killDuck([ id ]),
      () => this.communicator.loseDuck(this.store.currentBatch)
    )
  }

  getNewBatch() {
    this.store.resetBatch();
    this.gun.resetBullets(this.level.bullets);
    this.timerClock.resetTimerClock(
      () => this.communicator.loseDuck(this.store.currentBatch),
      timer => timer !== this.level.timeout && this.store.playing
    )
  }

  private _messangerHandler({ payload: { action, state }}: Message) {
    switch(action) {
      case MessageAction.RemoveDuck:
        this.store.removeDuck(state);
        this.communicator.getDuck();
        break;
      case MessageAction.KillDuck:
        this.store.killDuck(state);
        break;
      case MessageAction.LoseDuck:
        this.store.loseDuck(state);
        break;
      case MessageAction.Reload:
        if(this.store.shouldReloadBatch) {
          this.getNewBatch();
        }
        break;
    }
  }

  get gameClasses(): {} {
    return {
      game: true,
      'game-lose': this.store.losing,
      'game-play': !this.store.losing
    }
  }
}