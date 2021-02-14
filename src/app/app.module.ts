import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import HitComponent from './info/hit/hit.component';
import RoundComponent from './info/round/round.component';
import ScoreComponent from './info/score/score.component';
import ShotsComponent from './info/shots/shots.component';
import DuckComponent from './objects/duck/duck.component';
import { PadPipe } from './shared/pipes/pad.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DuckComponent,
    GameComponent,
    HitComponent,
    ScoreComponent,
    RoundComponent,
    ShotsComponent,
    PadPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
