import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import DuckComponent from "./duck/duck.component";

@NgModule({
  declarations: [
    DuckComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    DuckComponent
  ]
})
export default class TargetModule { }