// let roberto = {
//     nombre: "Roberto",
//     edad: 22
// }

// let tzuzul = {
//     nombre: "Tzuzul",
//     edad: 24
// }

// let elena = {
//     nombre: "Elena",
//     edad: 24
// }

// Plantilla
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    imprimirDatos(){
        console.log("Nombre:", this.nombre)
        console.log("Edad: ", this.edad)
    }
}

let tzuzul = new Persona("Tzuzul", 24)
let elena = new Persona("Elena", 24)
let roberto = new Persona("Roberto", 22)

tzuzul.imprimirDatos()
elena.imprimirDatos()
roberto.imprimirDatos()