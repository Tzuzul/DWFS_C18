const express = require('express')
const { port } = require('./config')
const connect = require('./config/db')
const movies = require('./routes/movies')
const categories = require('./routes/categories')

const app = express()

app.use(express.json())

connect()

// Definir rutas
movies(app)
categories(app)

app.listen(port, ()=>{
    console.log('Listening on: http://localhost:'+port)
})