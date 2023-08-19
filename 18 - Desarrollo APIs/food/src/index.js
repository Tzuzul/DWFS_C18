const express = require('express')

//Importar rutas
const dishes = require('./routes/dishes')
const { port, dbPassword } = require('./config')

const app = express()

//const PORT = 5000

// Configurar middleware
app.use(express.json())

// Utilizar rutas
dishes(app)

console.log(dbPassword)

app.listen(port, ()=>{
    console.log('Listening on: http://localhost:' + port)
})