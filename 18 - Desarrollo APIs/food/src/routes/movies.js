const {Router} = require('express')
const Movie = require('../models/movie')

function movies(app){
    const router = Router()

    app.use('/api/movies', router)

    router.get('/', async function (req, res){
        const movies = await Movie.find()
        console.log(movies)
        return res.json(movies)
    })

    router.post('/', async (req, res)=>{
        const newDish = req.body
        const movie = await Movie.create(newDish)
        console.log(movie)

        return res.json({
            success: true,
            message:'Platillo agregado correctamente'
        })
    })
    
    router.put('/:indice', async (req, res)=>{
        const indice = req.params.indice
        const updatedDish = req.body
        
        const movie = await Movie.findByIdAndUpdate(indice, updatedDish, {new:true})
        console.log(movie)

        return res.json({
            success: true,
            message:'Platillo editado correctamente'
        })
    })

    router.delete('/:indice', async (req, res)=>{
        const indice = req.params.indice
        
        const movie = await Movie.findByIdAndDelete(indice)

        console.log(movie)

        return res.json({
            success: true,
            message:'Platillo eliminado correctamente'
        })
    })

}

module.exports = movies