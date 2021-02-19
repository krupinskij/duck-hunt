import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import InfoModule from "../info/info.module";
import ObjectModule from "../target/target.module";

import GameComponent from "./game.component";

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    BrowserModule,
    InfoModule,
    ObjectModule
  ],
  exports: [
    GameComponent
  ]
})
export default class GameModule { }