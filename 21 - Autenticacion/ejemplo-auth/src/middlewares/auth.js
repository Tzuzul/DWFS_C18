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

module.exports = auth