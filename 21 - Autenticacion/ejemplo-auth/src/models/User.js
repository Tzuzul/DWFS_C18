const mongoose = require('mongoose')
//const crypto = require('crypto')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String
})

userSchema.methods.hashPassword = function(password){
    // const salt = crypto.randomBytes(16).toString('hex')
    // this.password = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
    // const hashing = bcrypt.hashSync(password, 10000)
    // console.log(hashing)
    this.password = bcrypt.hashSync(password, 10000)
}

// userSchema.methods.generateJWT = function(){

// }

const User = mongoose.model('User', userSchema)

module.exports = User