import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output()
  myVarOutput = new EventEmitter<number>();

  contador: number = 0;

  seleccionarTarjeta() {
    this.contador += 1;

    console.log("El contador en el hijo es:", this.contador);

    this.myVarOutput.emit(this.contador);
  }
}