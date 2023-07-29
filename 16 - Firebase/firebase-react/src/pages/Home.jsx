import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Movie App</h1>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/movies'>All movies</Link>
        <Link to='/movies/add'>Add Movie</Link>
    </div>
  )
}
