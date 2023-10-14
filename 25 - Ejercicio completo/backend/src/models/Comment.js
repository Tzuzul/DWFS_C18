const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Post title required']
    },
    author:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    },
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment