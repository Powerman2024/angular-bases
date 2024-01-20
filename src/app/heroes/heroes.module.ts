import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroesHeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({

  exports: [
    HeroesHeroComponent,
    ListComponent
  ],

  declarations: [
    HeroesHeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
