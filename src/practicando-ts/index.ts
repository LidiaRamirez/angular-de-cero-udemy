let nombre:string = 'Lid';
let nombre2:string = 'maria'

let apellido:string = 'ramirez'
let apellido2:string = 'navarro'

console.log(`${nombre} ${apellido} ${apellido2}`)

let edad:number = 30;
let celphone: number = 98567322
let countMascotas: number = 98567322

let tienesMascotas: boolean = true
let tienesCarro: boolean = false

let fechaNacimiento:Date = new Date('1990-03-23');

let persona = {
  nombres: 'Lidia',
  edad: 30
}

persona = {
  nombres: 'Maria',
  edad: 24,
}

console.log(fechaNacimiento)

// Función con parametro obligatorio

function obligatorio(nombre:string) {
  let mensaje:string;
  mensaje = `Tu nombre es ${nombre}`;
  console.log(mensaje)
}

// Función con parametro por defecto

function porDefault(nombre:string = 'Estudiante') {
  let mensaje:string = `Tu nombre es ${nombre}`
  console.log(mensaje);
}

// Función con parametro no obligatorio

function noObligatorio(nombre?:string) {
  let mensaje:string;
  nombre ? mensaje =  `Bienvenido ${nombre}`: mensaje = 'Bienvenido';
  console.log(mensaje);
}

obligatorio('Lid');
porDefault();
noObligatorio();
noObligatorio('Juan');

let suma = (a:number, b:number) => a+b;
console.log(suma(2, 3));

// Ventajas de arrow function que function normal con setTimeout

let nombrePersonaje:string = "Juan";

let hulk = {
  nombrePersonaje: 'Hulk',
  smash() {
    setTimeout(function(){
      console.log(this.nombrePersonaje+" smash!")
    }, 1500);
  }
}

let hulk2 = {
  nombrePersonaje: 'Hulk',
  smash() {
    setTimeout(()=> console.log(this.nombrePersonaje+" smash!"), 1500);
  }
}

hulk.smash();
hulk2.smash();

// Destructuración de Objetos y Arreglos

let avenger = {
  nombreReal: 'Steve',
  clave: 'Capitan America'
}

// let { variables-no-ordenadas } = objeto 
let { nombreReal, clave } = avenger

console.log(`${nombreReal} es ${clave}`)

let arrayAvengers:string[] = ['Thor','Tony'];

// let [ variables-ordenadas ] = array

let [thor, iroman] = arrayAvengers;

console.log(thor, iroman)

// Promesas ES6

let promesa = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('Promesa terminada');
    resolve();
  }, 1500)
})

promesa.then(function() {
  console.log('Ejecutar cuando termine bien')
})

// INTERFACES: Sirven para definir ciertas características para objetos 

interface Usuario {
  dni: number,
  nombres: string
}

let cajero: Usuario = {
  dni: 7456123,
  nombres: 'Juan Pepito'
}

function agregarCajero(usuario: Usuario) {
  console.log('*Agregando Cajero '+usuario.nombres);
}

agregarCajero(cajero);

// Clase básica TS 

class Avengery {
  nombre:string = 'sin nombre';
  equipo:string = 'undefined';
  nombreReal:string = 'undefined';
  
  constructor(nombre:string, equipo:string, nombreReal:string) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal
  }
}

let antman:Avengery = new Avengery( 'Antman', 'cap', 'Sott Lang');
console.log(antman)

// Recordar que las siguientes dos clases son lo mismo

class Villano {
  public nombrecito: string;
  constructor(nombrecito:string) {
    this.nombrecito = nombrecito
  }
}

class Villano2 {
  constructor(public nombrecito:string) {}
}

//Decorador es una función cualquiera

function consola(constructor:Function) {
  console.log(constructor)
}

@consola
class Villano3 {
  constructor(public nombrecito:string) {}
}
