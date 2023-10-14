const mongoose = require('mongoose')
//const crypto = require('crypto')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name required']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'E-mail required']
    },
    password: {
        type:String,
        required: [true, 'E-mail required']
    },
    passwordRecoveryCode: String,
    role:{
        type: String,
        enum: ['ADMIN','EDITOR','REGULAR'],
        default: 'REGULAR'
    }
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