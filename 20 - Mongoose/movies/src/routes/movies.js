const {Router} = require('express')
const { getMovies, createMovie, updateMovie, deleteMovie } = require('../controllers/movie')

function movies(app){
    const router = Router()
    app.use('/api/movies', router )

    router.get('/', getMovies)

    router.post('/', createMovie)

    router.put('/:id', updateMovie)

    router.delete('/:id', deleteMovie)
}

module.exports = movies