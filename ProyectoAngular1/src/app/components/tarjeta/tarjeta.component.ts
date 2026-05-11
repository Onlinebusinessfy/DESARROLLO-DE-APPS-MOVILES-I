import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-tarjeta',
    templateUrl: './tarjeta.component.html',
    styleUrls: ['./tarjeta.component.css'],
    standalone: false
})
export class TarjetaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  titulo = "Tarjeta de Producto";
  @Input()
  contenido = "Este es el contenido de prueba";
  @Input()
  boton = "Este btn prueba";
}

