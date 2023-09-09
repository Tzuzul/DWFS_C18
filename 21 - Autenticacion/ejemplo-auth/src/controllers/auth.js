const jwt = require('jsonwebtoken')
const { jwtKey } = require('../config')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const login = async (req, res)=>{
    const {email, password} = req.body
    console.log(email, password)

    if(!(email && password)){
        return res.status(400).json({
            success:false,
            message: 'No se proporcionaron las credenciales'
        })
    }

    //consultar el usuario desde la BD
    const user = await User.findOne({email})
    console.log(user)

    if(email===user.email && bcrypt.compareSync(password, user.password)){
        const userJSON = user.toJSON()
        delete userJSON.password
        // const token = jwt.sign({
        //     data:userReplica,
        //     exp: Math.floor(Date.now() / 1000) + (60 * 60)
        // }, jwtKey)
        const token = jwt.sign(userJSON, jwtKey, {expiresIn: '7d'})

        return res.json({
            success:true,
            message: 'Usuario loggeado correctamente',
            token
        })
    }

    return res.status(400).json({
        success:false,
        message: 'Las credenciales no coinciden'
    })

}

const signUp = async (req, res)=>{
    try {
        const user = new User(req.body)
        user.hashPassword(req.body.password)
        const userSaved = await user.save()
        return res.json({
            success: true, 
            message: 'Usuario registrado exitosamente',
            data: userSaved
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false, 
            message: 'Usuario ya registrado',
        })
    }
}

module.exports = {
    login,
    signUp
}