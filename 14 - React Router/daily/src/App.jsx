import { useState } from 'react'
import './App.css'

function App() {

  //const [user, setUser] = useState()
  const [validation, updateValidation] = useState({
    error:false,
    success:false,
    message: ''
  })

  // const [error, setError] = useState(false)
  // const [success, setSuccess] = useState(false)

  const validate = (data) => {
    if(!data.name){
      console.log('El nombre es requerido')
      // CUando trabajamos con objetos en el estado. Siempre debemos pasar un nuevo objeto
      updateValidation({
        error:true,
        success:false,
        message: 'El nombre es requerido'
      })
    }else if(!data.email){
        updateValidation({
          error:true,
          success:false,
          message: 'El email es requerido'
        })
    }else if(!data.password){
        updateValidation({
          error:true,
          success:false,
          message: 'El password es requerido'
        })
    }else{
        // Validar estructura
        const validEmail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        if(validEmail.test(data.email)){
          updateValidation({
            error:false,
            success:true,
            message: 'Registrado exitosamente'
          })
        }else{
            updateValidation({
              error:true,
              success:false,
              message: 'El email es incorrecto'
            })
        }
    }
  }

  const registrarUsuario = (event) =>{
    event.preventDefault()
    const formulario = event.target
    const name = formulario.name.value
    const email = formulario.email.value
    const password = formulario.password.value
    console.log(name, email, password)
    validate({name, email, password})
  }

  return (
    //Fragment
    <>
      <form onSubmit={registrarUsuario}>
        <input type="text" name="name" />
        <input type="email" name="email"/>
        <input type="password" name="password"/>

        <button>Enviar</button>
      </form>
      <section>
        <p className={validation.error ? 'error' : 'success'}>{validation.message}</p>
      </section>
    </>
  )
}

export default App
