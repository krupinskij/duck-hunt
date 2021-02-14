import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import GameModule from './game/game.module';
import InfoModule from './info/info.module';
import ObjectModule from './objects/object.module';

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
    ObjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
