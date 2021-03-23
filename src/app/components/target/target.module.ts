import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import DogComponent from "./dog/dog.component";

import DuckComponent from "./duck/duck.component";

@NgModule({
  declarations: [
    DuckComponent,
    DogComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    DuckComponent,
    DogComponent
  ]
})
export default class TargetModule { }