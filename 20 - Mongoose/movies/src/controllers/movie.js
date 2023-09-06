const Movie = require("../models/movies")

const getMovies = async (req, res)=>{
    try {
        const movies = await Movie.find().populate("categories")

        return res.json({
            success: true,
            data: movies
        })

    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const createMovie = async (req, res)=>{
    try {
        const movie = req.body
        const newMovie = await Movie.create(movie)

        return res.json({
            success:true,
            data: newMovie
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const updateMovie = async (req, res)=>{
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json({
            success:true,
            data: updatedMovie
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const deleteMovie = async (req, res)=>{
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id)

        return res.json({
            success:true,
            data: deletedMovie
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie
}