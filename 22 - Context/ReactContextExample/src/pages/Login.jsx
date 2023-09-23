import React, { useContext, useState } from 'react'
import instance from '../api'
import UserData from '../components/UserData'
import { UserContext } from '../context/UserContext'

export default function Login() {
    const [error, setError] = useState({
        error:true,
        message: ''
    })

    const {user, setUser} = useContext(UserContext)// Hook que permite acceder a los datos del contexto

    const login = async (event)=>{
        event.preventDefault()
        try {
            const response = await instance.post('/api/auth/login',{
                email:event.target.email.value,
                password:event.target.password.value
            })

            setUser({
                logged:true,
                data: response.data.data
            })
            localStorage.setItem('token', response.data.token )
        } catch (error) {
            setError({
                error:true,
                message:error.response.data.message
            })
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <UserData user={user}></UserData>
        <form onSubmit={login}>
            <input type="email" name="email" placeholder='Email...' />
            <input type="password" name="password" placeholder='Password...' />
            <button>Login</button>
        </form>
        {error.error&&<p>{error.message}</p>}
    </div>
  )
}
