const Comment = require("../models/Comment")
const Post = require("../models/Post")

const createCommentary = async (req, res)=>{
    try {
        req.body.author = req.auth._id
        const commentary = await Comment.create(req.body)
        const post = await Post.findByIdAndUpdate(req.params.id, {$push: {commentaries:commentary}})

        return res.json({
            success: true,
            data: commentary
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: 'Ocurrio un error.'
        })
    }
}

const updateCommentary = async (req, res)=>{
    try {
        const commentary = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json({
            success: true,
            data: commentary
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: 'Ocurrio un error.'
        })
    }
}

const deleteCommentary = async (req, res)=>{
    try {
        const commentary = await Comment.findByIdAndDelete(req.params.id)
        const post = await Post.findByIdAndUpdate(req.params.id, {$pop: {commentaries:commentary}})

        return res.json({
            success: true,
            data: commentary
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: 'Ocurrio un error.'
        })
    }
}

module.exports = {
    createCommentary,
    updateCommentary,
    deleteCommentary
}