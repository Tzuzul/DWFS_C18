const ciudadNacimiento = 'Monterrey'

// const a = 7/0
// console.log(a)

// const b = "Hola"/4
// console.log(b)

let variableNull = null

console.log(variableNull)

let numero = String(123) //string

console.log(numero)

let resta = 5 - 'Hola'
console.log(resta)

let boolean = Boolean(0)
console.log(boolean)

//alert(ciudadNacimiento)

let x = 50
let carName = 'Volvo'

let a = 5 , b = 10

let z = a + b

//alert("El resultado es: " + z)


let number = 4
// number = number + 1
number++

console.log(number)

let dec = 4
dec--
let inc = 4
inc++

console.log(dec , inc)

let div = 15 % 4

console.log(div)

let three = 3
let threeString = '3'

let res = three > threeString
console.log(res)

// let expr1 = !true
// let expr2 = false //false

// let resExpr = Boolean(expr1 && expr2)

// console.log(resExpr)

let expr1 = false
let expr2 = false

if(expr1 && expr2){
    //Ejecutar en caso de verdad
    console.log("Tu historia es creible")
}else if(expr1===true){
    console.log("La primer parte de tu historia es creible")
}else if(expr2===true){
    console.log("La segunda parte de tu historia es creible")
}else{
    console.log("Tu historia es totalmente falsa")
}



let opcion = 5
switch(opcion){
    case 1:
        console.log("Se selcciono la opcion 1")
        break;
    case 2:
        console.log("Se selcciono la opcion 2")
        break;
    case 3:
        console.log("Se selcciono la opcion 3")
        break;
    default:
        console.log("Opcion no disponible")
}

// For
for(let i = 1; i<10 ; i++){
    console.log(i)
}

let i = 1
while(i<10){
    console.log(i)
    i++
}

// Declaracion de la funcion
// function validarExpr(expr1, expr2){
//     // let expr1 = true
//     // let expr2 = true

//     if(expr1 && expr2){
//         //Ejecutar en caso de verdad
//         console.log("Tu historia es creible")
//     }else if(expr1===true){
//         console.log("La primer parte de tu historia es creible")
//     }else if(expr2===true){
//         console.log("La segunda parte de tu historia es creible")
//     }else{
//         console.log("Tu historia es totalmente falsa")
//     }
// }

// const validarExpr = function(expr1, expr2){
//     if(expr1 && expr2){
//         //Ejecutar en caso de verdad
//         console.log("Tu historia es creible")
//     }else if(expr1===true){
//         console.log("La primer parte de tu historia es creible")
//     }else if(expr2===true){
//         console.log("La segunda parte de tu historia es creible")
//     }else{
//         console.log("Tu historia es totalmente falsa")
//     }
// }

// Arrow function
const validarExpr = (expr1, expr2) => {
    if(expr1 && expr2){
        //Ejecutar en caso de verdad
        console.log("Tu historia es creible")
    }else if(expr1===true){
        console.log("La primer parte de tu historia es creible")
    }else if(expr2===true){
        console.log("La segunda parte de tu historia es creible")
    }else{
        console.log("Tu historia es totalmente falsa")
    }
}

//Ejecucion de la funcion
validarExpr(true, false)
validarExpr(false, false)
validarExpr(true, true)

function calcularAreaCirculo(radio){
    let area = Math.PI * Math.pow(radio,2) //radio al cuadrado

    return area // Si no se agrega return, el valor es Undefined
}

let altura = 10
let area = calcularAreaCirculo(5)
console.log(area);
let volumen = area * altura

console.log(volumen);

// let secreto = 10
(function (){
    let secreto = 10
    console.log(secreto)
})()

function pares(n){
    for(let i=2; i <= n * 2; i = i + 2){
        console.log(i)
    }
}

pares(6)
pares(3)
pares(10)

// let name = prompt("Ingresa tu nombre")
// let lastName = prompt("Ingresa tu nombre")

// const nombreCompleto = (name,lastName)=>{
//     alert(name + " " + lastName)
// }

// nombreCompleto(name, lastName)


let name = prompt("Ingresa tu nombre")
edad = prompt("Ingresa tu edad")

console.log(edad)

// const permiso = (name, edad)=>{
//     if( edad >= 18){
//         alert(name + ", puedes solicitar un permiso")
//     }else{
//         alert(name + ", no puedes solicitar un permiso")
//     }
// }

const permiso = function(name, edad){
    if( edad >= 18){
        alert(name + ", puedes solicitar un permiso")
    }else{
        alert(name + ", no puedes solicitar un permiso")
    }
}

permiso(name, edad)
