const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: String,
    movies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }]
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category