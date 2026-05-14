import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  standalone: false
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  miTarjeta1 = {
    "titulo": "Tarjeta de Producto 1",
    "contenido": "Este es el contenido de prueba 1",
    "boton": "Aceptar Obj1"
  };

  miTarjeta2 = {
    "titulo": "Tarjeta de Producto 2",
    "contenido": "Este es el contenido de prueba 2",
    "boton": "Aceptar Obj2"
  };

  onMyVarOutput(event: number) {
    console.log("Valor recibido:", event);
  }

  eventoRecibido(event: number) {
    console.log(`El valor recibido del evento es: ${event}`);
  }
}