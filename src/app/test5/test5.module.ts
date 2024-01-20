import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test5Component } from './test5.component';
import { SubtestfiveComponent } from './subtestfive/subtestfive.component';



@NgModule({
  declarations: [Test5Component, SubtestfiveComponent],
  imports: [
    CommonModule
  ],
  exports: [Test5Component, SubtestfiveComponent]
})
export class Test5Module { }
