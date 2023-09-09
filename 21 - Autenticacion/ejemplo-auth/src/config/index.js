require('dotenv').config()

const config = {
    port: process.env.PORT,
    jwtKey: process.env.JWT_KEY
}

module.exports = config