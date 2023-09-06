const {Router} = require('express')
const { createCategory, addMovieToCategory, getMoviesByCategory } = require('../controllers/category')

function categories(app){
    const router = Router()
    app.use('/api/categories', router )

    router.get('/', (req, res)=>{
        return res.json({
            success: true
        })
    })

    router.get('/:id', getMoviesByCategory)

    router.post('/', createCategory)

    router.post('/addMovie', addMovieToCategory)

    router.put('/:id', (req, res)=>{
        return res.json({
            success: true
        })
    })

    router.delete('/:id', (req, res)=>{
        return res.json({
            success: true
        })
    })
}

module.exports = categories