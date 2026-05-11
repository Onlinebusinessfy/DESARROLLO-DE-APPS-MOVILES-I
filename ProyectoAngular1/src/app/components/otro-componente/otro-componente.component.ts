import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-otro-componente',
    templateUrl: './otro-componente.component.html',
    styleUrls: ['./otro-componente.component.css'],
    standalone: false
})
export class OtroComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
