const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Post title required']
    },
    content: {
        type: String,
        required: [true, 'Post content required']
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: String,
    commentaries:[{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }]
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post