import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { TestModule } from './test/test.module';
import { Test2Module } from './test2/test2.module';
import { Test3Module } from './test3/test3.module';
import { Test4Module } from './test4/test4.module';
import { Test5Module } from './test5/test5.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule,
    HeroesModule,
    TestModule,
    Test2Module,
    Test3Module,
    Test4Module,
    Test5Module,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
