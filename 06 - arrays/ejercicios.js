//1

for(let i=1; i<=10; i=i+1){
    let res = i * 2

    console.log(2,"*",i,"=",res)
    //Template strings
}

const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];

// const nombreMayusculas = [];

// nombres.forEach(function (elem){
//     let elemMayus = elem.toUpperCase()
//     nombreMayusculas.push(elemMayus)
// })

const nombreMayusculas = nombres.map(function(elem){
    return elem.toUpperCase()
})

console.log(nombreMayusculas)

const nombreMinusculas = nombreMayusculas.map(function(elem){
    return elem.toLocaleLowerCase()
})

console.log(nombreMinusculas)

const filtroNombres = nombres.filter(function(elem){
    return elem.toLowerCase() === "luis"
})

console.log(filtroNombres)

const numeros = [2,4,6,8,10]

const suma = numeros.reduce(function(acc,elem){
    return acc + elem
})

console.log(suma)

// Ejercicio Clase Anterior
function promedio(){

    let suma = 0
    for(let elem of arguments){
        suma = suma + Number(elem)
    }

    // let suma = arguments.reduce(function(acc,elem){
    //     return acc + Number(elem)
    // }, 0)
    // let suma = Number(c1) + Number(c2) + Number(c3) + Number(c4) + Number(c5)
    let promedio = suma / arguments.length
    console.log(promedio)
}

// let c = prompt("Introducir calif: ")
let c1 = "15"
let c2 = "23"
let c3 = "7"
let c4 = "8"
let c5 = "10"
let c6 = "12"

promedio(c1,c2,c3,c4,c5,c6)