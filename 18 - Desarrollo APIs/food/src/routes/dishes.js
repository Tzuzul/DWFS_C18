const {Router} = require('express')

const dishes_array = []

function dishes(app){
    const router = Router()

    app.use('/api/dishes', router)

    router.get('/', function (req, res){
        return res.json(dishes_array)
    })

    router.post('/', (req, res)=>{
        const newDish = req.body
        dishes_array.push(newDish)

        return res.json({
            success: true,
            message:'Platillo agregado correctamente'
        })
    })
    
    router.put('/:indice', (req, res)=>{
        const indice = req.params.indice
        const updatedDish = req.body
        
        dishes_array[Number(indice)] = updatedDish

        return res.json({
            success: true,
            message:'Platillo editado correctamente'
        })
    })

    router.delete('/:indice', (req, res)=>{
        const indice = req.params.indice
        
        dishes_array.splice(indice, 1)

        return res.json({
            success: true,
            message:'Platillo eliminado correctamente'
        })
    })

}

module.exports = dishes