const mongoose = require('mongoose')
const { dbUsername, dbPassword } = require('.')

const connect = async ()=>{
    const connection = await mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@ucamp.px9y8d2.mongodb.net/?retryWrites=true&w=majority`)
    console.log('Se ha conectado correctamente:', connection.connection.host)
}

module.exports = connect