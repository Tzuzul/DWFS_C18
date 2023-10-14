const Post = require("../models/Post")

const createPost = async (req, res)=>{
    try {
        req.body.author = req.auth._id // req.auth es el usuario actualmente loggeado
        const post = await Post.create(req.body)
        console.log(req.auth)

        return res.json({
            success: true,
            data: post
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: 'Ocurrio un error.'
        })
    }
}

// title, imagen, author, fecha
const readPosts = async (req, res)=>{
    try {
        const posts = await Post.find({}, {author:true, title: true, image: true, date: true}).populate('author', 'name lastName')

        return res.json({
            success: true,
            data: posts
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: 'Ocurrio un error.'
        })
    }
}

// title, imagen, author, fecha. commentarios(populate), content
const readPost = async (req, res)=>{
    try {
        const posts = await Post.findById(req.params.id).populate({
            path:'commentaries',
            populate: {
                path: 'author',
                select: {'name':true, 'lastName': true}
            }
        })

        return res.json({
            success: true,
            data: posts
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: 'Ocurrio un error.'
        })
    }
}

const updatePost = async (req, res)=>{
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json({
            success: true,
            data: post
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: 'Ocurrio un error.'
        })
    }
}

const deletePost = async (req, res)=>{
    try {
        const post = await Post.findByIdAndDelete(req.params.id)

        return res.json({
            success: true,
            data: post
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
    createPost,
    readPosts,
    readPost,
    updatePost,
    deletePost
}