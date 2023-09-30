import React, { useContext, useState } from 'react'
import instance from '../api'
import UserData from '../components/UserData'
import { UserContext } from '../context/UserContext'
import Alert from 'react-bootstrap/Alert';
import FormButton from '../components/FormButton';

export default function Login() {
    // const [error, setError] = useState({
    //     error:false,
    //     message: ''
    // })
    // const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({
        error: false,
        loading: false,
        message: ''
    })

    const {user, setUser} = useContext(UserContext)// Hook que permite acceder a los datos del contexto

    const login = async (event)=>{
        event.preventDefault()
        setStatus({
            error: false,
            loading: true,
            message: ''
        })
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
            setStatus({
                error: false,
                loading: false,
                message: ''
            })
        } catch (error) {
            setStatus({
                error: true,
                loading: false,
                message: error.response.data.message
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
            <FormButton loading={status.loading}>Login</FormButton>
        </form>
        {status.error&&<Alert variant="danger">
            {status.message}
        </Alert>}
    </div>
  )
}
