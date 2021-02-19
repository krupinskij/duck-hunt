import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import GameModule from './components/game/game.module';
import InfoModule from './components/info/info.module';
import TargetModule from './components/target/target.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GameModule,
    InfoModule,
    TargetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
