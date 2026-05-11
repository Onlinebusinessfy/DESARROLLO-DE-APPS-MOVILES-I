import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProyectoAngular1';

  setNombre = '';
  evaluar(){
    this.setNombre = 'Hola Mundo';
    console.log("E nombre esL " + this.setNombre);
    console.log("El nombre es: ".concat(this.setNombre));
    console.log("El nombre es: " + `${this.setNombre}`);
  }
}
