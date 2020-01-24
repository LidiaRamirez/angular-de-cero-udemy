# Aprendiendo Angular (Udemy)

## Instalar typescript de forma general
~~~
npm install -g typescript
~~~

### Para compilar archivos typescript y que devuelva js
~~~
tsc nombre-archivo 
~~~

### Para compilar de forma activa archivos typescript y que devuelva js
tsc nombre-archivo -w

### Para compilar un proyecto hay que generar un archivo tsconfig.json
~~~
tsc -init
~~~ 
y para compilar el proyecto es `tsc`

### Conceptos Relevantes

#### Módulos
Los módulos sirven para segmentar el código 

#### Directivas estructurales

*ngIf="true" y *ngFor="let valor of valores"

#### Interfaces
Sirven para definir ciertas características para objetos 
~~~
interface Usuario {
  dni: number,
  nombres: string
}

let cajero: Usuario = {
  dni: 7456123,
  nombres: 'Juan Pepito'
}
~~~

#### Decorador
Es una función cualquiera que añade metadatos a una clase 
~~~
function consola(constructor:Function) {
  console.log(constructor)
}

@consola
class Villano3 {
  constructor(public nombrecito:string) {}
}
~~~

## Instalar Angular CLI
~~~
npm install -g @angular/cli
~~~

## Creando entorno local de Angular
~~~
ng new nombreAplicacion
~~~
### Para levantar aplicación
~~~
ng serve
ng serve -p puerto
ng serve -o
~~~

## Conceptos de angular

### Para crear componentes de cero
1. Se debe importar:
` import { Component } from '@angular/core'` 
2. Utilizar decorador Component. Ej:
~~~
@Component({
  selector: 'app-header',
  template: `<h1>Header component</h1>`
})
~~~
3. Para utilizar este componente se debe modificar el `app.module.ts`, lugar para saber que componentes, servicios se tiene. Ej

~~~
@NgModule({
  declarations: //Componentes que se pueden usar
  imports: 
})
~~~

### Para crear componentes automaticamente
Ej:

~~~
ng generate component components/footer
o
ng g c components/footer
~~~

## Para desplegar en producción 
~~~
ng build --prod
~~~
Modificar si es necesario el archivo environment.prod la variable a true

~~~
export const environment = {
  production: true
};
~~~

## Instalar Ionic
~~~
npm install -g ionic
~~~