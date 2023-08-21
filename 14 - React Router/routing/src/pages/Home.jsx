import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        {/* <a href="/tareas">Ir a tareas</a> */}
        {/* La opcion recomendada para navegar es usar Link */}
        <Link to='/tareas'>Todas las tareas</Link>
    </div>

  )
}