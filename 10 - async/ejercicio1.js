function saludar(nombre, cb){
    console.log("Hola",nombre)
    try {
        const nombreMayus = nombre.toUpperCase()
        
        // Error first callback
        cb(null, nombreMayus)
    } catch (error) {
        console.log(error.message)
        cb("El nombre debe un ser un string", null)
    }
}

saludar("", (error, resultado)=>{
    console.log(error)
    console.log(resultado)
})