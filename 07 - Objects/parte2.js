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

class Consola{
    // Atributos
    constructor(marca, modelo, portatil, bateria, resolucion){
        this.marca = marca
        this.modelo = modelo
        this.portatil = portatil
        this.bateria = bateria
        this.resolucion = resolucion
        // Estado
        this.encendida = false
    }

    //metodos
    encender(){
        this.encendida = true
        console.log("Encendiendo...")
    }
    apagar(){
        this.encendida = false
        console.log("Apagando...")
    }

    abrirJuego(nombre){
        console.log("Se abrio el juego: ", nombre)
    }

    jugar(){
        console.log("Estamos jugando con la consola")
    }
}

//Super clase
class Mamifero{
    constructor(pelo, orejas, ojos, nombre){
        this.pelo = pelo
        this.orejas = orejas
        this.ojos = ojos
        this.nombre = nombre
    }

    respirar(){
        console.log(this.nombre, "esta respirando...")
    }
}

// Sub-clase
class Perro extends Mamifero{
    #raza // Los atributos privados deben declararse en esta parte
    constructor(pelo, orejas, ojos, nombre, raza){
        super(pelo, orejas, ojos, nombre) // Mamifero
        this.#raza = raza
    }

    hacerSonido(){
        console.log("Roar..")
    }

    jugar(){
        console.log("Jugando... y Saltando...")
        this.#correr()
    }

    #correr(){
        console.log("Corriendo...")
    }

    #nadar(){
        console.log("Nadando...")
    }
}

class Gato extends Mamifero{
    #raza
    constructor(pelo, orejas, ojos, nombre, raza){
        super(pelo, orejas, ojos, nombre) // Mamifero
        this.#raza = raza
    }

    hacerSonido(){
        console.log("Miauuu...")
    }
}

let untete = new Perro("marron",2,"cafe","Untete", "mestizo")

console.log(untete)
untete.respirar()
untete.hacerSonido()
untete.jugar()


function imprimirDatosAnimal(animal){
    console.log(animal.pelo)
    console.log(animal.orejas)
    console.log(animal.ojos)
    console.log(animal.nombre)
    console.log("Y este animal hace:")
    if(animal.hacerSonido){
        animal.hacerSonido()
    }
}

let michi = new Gato("blanco",2,"verdes","Michi", "Romano")

imprimirDatosAnimal(untete)
imprimirDatosAnimal(michi)
imprimirDatosAnimal(tzuzul)