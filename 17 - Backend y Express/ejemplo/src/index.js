const express = require('express')

// Importacion de rutas
const mensajes = require('./routes/mensajes')
const archivos = require('./routes/archivos')

const app = express()

const PORT = 3000


//Middleware
app.use(express.json())

// Utilizacion de las rutas
mensajes(app)
archivos(app)


app.get('/', (req, res)=>{
    console.log(req.body)

    return res.send('Hola mundo, U Campers')
})

app.get('/query', (req, res)=>{
    console.log(req.body)
    console.log(req.query)

    return res.json({
        name: 'Tzuzul',
        message: ' Hola mundo, U Campers'
    })
})

app.get('/:id', (req, res)=>{
    console.log(req.body)
    console.log(req.params.id)

    return res.json({
        name: 'Tzuzul',
        message: ' Hola mundo, U Campers',
        id: req.params.id
    }) 
})


// Escuchar a peticiones HHTP que se realicen en cierto puerto local
app.listen(PORT, ()=>{
    console.log('Listening on: http://localhost:' + PORT)
})