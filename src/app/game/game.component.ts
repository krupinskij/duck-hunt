import { Component, OnInit } from "@angular/core";
import Level from "../shared/models/level";
import gameConfig from "./game.config";

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameConfig = gameConfig;

  ducks = [];

  ngOnInit() {
    const currentLevel = { ...gameConfig.levels[0] };

    this.ducks = Array(currentLevel.targets.ducks).fill(0).map((_, id) => { return {id} });
  }

  removeDuck(id: number) {
    this.ducks = this.ducks.filter(duck => duck.id !== id);
  }

}