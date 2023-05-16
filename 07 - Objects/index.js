let a = 5
let b = 10

// let mensaje = "La multiplicacion de "+a+"*"+b+" es igual a "+(a*b)
let mensaje = `La multiplicacion de ${a}*${b} es igual a ${a*b}`

console.log(mensaje)

let tzuzul = ["Tzuzul Rosas", 24, true, "Negro", "Musica", 24]


// JSON: JavaScriopt Object Notation

// let tzuzulJSON = {
//     "nombre": "Tzuzul Rosas",
//     "edad": 24,
//     "soltero": false,
//     "colorFavorito": "Negro",
//     "hobby": "Musica"
// }

// Objetos: Conjunto de atributos y metodos

let tzuzulObjeto = {
    nombre: "Tzuzul Rosas",
    edad: 24,
    soltero: false,
    colorFavorito: "Negro",
    hobby: "Musica"
}

let tzuzulJSON = JSON.stringify(tzuzulObjeto)
let tzuzulObjetoParseado = JSON.parse(tzuzulJSON)

console.log(tzuzulObjeto)
console.log(tzuzulJSON)
console.log(tzuzulObjetoParseado)

//Accediendo/modifcando a informacion
// tzuzulObjeto['nombre'] = "Tzuzul"
tzuzulObjeto.nombre = "Tzuzul"
console.log(tzuzulObjeto['nombre'])
console.log(tzuzulObjeto.nombre)

tzuzulObjeto.comidaFavorita = 'Tacos'

console.log(tzuzulObjeto)

let objeto = {
    saludo: "Hola!",
    despedida: "Adios!"
}

function agregarValorAlObjeto(nombrePropiedad, valor){
    // Dentro de la funcion puedo hacer referencia a variables globales
    // o variables definidas fuera de la funcion
    objeto[nombrePropiedad] = valor
}

agregarValorAlObjeto("saludo", "Que tal")
console.log(objeto)
agregarValor("nombre","Saul")
console.log(objeto)

//Object.keys nos da un arreglo con el nombre de las propiedas
let keys = Object.keys(tzuzulObjeto)
console.log(keys)

for(let i=0; i<keys.length; i++){
    let nombrePropiedad = keys[i]
    
    console.log("Propiedad: ",nombrePropiedad, "Valor:", tzuzulObjeto[nombrePropiedad])
}

keys.forEach(nombrePropiedad=>console.log("Propiedad: ",nombrePropiedad, "Valor:", tzuzulObjeto[nombrePropiedad]))

for(let nombrePropiedad in tzuzulObjeto){
    console.log("Propiedad: ",nombrePropiedad, "Valor:", tzuzulObjeto[nombrePropiedad])
}

// let nombre = tzuzulObjeto.nombre
let {nombre:nombreTzuzul, edad:edadObjeto, colorFavorito} = tzuzulObjeto
console.log(nombreTzuzul.toUpperCase())
console.log(edadObjeto)
console.log(colorFavorito)

let [nombre, edad, tercerPos] = tzuzul
console.log(nombre)
console.log(edad)
console.log(tercerPos)