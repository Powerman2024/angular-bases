import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //forma en la que viene por defecto
  //title = 'bases';

  public title: string = 'Mi primera App de Angular';
  // public contador: number = 10;


  // //Funcion para incrementar la funcion de incremento
  // // incremento(): void {
  // //   this.contador += 1;
  // // }

  // incremento(value: number): void {

  //   this.contador += value;

  // }

  // resetContador(): void {

  //   this.contador = 10;

  // }


}
