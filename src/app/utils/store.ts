import { Observable, of } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import Level from "../shared/models/level";
import { Target, TargetState } from "../shared/models/target";

export class GameStore {
  private _targetSubject: Observable<Target[]>;
  private _firstDuck: number;
  private _killed: number;
  private _losing: boolean;
  private _round: number;
  private _score: number;

  private _currentBatch: number[] = [];

  constructor(private _level: Level) {
    this.resetAll();
    this._firstDuck = -this._level.batch;
    this._round = 1;
    this._score = 0;
  }

  get currentBatch(): number[] {
    return this._currentBatch;
  }

  get allTargets(): Observable<Target[]> {
    return this._targetSubject;
  }

  get round(): number {
    return this._round;
  }

  get score(): number {
    return this._score;
  }

  get shouldReloadBatch() {
    return !this._currentBatch.length;
  }

  get playing(): boolean {
    return this._killed !== this._level.batch;
  }

  get losing() {
    return this._losing;
  }

  resetBatch() {
    this._firstDuck += this._level.batch;
    this._killed = 0;
    this._losing = false;

    if(this._firstDuck >= this._level.all) {
      this.resetAll();
      this._firstDuck = 0;
      this._round++;
    }

    this._currentBatch = [
      ...Array(this._level.all).keys()
    ].filter(num => num >= this._firstDuck && num < this._firstDuck + this._level.batch);

    this.setTargetsState(TargetState.Active, this._currentBatch);
  }

  removeDuck({ id }) {
    this._currentBatch = this._currentBatch.filter(idx => idx !== id);
  }

  killDuck({ id, points }) {
    this._score += points;
    this._killed++;
    this.setTargetsState(TargetState.Killed, [id]);
  }

  loseDuck({ id }) {
    this._losing = true;
    this.setTargetsState(TargetState.Default, [id]);
  }

  private resetAll() {
    const allDucks = [...Array(this._level.all).keys()].map(num => {
      return {
        id: num,
        state: TargetState.Default
      }
    })
    this._targetSubject = of(allDucks);
  }

  private setTargetsState(state: TargetState, batch: number[]) {
    this._targetSubject = this._targetSubject.pipe(
      map(targets => {
        return targets.map(target => {
          if(batch.includes(target.id)) {
            return { ...target, state }
          }

          return target
        })
      })
    )
  }
}