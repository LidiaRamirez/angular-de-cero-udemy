import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Una forma
  //anio = new Date().getFullYear();

  // Forma recomendada, inicializada en el constructor
  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }

}
