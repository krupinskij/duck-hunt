import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    animations: [ trigger('level', [ 
      state('0,1,2', style({ opacity: 0 })),
      transition(`* => *`, animate('1s')),
    ]) ]
})
export default class MenuComponent {

  level: number;
  @Output() selected = new EventEmitter<number>();

  setLevel(l: number) {
    this.level = l;
  }

  emitLevel() {
    this.selected.emit(this.level);
  }
}