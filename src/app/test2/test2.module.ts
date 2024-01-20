import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Test2Component } from "./test2.component";
import { Subtest2Component } from './subtest2/subtest2.component';


@NgModule({
  declarations: [Test2Component, Subtest2Component],
  imports: [
    CommonModule
  ],
  exports: [Test2Component, Subtest2Component],
})
export class Test2Module { }
