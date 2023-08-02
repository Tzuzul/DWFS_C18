import React from 'react'
import { useState, useRef } from 'react'
import {useNavigate} from 'react-router'

export default function Login() {

    const navigate = useNavigate()

    // Librerias para formulario de React: Formik, ReactForms
    const [email, setEmail] = useState('')
    const [messages, setMessages] = useState({
        email:{
            error:false,
            success:false,
            message: ''
        }
    })

    const emailInput = useRef() // Referencia a algun elemento: document.getElementById

    const login = (event)=>{
        event.preventDefault()
        //navigate('/')
        //const formulario = event.target
        // const email = formulario.email.value
        // const password = formulario.password.value
        // console.log(email, password)
        console.log(email) // Se usa el estado
        console.log(emailInput.current)
        console.log(emailInput.current.value) // Hook de referencia
    }

    const handleEmailCHange = (event)=>{
        //console.log(event.target.value)
        setEmail(event.target.value)
        const validEmail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        const validation = validEmail.test(event.target.value)
        console.log('Resultado:', validation)
        if(validation){
            setMessages({
                email:{
                    error:false,
                    success:true,
                    message: 'Este email es valido'
                }
            })
        }else{
            setMessages({
                email:{
                    error:true,
                    success:false,
                    message: 'El email no es valido'
                }
            })
        }
    }

    return (
        <div>
            <form onSubmit={login}>
                <input ref={emailInput} onChange={handleEmailCHange} value={email} type="email" placeholder='Email' name='email'/>
                <p style={{
                    color: messages.email.error?
                        'red':
                        messages.email.success?
                        'green':
                        'transparent'
                }}>{messages.email.message}</p>
                <input type="password" placeholder='Password' name='password' />
                <button>Iniciar sesion</button>
            </form>
        </div>
    )
}
