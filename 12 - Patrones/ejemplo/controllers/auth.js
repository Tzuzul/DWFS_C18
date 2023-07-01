// Authentication
// Autenticacion
// Proceso de verificar la identidad del usuario

//Node JS
//const User = require('')

import User from '../models/users.js'

export function crearUsuario(nombre, apellido){
    const newUser = new User(nombre, apellido)
    const validation = newUser.validate()

    console.log(newUser)
    console.log(validation)
}

export function iniciarSesion(data){
    const newUser = new User(data.nombre, data.apellido)

    console.log(newUser)
}