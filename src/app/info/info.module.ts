import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import HitComponent from './hit/hit.component';
import PanelComponent from './panel/panel.component';
import RoundComponent from './round/round.component';
import ScoreComponent from './score/score.component';
import ShotsComponent from './shots/shots.component';

import PadPipe from '../shared/pipes/pad.pipe';

@NgModule({
  declarations: [
    HitComponent,
    PanelComponent,
    RoundComponent,
    ScoreComponent,
    ShotsComponent,
    PadPipe
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PanelComponent
  ]
})
export default class InfoModule { }