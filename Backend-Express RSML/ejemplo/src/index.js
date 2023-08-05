const express = require('express')

const app = express()

const PORT = 3000
//ruta raiz:
app.get('/', (req, res)=>{

    console.log(req.body)
    console.log(req.params.id)

    return res.json({
        name: 'Renatito',
        message: 'Hola Renato de UCamp',
        id: req.params.id
    })

})

//ruta /query:
app.get('/query', (req, res)=>{

    console.log(req.body)
    console.log(req.query)

    return res.json({
        name: 'Renatito',
        message: 'Hola Renato de UCamp',
        id: req.params.id
    })

})

app.get('/mensaje', (req, res)=>{

    console.log(req.body)
    console.log(req.query.nombre)
    console.log(req.query.apellido)
    return res.json({
        name: 'Renato',
        message: 'Hola,' + ' ' + req.query.nombre + ' ' + req.query.apellido,
        id: req.params.id
    })

})



//ruta id:
app.get('/:id', (req, res)=>{

    console.log(req.body)
    console.log(req.params.id)

    return res.json({
        name: 'Renatito',
        message: 'Hola Renato de UCamp',
        id: req.params.id
    })

})



//escucha peticiones http que se realicen en cierto puerto local:
app.listen(3000, ()=>{

    console.log('Listening on: http://localhost:' + PORT)

}) 
