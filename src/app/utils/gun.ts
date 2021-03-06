import { fromEvent, Observable } from "rxjs"
import { filter } from "rxjs/operators";

export class Gun {
  private clickObserver: Observable<Event>;

  constructor(private _bullets: number) {
    this.clickObserver = fromEvent(document, 'click'); 
  }

  get bullets(): number {
    return this._bullets;
  }

  handleGun(
    onShot: (id: number) => void,
    onNoBullets: () => void
  ) {
    this.clickObserver.pipe(
      filter(() => this.bullets > 0)
    )
    .subscribe(clickEvent => {
      this._bullets--;

      const id = this.getIdFromEvent(clickEvent);
      if(typeof id === "number") {
        onShot(id);
      }

      if(this._bullets <= 0) {
        onNoBullets();
      }

    })
  }

  resetBullets(bullets: number) {
    this._bullets = bullets;
  }

  private getIdFromEvent(event: Event): number {
    const eventTarget = event.target as any;
  
    if(eventTarget.classList.contains('duck') || eventTarget.classList.contains('dog')) {
      return +eventTarget.id;
    }
  }
}