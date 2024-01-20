import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { SubtestComponent } from './subtest/subtest.component';
import { Subtest1Component } from './subtest1/subtest1.component';
import { Subtest2Component } from './subtest2/subtest2.component';



@NgModule({
  declarations: [TestComponent, SubtestComponent, Subtest1Component, Subtest2Component],
  imports: [
    CommonModule
  ],
  exports: [TestComponent, SubtestComponent, Subtest1Component, Subtest2Component]
})
export class TestModule { }
