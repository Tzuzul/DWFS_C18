import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MiComponente from '../components/MiComponente'

// stateful/functional component
export default function Pokemon() {
    const [pokemon, setPokemon] = useState([])
    // Evitar un ciclo infinito
    // Ejecutar la peticion una sola vez antes de mostrar algo en pantall
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response=>{
            console.log(response)
            setPokemon(response.data.results)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
  return (
    <>
        <h1>Lista de pokemon</h1>
        {pokemon.map(poke=><article>
            <Link to={'/pokemon/'+poke.name}><h3>{poke.name}</h3></Link>
        </article>)}

        <MiComponente></MiComponente>
    </>
  )
}
