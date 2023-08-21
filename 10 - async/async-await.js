const axios = require('axios').default;

const saludar = (nombre) => new Promise(( resolve, reject )=>{
    // resolve es una funcion que se ejecutara cuando sea exitoso
    // reject es una funcion que se ejecutara cuando sea haya algun error

    console.log("Hola", nombre)
    try {
        const nombreMayus = nombre.toUpperCase()
        resolve(nombreMayus)
        
    } catch (error) {
        console.log(error.message)
        reject("El nombre debe ser un string")
    }
})

// Le decimos a JavaScript que esta funcion va a ser asincrona
async function obtenerSaludo(){
    try {
        // JavaScript esperara hasta que se complete el proceso antes de pasar con la siguiente instruccion
        const resultado = await axios.get('https://axios-http.com/docs/intro')
        console.log(resultado.request.host) // Segundo
    } catch (error) {
        console.log(error.message)
    }
}

// Proceso principal
obtenerSaludo() // Abre un proceso y realizalo
console.log("Finalizado") // Primero