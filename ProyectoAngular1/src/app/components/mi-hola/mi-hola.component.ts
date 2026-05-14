import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mi-hola',
    templateUrl: './mi-hola.component.html',
    styleUrls: ['./mi-hola.component.css'],
    standalone: false
})
export class MiHolaComponent implements OnInit {
  setNombre: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  evaluar(): void {
    console.log('Nombre ingresado:', this.setNombre);
  }

}
