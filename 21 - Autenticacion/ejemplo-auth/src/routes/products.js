const { Router } = require('express')
const { createProduct } = require('../controllers/products')
const auth = require('../middlewares/auth')

const products = (app)=>{
    const router = Router()
    app.use('/api/products', router)
    router.post('/', auth, createProduct)
}

module.exports = products