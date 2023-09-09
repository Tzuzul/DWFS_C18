const mongoose = require('mongoose')

const connect = async ()=>{
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/AuthEjemplo')
    console.log("Conectados a la BD:", connection.connection.host)
}

module.exports = connect