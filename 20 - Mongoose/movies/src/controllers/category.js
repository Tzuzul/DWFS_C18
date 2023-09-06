const Category = require('../models/categories')
const Movie = require('../models/movies')

const getMoviesByCategory = async (req, res)=>{
    try {
        const category = await Category.findById(req.params.id).populate('movies')

        return res.json({
            success:true,
            data: category
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const createCategory = async (req, res)=>{
    try {
        const category = req.body
        const newCategory = await Category.create(category)

        return res.json({
            success:true,
            data: newCategory
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const addMovieToCategory = async (req, res)=>{
    try {
        const {idMovie, idCategory} = req.body

        const updatedMovie = await Movie.findByIdAndUpdate(idMovie, {
            $push: {categories: idCategory}
        })

        const updatedCategory = await Category.findByIdAndUpdate(idCategory, {
            $push: {movies: idMovie}
        })

        return res.json({
            success:true,
            data: {updatedMovie, updatedCategory}
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
    getMoviesByCategory,
    createCategory,
    addMovieToCategory
}