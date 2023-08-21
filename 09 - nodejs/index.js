// No estan disponibles APIs nativas del navegador
// En reemplazo node tiene sus propios modulos (backend)
// Archivos - Conexion a BD - Acceso a Internet o a APIs

console.log("Hola mundo")

// Importando suma (una sola funcion)
// const suma = require("./suma")

// Importar varias cosas
// Desestructuracion - funcionalidad de javascript
// const operaciones = require("./suma")
// const suma = operaciones.suma

const {suma} = require("./suma")

//const operaciones = require("./suma")


// Suma de dos valores
let resultado = suma(5,4)
console.log(resultado)

