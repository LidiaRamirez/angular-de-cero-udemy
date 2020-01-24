var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var nombre = 'Lid';
var nombre2 = 'maria';
var apellido = 'ramirez';
var apellido2 = 'navarro';
console.log(nombre + " " + apellido + " " + apellido2);
var edad = 30;
var celphone = 98567322;
var countMascotas = 98567322;
var tienesMascotas = true;
var tienesCarro = false;
var fechaNacimiento = new Date('1990-03-23');
var persona = {
    nombres: 'Lidia',
    edad: 30
};
persona = {
    nombres: 'Maria',
    edad: 24
};
console.log(fechaNacimiento);
// Función con parametro obligatorio
function obligatorio(nombre) {
    var mensaje;
    mensaje = "Tu nombre es " + nombre;
    console.log(mensaje);
}
// Función con parametro por defecto
function porDefault(nombre) {
    if (nombre === void 0) { nombre = 'Estudiante'; }
    var mensaje = "Tu nombre es " + nombre;
    console.log(mensaje);
}
// Función con parametro no obligatorio
function noObligatorio(nombre) {
    var mensaje;
    nombre ? mensaje = "Bienvenido " + nombre : mensaje = 'Bienvenido';
    console.log(mensaje);
}
obligatorio('Lid');
porDefault();
noObligatorio();
noObligatorio('Juan');
var suma = function (a, b) { return a + b; };
console.log(suma(2, 3));
// Ventajas de arrow function que function normal con setTimeout
var nombrePersonaje = "Juan";
var hulk = {
    nombrePersonaje: 'Hulk',
    smash: function () {
        setTimeout(function () {
            console.log(this.nombrePersonaje + " smash!");
        }, 1500);
    }
};
var hulk2 = {
    nombrePersonaje: 'Hulk',
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombrePersonaje + " smash!"); }, 1500);
    }
};
hulk.smash();
hulk2.smash();
// Destructuración de Objetos y Arreglos
var avenger = {
    nombreReal: 'Steve',
    clave: 'Capitan America'
};
// let { variables-no-ordenadas } = objeto 
var nombreReal = avenger.nombreReal, clave = avenger.clave;
console.log(nombreReal + " es " + clave);
var arrayAvengers = ['Thor', 'Tony'];
// let [ variables-ordenadas ] = array
var thor = arrayAvengers[0], iroman = arrayAvengers[1];
console.log(thor, iroman);
// Promesas ES6
var promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Promesa terminada');
        resolve();
    }, 1500);
});
promesa.then(function () {
    console.log('Ejecutar cuando termine bien');
});
var cajero = {
    dni: 7456123,
    nombres: 'Juan Pepito'
};
function agregarCajero(usuario) {
    console.log('*Agregando Cajero ' + usuario.nombres);
}
agregarCajero(cajero);
// Clase básica TS 
var Avengery = /** @class */ (function () {
    function Avengery(nombre, equipo, nombreReal) {
        this.nombre = 'sin nombre';
        this.equipo = 'undefined';
        this.nombreReal = 'undefined';
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avengery;
}());
var antman = new Avengery('Antman', 'cap', 'Sott Lang');
console.log(antman);
// Recordar que las siguientes dos clases son lo mismo
var Villano = /** @class */ (function () {
    function Villano(nombrecito) {
        this.nombrecito = nombrecito;
    }
    return Villano;
}());
var Villano2 = /** @class */ (function () {
    function Villano2(nombrecito) {
        this.nombrecito = nombrecito;
    }
    return Villano2;
}());
//Decorador es una función cualquiera
function consola(constructor) {
    console.log(constructor);
}
var Villano3 = /** @class */ (function () {
    function Villano3(nombrecito) {
        this.nombrecito = nombrecito;
    }
    Villano3 = __decorate([
        consola
    ], Villano3);
    return Villano3;
}());
