import { Component } from '@angular/core';

@Component({
  selector: 'app-laser',
  template: `
  <h3>Contador = {{ contador }}</h3>


<button (click)="incremento(1)">+1</button>
<button (click)="resetContador()">Reset</button>
<button (click)="incremento(-1)">-1</button>

`
  ,
})



export class LaserComponent {

  public contador: number = 10;

  incremento(value: number): void {

    this.contador += value;

  }

  resetContador(): void {

    this.contador = 10;

  }


}
