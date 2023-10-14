require('dotenv').config()

const config = {
    port: process.env.PORT,
    dbName: process.env.DB_NAME,
    jwtKey: process.env.JWT_KEY,
    mailgunApiKey: process.env.MAILGUN_API_KEY
}

module.exports = config