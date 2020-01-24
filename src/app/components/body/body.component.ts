import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  mostrar=true;

  frase: any = {
    mensaje: 'La felicidad humana generalmente no se logra con grandes golpes de suerte, que pueden ocurrir pocas veces, sino con pequeñas cosas que ocurren todos los días',
    autor: 'Benjamin Franklin'
  }

  personajes: string[] = ['Iroman', 'Capitan América', 'Venom']
}