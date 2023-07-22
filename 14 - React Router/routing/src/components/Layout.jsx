import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar'
import {Component1, Component2} from './Navbar/components'

export default function Layout() {
  return (
    <>
        <Navbar/>
        {/* Outlet es el contenido que la ruta usa como element */}
        <Outlet/>

        <Component1/>

        <footer>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/tareas'>Tareas</Link></li>
            </ul>
        </footer>
    </>
  )
}
