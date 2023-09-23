import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../components/Logout'

export default function Home() {
  return (
    <div>
        <Logout/>
        <Link to='/auth/login'>Login</Link>
        <br />
        <Link to='/auth/signup'>SignUp</Link>
    </div>
  )
}
