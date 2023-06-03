//const {suma, multiplicacion} = require("./calculadora")
const suma = require("./operaciones/suma")
const resta = require("./operaciones/resta")
const multiplicacion = require("./operaciones/multiplicacion")
const division = require("./operaciones/division")

const moment = require("moment")
moment.locale("es")
let fecha = moment().format('dddd, DD [de] MMMM [de] YYYY, h:mm a')

const resultado = suma(3,7)
const resultado1 = multiplicacion(3,7)
const resultado2 = resta(3,7)
const resultado3 = division(3,7)


console.log(fecha);
console.log("La suma de 3 y 7 es:", resultado)
console.log("La multiplicacion de 3 y 7 es:", resultado1)
console.log("La resta de 3 y 7 es:", resultado2)
console.log("La division de 3 y 7 es:", resultado3)