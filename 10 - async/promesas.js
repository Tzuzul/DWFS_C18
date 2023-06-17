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

saludar("Tzuzul")
//then -> gestionar el resultado exitos
// .then((resultado)=>{
//     console.log(resultado)
// })
.then(resultado=>console.log(resultado))
//En caso de error, se ejecuta el bloque catch
.catch((error)=>{
    console.log(error)
})
// Siempre se ejecuta este bloque. Es opcional
.finally(()=>{
    console.log("Fin del proceso de saludo")
})

console.log("Finalizado") // Segundo