const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    director: String,
    //year: Date
});

const Movie = mongoose.model('movies', movieSchema)

module.exports = Movie