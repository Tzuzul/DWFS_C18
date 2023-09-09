const Product = require("../models/Product")

const createProduct = async (req,res)=>{
    try {
        const product = await Product.create(req.body)

        return res.json({
            success: true,
            data: product
        })
    } catch (error) {
        return res.json({
            success: false,
            message: 'Ocurrio un error'
        })
    }
}

module.exports = {
    createProduct
}