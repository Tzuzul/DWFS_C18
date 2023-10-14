const {Router} = require('express')
const { createPost, readPosts, readPost, updatePost, deletePost } = require('../controllers/posts')
const { auth, verifyRole } = require('../middlewares/auth')

const posts = (app)=>{
    const router = new Router()
    app.use('/api/posts', router)
    router.post('/', auth, verifyRole(['ADMIN', 'EDITOR']), createPost)
    router.get('/', readPosts)
    router.get('/:id', readPost)
    router.put('/:id', auth, verifyRole(['ADMIN', 'EDITOR']), updatePost)
    router.delete('/:id', auth, verifyRole(['ADMIN', 'EDITOR']), deletePost)
}

module.exports = posts