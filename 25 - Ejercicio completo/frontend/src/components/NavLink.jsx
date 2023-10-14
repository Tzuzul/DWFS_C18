import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({children, to}) {
  return (
    <li className='text-sky-700 text-2xl mr-5 hover:text-orange-500'><Link to={to}>{children}</Link></li>
  )
}
