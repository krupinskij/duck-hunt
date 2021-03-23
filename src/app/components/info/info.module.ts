import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import HitComponent from './hit/hit.component';
import MenuComponent from './menu/menu.component';
import PanelComponent from './panel/panel.component';
import RoundComponent from './round/round.component';
import ScoreComponent from './score/score.component';
import ShotsComponent from './shots/shots.component';
import TimerComponent from './timer/timer.component';

import PadPipe from '../../shared/pipes/pad.pipe';

@NgModule({
  declarations: [
    HitComponent,
    MenuComponent,
    PanelComponent,
    RoundComponent,
    ScoreComponent,
    ShotsComponent,
    TimerComponent,
    PadPipe
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MenuComponent,
    PanelComponent
  ]
})
export default class InfoModule { }
