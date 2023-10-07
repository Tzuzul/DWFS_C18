import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../components/Logout'
import { UserContext } from '../context/UserContext'

export default function Home() {
  const {user} = useContext(UserContext)
  
  return (
    <div>
        <Logout/>
        {!user.logged&&<Link to='/auth/login'>Login</Link>}
        <br />
        {!user.logged&&<Link to='/auth/signup'>SignUp</Link>}
        <br />
        {user.logged&&<Link to='/cart/checkout'>Checkout</Link>}
        {user.data.role==="ADMIN"&&<Link to='/admin/products/add'>Agregar producto</Link>}
    </div>
  )
}
