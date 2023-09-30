import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Logout() {
    const {user, setUser} = useContext(UserContext)
    const logout = ()=>{
        localStorage.removeItem('token')
        setUser({
            logged:false,
            data:{}
        })
    }
    
  return (
    <div>
        {user.logged?<button onClick={logout}>Logout</button>: <p>Not logged</p>}
    </div>
  )
}
