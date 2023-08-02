import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../config/db';

export default function Movies() {

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const newMovies = []
        getDocs(collection(db, 'movies'))
        .then((snap)=>{
            snap.forEach((doc)=>{
                newMovies.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            setMovies(newMovies)
        })
    }, [])

  return (
    <>
        <h1>Movies added</h1>
        {movies.map((movie)=><article key={movie.id}>
            <h2>{movie.data.name}</h2>
            <h4>{movie.data.director}</h4>
            <h4>{movie.data.year}</h4>
            <h4>{movie.data.category}</h4>
            <img src={movie.data.imagen} alt={movie.data.name} />
        </article>)}
    </>
  )
}
