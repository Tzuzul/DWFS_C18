const fs = require("fs")
const fsPromises = require("fs/promises")

//La alternativa sincrona
// function saludar(nombre){
//     // Proceso o tarea principal
    
//     setTimeout(()=>{
//         console.log("Hola", nombre)
//     }, 5000) // Realiza la tarea despues de 5 seg
// }

// const mensajeFinal = ()=>{
//     console.log("Se termino la tarea")
// }

// saludar("Tzuzul") // 5s
// mensajeFinal() // Inmediato

// Callbacks
// Gererico
function saludar(nombre, callback){
    // Proceso o tarea principal
    // No sabemos cuanto pueda tardar esta tarea
    setTimeout(()=>{
        console.log("Hola", nombre)

        //Realizar el siguiente paso
        // se espera que callback sea una funcion
        callback({
            message: "Todo salio bien",
            ok: true
        })
    }, 4000) // Realiza la tarea despues de 5 seg
}

saludar("Tzuzul", (resultado)=>{
    console.log("Se termino la tarea")
    console.log(resultado)
})

saludar("Tzuzul", ()=>{
    // Callback hell
    console.log("Acabamos de imprimir el mensaje")
    saludar("Tzuzul", ()=>{
        console.log("Acabamos de imprimir el mensaje")
        saludar("Tzuzul", ()=>{
            console.log("Acabamos de imprimir el mensaje")
            saludar("Tzuzul", ()=>{
                console.log("Acabamos de imprimir el mensaje")
            })
        })
    })

})

// readFile con callbacks
fs.readFile('./link.txt', (error, resultado)=>{
    // Error first callback
    console.log(error)
    console.log(resultado.toString())
})

//readFile con promesas
fsPromises.readFile('./link.txt')
.then(resultado=>console.log(resultado.toString()))
.catch((error)=>{
    console.log(error)
})