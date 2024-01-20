import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Test3Component } from './test3.component';
import { SubtestthreeComponent } from './subtestthree/subtestthree.component';

@NgModule({
  declarations: [Test3Component, SubtestthreeComponent],
  imports: [CommonModule],
  exports: [Test3Component, SubtestthreeComponent],
})
export class Test3Module { }
