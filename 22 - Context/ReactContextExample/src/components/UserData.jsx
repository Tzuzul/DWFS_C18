import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function UserData() {
    const {user} = useContext(UserContext)
  return (
    <div>
        Logged: {user.logged?user.data.name: 'Not logged'}
    </div>
  )
}
