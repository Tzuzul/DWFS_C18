const arregloVacio = []

const arregloVacio2 = new Array()


console.log(arregloVacio)
console.log(arregloVacio2)

const arreglo = [23, "Hola", 27, 54, true]

console.log(arreglo)
console.log(arreglo[3])

// JavaScript: Los arreglos son mutables
arreglo[3] = 123
console.log(arreglo[3])
console.log(arreglo)

//arreglo[5] = "Tzuzul"
// arreglo.push("Tzuzul1") // Agrega en la ultima posicion el valor de "Tzuzul"
// arreglo.push("Tzuzul2") // Agrega en la ultima posicion el valor de "Tzuzul"
// arreglo.push("Tzuzul3") // Agrega en la ultima posicion el valor de "Tzuzul"
// arreglo.push("Tzuzul4") // Agrega en la ultima posicion el valor de "Tzuzul"
arreglo.push("Tzuzul1","Tzuzul2","Tzuzul3")
arreglo.pop()
console.log(arreglo)

arreglo.unshift("Tzuzul1","Tzuzul2","Tzuzul3")
arreglo.shift()
arreglo.shift()

console.log(arreglo)

arreglo.splice(2,3)

console.log(arreglo)

console.log(arreglo)

arreglo.splice(2,3,"Reemplazo1","Reemplazo2","Reemplazo3")

console.log(arreglo)

// i++
// i = i + 1

for(let i = 0; i<arreglo.length; i++){
    console.log("Elemento en el indice",i,arreglo[i])
}

const iteracion = function (e, i){
    console.log("Ejecucion",i)
    console.log("Elemento tomado del arreglo:", e)
}

arreglo.forEach(iteracion)

// arreglo.forEach(function (e, i){
//     console.log("Ejecucion",i)
//     console.log("Elemento tomado del arreglo:", e)
// })

// iteracion("Tzuzul3", 0)
// iteracion("Tzuzul3", 1)
// iteracion("Tzuzul3", 2)
// iteracion("Tzuzul3", 3)


let nuevoArreglo = arreglo.map((elemento, indice)=>{
    return "Indice: "+indice + " Elemento: "+elemento
})

console.log(nuevoArreglo)

const frutas = [ '🍋', '🍒', '🍓', '🍎', '🥭', '🍍', '🍅', '🍋', '🍌', '🍋', '🍊', '🍑', '🍑', '🍏', '🍍', '🍎', '🍑', '🍒', '🍐', '🍓' ]

console.log(frutas)

// const limones = frutas.filter((elemento)=>{
//     return elemento=='🍋'
// })

const limones = frutas.filter(elemento=>elemento=='🍋')

console.log(limones)

const platano = frutas.find(function(elemento){
    return elemento == '🍕'
})

console.log(platano)

const numeros = [23,89,5,14,53,21]

let suma = numeros.reduce((acc, e)=>{
    return acc + e
})

console.log(suma)

let nombre = "tzuzul"
let nombreMayus = nombre.toUpperCase()
let nombreMinus = nombreMayus.toLowerCase()

console.log(nombreMayus)
console.log(nombreMinus)