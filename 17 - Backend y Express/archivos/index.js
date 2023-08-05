const fs = require('fs')

// Agrega contenido al final del archivo
fs.appendFile('./nombres.txt', '\nMario Bros', (error)=>{
    if(error){
        console.log(error)
    }
})

// Lee el contenido de un archivo
fs.readFile('./nombres.txt', 'utf-8', (error, data)=>{
    if(error){
        console.log(error)
    }

    console.log(data)
})

// Si existe, reemplaza el contenido. Sino, crea un nuevo archivo
fs.writeFile('./nuevoArchivo.txt', 'Esto es un nuevo archivo', (error)=>{
    if(error){
        console.log(error)
    }

    console.log('Archivo creado!')
})

fs.unlink('./nuevoArchivo.txt', (error)=>{
    if(error){
        console.log(error)
    }

    console.log('Archivo eliminado!')
})