require('dotenv').config()

// process es una variable que esta definida en node js
// const PORT = process.env.PORT
// const DB_PASSWORD = process.env.DB_PASSWORD

// module.exports = {
//     port: PORT,
//     dbPassword: DB_PASSWORD
// }

const config = {
    port: process.env.PORT,
    dbPassword: process.env.DB_PASSWORD
}

module.exports = config