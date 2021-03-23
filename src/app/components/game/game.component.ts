import { Component } from "@angular/core";
import { Subject } from "rxjs";

import { GameStore } from "src/app/store/store";
import { Level} from "../../shared/models/level";
import { Message, MessageAction } from "../../shared/models/message";
import { Gun } from "../../utils/gun";
import { TimerClock } from "../../utils/timer";
import { GameCommunicator } from "./game.communicator";
import gameConfig from "./game.config";
import GameState from "./game.state";

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export default class GameComponent {
  gameConfig = gameConfig;
  gameState: GameState = GameState.Unstarted;

  level: Level;
  store: GameStore;
  communicator: GameCommunicator;
  timerClock: TimerClock; 
  gun: Gun;

  startGame(level: number) {
    if(!Number.isInteger(level)) return;
     
    this.gameState = GameState.Started;
    this.level = gameConfig.levels[level];
    
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
        this.communicator.pickDuck();
        break;
      case MessageAction.ForgetDuck:
        this.store.removeDuck(state);
        this.communicator.laugh();
          break;
      case MessageAction.KillDuck:
        this.store.killDuck(state);
        break;
      case MessageAction.LoseDuck:
        this.store.loseDuck(state);
        this.store.playing = false;
        break;
      case MessageAction.Reload:
        this.gameState = GameState.Active 
        if(this.store.shouldReloadBatch) {
          this.getNewBatch();
        }
        break;
    }
  }

  get gameClasses(): {} {
    return {
      game: true,
      'game-lose': this.store?.losing,
      'game-play': !this.store?.losing
    }
  }

  get isGameUnstarted(): boolean { return this.gameState === GameState.Unstarted }
  get isGameStarted(): boolean { return this.gameState === GameState.Started }
  get isGameActive(): boolean { return this.gameState === GameState.Active }
}