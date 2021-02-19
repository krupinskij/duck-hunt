import { Observable, interval as ObservableInterval } from "rxjs";
import { takeWhile, finalize } from "rxjs/operators"

export class TimerClock {
  private _timer: number;
  private _observableInterval: Observable<number>
  constructor(private interval: number, private timeout: number) {
    this._timer = timeout;
    this._observableInterval = ObservableInterval(interval)
  }

  get timer(): number {
    return this._timer;
  }

  resetTimerClock(
    final: () => void,
    condition: (t: number) => boolean
  ) {
    this._timer = this.timeout;
    this._observableInterval.pipe(
      takeWhile(condition),
      finalize(final)
    )
    .subscribe(() => this._timer--);
  }
}