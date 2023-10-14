import React from 'react'
import NavLink from './NavLink'

export default function Navbar() {
  return (
    <nav className='bg-sky-100 py-5 mb-10'>
        <ul className='max-w-6xl mx-auto flex'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/auth/login'}>Log In</NavLink>
            <NavLink to={'/auth/signup'}>Sign Up</NavLink>
        </ul>
    </nav>
  )
}
