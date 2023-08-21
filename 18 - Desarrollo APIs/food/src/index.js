const express = require('express')

//Importar rutas
const dishes = require('./routes/dishes')
const { port, dbPassword } = require('./config')
const connect = require('./config/db')
const movies = require('./routes/movies')

const app = express()
connect()

//const PORT = 5000

// Configurar middleware
app.use(express.json())

// Utilizar rutas
dishes(app)
movies(app)

console.log(dbPassword)

app.listen(port, ()=>{
    console.log('Listening on: http://localhost:' + port)
})