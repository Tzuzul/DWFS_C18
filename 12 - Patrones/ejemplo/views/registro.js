import {crearUsuario} from '../controllers/auth.js'

const form = document.getElementById('form')

form.onsubmit = (event)=>{
    event.preventDefault()

    const name = form.nombre.value
    const apellido = form.apellido.value

    crearUsuario(name, apellido)
}

const clickBtn = document.getElementById('click')

// Observer
// Publisher - subscriber
// Side effects
clickBtn.onclick = ()=>{
    
}

clickBtn.addEventListener('click', ()=>{

})