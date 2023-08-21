class User{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }

    validate(){
        // Proceso de validacion
        return {
            success: true,
            message: 'Validado exitosamente'
        }
    }

    save(){
        // peticion para guardar el usuario en BD/ API
    }
}

// ES6 modules
export default User

// Equivale a: en node JS
//module.exports = User