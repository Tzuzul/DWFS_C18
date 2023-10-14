const {expressjwt: expressJWT} = require('express-jwt')
const { jwtKey } = require('../config')

const getToken = (req)=>{
    const {authorization} = req.headers

    if(authorization){
        const [type, token] = authorization.split(' ') // ['Bearer', 'eyJH....']

        return type==='Bearer' || type==='Token' ? token : null
    }

    return null
}

const auth = expressJWT({
    secret: jwtKey,
    algorithms: ['HS256'],
    userProperty: 'user',
    getToken
})

// Middleware custom
// const verifyRole = (req, res, next)=>{
//     console.log(req.auth)
//     if(req.auth.role!=="ADMIN"){
//         return res.status(403).json({
//             success:false,
//             message: "No tienes los permisos necesarios"
//         })
//     }

//     return next()
// }

// Midlleware custom para verificar cualquier clase de rol
// AllowedRoles debe un array
const verifyRole = (allowedRoles)=>{

    // Devolviendo un middleware
    return  (req, res, next)=>{
        if(allowedRoles.includes(req.auth.role)){
            return next()
        }

        return res.status(403).json({
            success:false,
            message: "No tienes los permisos necesarios"
        })
    }
}

const handleAuthError = (error, req, res, next)=>{
    if (error.name === "UnauthorizedError") {
        return res.status(401).json({
            success:false,
            message:'Unauthorized'
        });
    } else {
        next(err);
    }
}

module.exports = {auth, handleAuthError, verifyRole}