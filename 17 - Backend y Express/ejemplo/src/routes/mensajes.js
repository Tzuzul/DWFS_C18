const {Router} = require('express')

function mensajes(app){
    const router = Router()

    app.use('/mensaje', router)

    router.get('/', (req, res)=>{
        console.log(req.body)
        console.log(req.query)
    
        return res.json({
            message: `Hola, ${req.query.nombre} ${req.query.apellido}`
        })
    })

    router.post('/', (req, res)=>{
        console.log(req.body)

        return res.json({
            message: `Hola, ${req.body.name} ${req.body.lastName}`
        }) 
    })
}

module.exports = mensajes