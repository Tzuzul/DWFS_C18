import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { UserContext } from '../context/UserContext'

export default function PrivateRoute({children}) {
    const {user} = useContext(UserContext)
    if(!user.logged){
        return <Navigate to="/auth/login" replace/>
    }
    
    return children
}
