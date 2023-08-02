import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/tareas'>Tareas</Link></li>
            <li><Link to='/pokemon'>Pokemon API</Link></li>
        </ul>
    </nav>
  )
}