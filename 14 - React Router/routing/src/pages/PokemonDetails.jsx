import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function PokemonDetails() {
    const {name} = useParams()
    const [pokemon, setPokemon] = useState({})
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/'+name)
        .then(response=>{
            console.log(response)
            setPokemon(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
        
        // Hacer una peticion con permisos de AUth
        const model = 'camry'
        axios.get('https://api.api-ninjas.com/v1/cars?model=' + model,{
            headers:{
                'X-Api-Key': 'GU14DQbrXypmeNQpuY6qMQ==kYwIoX9zbLGCk9an'
            }
        })
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
  return (
    <>
        <h1>{pokemon.name}</h1>
        <div>
            {pokemon.types?.map(type=>{
                return <div>
                    <p>{type.type.name}</p>
                </div>
            })}
        </div>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
    </>
  )
}
