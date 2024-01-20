import { Component } from "@angular/core";

@Component({

  selector: 'app-henry',
  template: `
      <h1>Formulario de registro</h1>

<form action=" " method="post">
    <input type="varchar" name="nombre" placeholder="Nombre"><br>
    <input type="varchar" name="apellido" placeholder="Apellido"><br>
    <input type="int" name="cedula" placeholder="Cédula"><br>
    <input type="varchar" name="direccion" placeholder="Dirección"><br>
    <input type="int" name="telefono" placeholder="Teléfono"><br>
    <input type="email" name="email" placeholder="Email"><br>
    <input type="submit" value="Enviar">
</form>
  ` ,

})

export class HenryComponent {


}
