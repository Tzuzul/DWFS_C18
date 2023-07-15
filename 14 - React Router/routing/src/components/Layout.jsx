import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <nav>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/tareas'>Tareas</Link></li>
                <li><Link to='/pokemon'>Pokemon API</Link></li>
            </ul>
        </nav>
        {/* Outlet es el contenido que la ruta usa como element */}
        <Outlet/>

        <footer>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/tareas'>Tareas</Link></li>
            </ul>
        </footer>
    </>
  )
}
