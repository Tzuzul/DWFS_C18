const jwt = require('jsonwebtoken')
const { jwtKey } = require('../config')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const sendEmail = require('../libs/email')
const {randomUUID} = require('crypto')

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

    if(user && email===user.email && bcrypt.compareSync(password, user.password)){
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
            token,
            data: userJSON
        })
    }

    return res.status(400).json({
        success:false,
        message: 'Las credenciales no coinciden'
    })

}

const signUp = async (req, res)=>{
    try {
        delete req.body.role
        const user = new User(req.body)
        const validationResult = user.validateSync();

        // 1. Si el usuario desea colocar un role diferente a Regular, denegar la peticion
        // 2. Simplemente retirar la propiedad role del body

        if(validationResult?.errors){
            return res.status(400).json({
                success: false, 
                message: Object.keys(validationResult.errors).map((key)=>{return {property:key, message:validationResult.errors[key].message}}),
            })
        }

        user.hashPassword(req.body.password)
        const userSaved = (await user.save()).toJSON()
        delete userSaved.password
        return res.json({
            success: true, 
            message: 'Usuario registrado exitosamente',
            data: userSaved
        })
    } catch (error) {
        console.log('Catch', error)
        if(error.code===11000){
            return res.status(400).json({
                success: false, 
                message: 'Usuario ya registrado',
            })
        }else{
            return res.status(400).json({
                success: false, 
                message: 'Ocurrio un error. Intenta mas tarde.',
            })
        }
    }
}

const recover_session = (req, res)=>{
    return res.json({
        success:true,
        data: req.auth
    })
}

const password_recovery = async (req, res)=>{
    const {email} = req.body
    console.log(email)
    const passwordRecoveryCode = randomUUID()
    console.log(passwordRecoveryCode)
    const user = await User.findOneAndUpdate({email},{passwordRecoveryCode})
    const result = await sendEmail(email, 'Recuperacion de contrasena', 'Codigo de recuperacion: https://midominio.com/password/recovery?code='+passwordRecoveryCode)
    return res.json(result)
}

const change_password = async (req, res)=>{
    const {code, newPassword} = req.body
    try {
        //const user = User.findOneAndUpdate({passwordRecoveryCode: code},{password: newPassword, passwordRecoveryCode: null}, {new: true})
        const user = await User.findOne({passwordRecoveryCode: code})
        if(user){
            user.passwordRecoveryCode = null
            user.hashPassword(newPassword)
            const newUser = await user.save()
            console.log(newUser)
            return res.json({
                success: true
            })
        }else{
            return res.json({
                success: false,
                message: 'Codigo o URL invalido'
            })
        }
        
    } catch (error) {
        console.log(error)
        return res.json({
            success: false
        })
    }
}

const updateRole = async (req, res)=>{
    // if(req.auth.role!=="ADMIN"){
    //     return res.status(403).json({
    //         success: false,
    //         message: "No tienes los permisos necesarios"
    //     })
    // }
    const {email, role} = req.body
    try {
        const user = (await User.findOneAndUpdate({email},{role},{new: true})).toJSON()

        delete user.password

        return res.json({
            success: true,
            message: "Rol actualizado correctamente",
            data: user
        })
    } catch (error) {
        console.log(error)

        return res.json({
            success: false,
            message: "No se pudo cambiar el rol"
        })
    }
}

module.exports = {
    login,
    signUp,
    recover_session,
    password_recovery,
    change_password,
    updateRole,
}