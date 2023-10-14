const mongoose = require('mongoose')
const { dbName } = require('.')

const connect = async ()=>{
    const connection = await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
    console.log('Se ha conectado correctamente:', connection.connection.host)
}

module.exports = connect