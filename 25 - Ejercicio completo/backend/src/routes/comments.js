const {Router} = require('express')
const { auth } = require('../middlewares/auth')
const { createCommentary, updateCommentary, deleteCommentary } = require('../controllers/commentaries')

const comments = (app)=>{
    const router = new Router()
    app.use('/api/comments', router)
    router.post('/:id', auth, createCommentary)
    router.put('/:id', auth, updateCommentary)
    router.delete('/:id', auth, deleteCommentary)
}

module.exports = comments