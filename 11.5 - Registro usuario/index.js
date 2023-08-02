const formulario = document.getElementById('formulario')
const errors = document.getElementById('errors')
const validEmail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)


formulario.onsubmit = (event)=>{
    event.preventDefault()
    const name = formulario.name.value
    const email = formulario.email.value
    const password = formulario.password.value

    console.log(name, email, password)
    validate({name, email, password})
}

function createMessage(message, error){
    // if(error){
    //     errors.innerHTML = `<p class="error">${message}</p>`
    // }else{
    //     errors.innerHTML = `<p class="success">${message}</p>`
    // }

    // Operador ternario
    errors.innerHTML = `<p class="${error ? 'error' : 'success' }">${message}</p>`
    
}

function validate(data){
    if(!data.name){
        console.log('El nombre es requerido')
        createMessage('El nombre es requerido', true)
    }else if(!data.email){
        createMessage('El email es requerido', true)
    }else if(!data.password){
        createMessage('El password es requerido', true)
    }else{
        // Validar estructura
        if(validEmail.test(data.email)){
            createMessage('Registrado exitosamente', false)
        }else{
            createMessage('El email es incorrecto', true)
        }
    }
}

// Expresiones regulares
// Verificar que un string sigue cierta estructura

// Fuente de informacion
const state = {}

function useState(valorInicial){
    state.nuevoEstado = valorInicial
    const array = [state.nuevoEstado, function(nuevoEstado){
        state.nuevoEstado = nuevoEstado
    }]

    return array
}

state.addEventListener('change',()=>{
    update()
})