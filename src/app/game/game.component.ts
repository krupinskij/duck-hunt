import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import GameState from "./game.state";

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent {
  gameSubject = new BehaviorSubject(null);

  bulletsNumber = 3;

  objects = [
    {
      type: 'DUCK',
      id: 1
    },
    {
      type: 'DUCK',
      id: 2
    },
    {
      type: 'DUCK',
      id: 3
    }
  ]

  deleteDuck(id: number) {
    this.objects = this.objects.filter(obj => obj.id !== id);
  }

  shoot() {
    this.bulletsNumber--;
    if(this.bulletsNumber >= 0) this.gameSubject.next("Shoot");
    else this.gameSubject.next(GameState.Lose);
    
  }
}