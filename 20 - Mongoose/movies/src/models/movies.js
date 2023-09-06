const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    // categories: [{
    //     name: String,
    //     code: String
    // }]
    categories:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }]
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie