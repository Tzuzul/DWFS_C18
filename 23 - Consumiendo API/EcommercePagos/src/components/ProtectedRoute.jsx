import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router'

export default function ProtectedRoute({children, allowedRoles}) {
    const {user} = useContext(UserContext)
    if(user.fetching){
        return <h1>Loading...</h1>
    }else if(!allowedRoles.includes(user.data.role)){
        return <Navigate to="/"/>
    }

    return children
}
