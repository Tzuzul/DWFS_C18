const {Router} = require('express')
const fs = require('fs')

function archivos(app){
    const router = Router()

    app.use('/archivos', router)

    router.post('/',(req, res)=>{
        const name = req.body.name

        fs.appendFile('./src/assets/nombres.txt', name+'\n', (error)=>{
            console.log(error)
        })

        return res.json({
            message: 'Agregado exitosamente!'
        })
    })

    router.post('/create',(req, res)=>{
        const content = req.body.content
        const fileName = req.body.fileName

        // Completar
        

        return res.json({
            message: 'Agregado exitosamente!'
        })
    })

    router.put('/', (req, res)=>{
        const {content} = req.body

        fs.writeFile('./src/assets/nombres.txt', content, (error)=>{
            console.log(error)
        })

        return res.json({
            message: 'Actulizado exitosamente!'
        })
    })

    router.delete('/:fileName', (req, res)=>{
        const fileName = req.params.fileName

        // Completar

        return res.json({
            message: 'Eliminado exitosamente!'
        })
    })
}

module.exports = archivos