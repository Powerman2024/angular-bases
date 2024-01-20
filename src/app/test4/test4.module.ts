import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Test4Component } from "./test4.component";
import { SubtestfourComponent } from './subtestfour/subtestfour.component';

@NgModule({
  declarations: [Test4Component, SubtestfourComponent],
  imports: [CommonModule],
  exports: [Test4Component, SubtestfourComponent],
})
export class Test4Module { }
