import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroesHeroComponent {

  public name: string = 'superman';
  public age: number = 53;

  get capitalizacionName(): string {

    return this.name.toUpperCase();
  }

  getHeroDescripcion(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'he cambiado por SUPERMAN'
  }

  changeAge(): void {
    this.age = 25;
  }

  resetBoton(): void {
    this.name = 'superman';
    this.age = 53;
  }


}
