import React, { useEffect, useState } from 'react'
import db from '../config/db'
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore"; 
import { useNavigate, useParams } from 'react-router';

export default function UpdateMovie() {

    const navigate = useNavigate()
    const params = useParams()

    const [movie, setMovie] = useState({})
    
    useEffect(()=>{
        const getMovie = async ()=>{
            const documento = await getDoc(doc(db, 'movies', params.id))
            setMovie(documento.data())
        }

        getMovie()
    },[])

    const update = (event)=>{
        event.preventDefault()
        console.log(movie)

        updateDoc(doc(db, 'movies', params.id), movie ).then((docRef)=>{
            console.log(docRef)
            navigate('/')
        })

        //console.log(docRef)
    }
  return (
    <>
    <form onSubmit={update}>
        <input value={movie.name} onChange={(event)=>{
            movie.name = event.target.value
            setMovie({...movie})
        }} type="text" name='name' placeholder='Name...' />
        <input value={movie.director} onChange={(event)=>{
            movie.director = event.target.value
            setMovie({...movie})
        }} type="text" name='director' placeholder='Director...' />
        <input value={movie.year} onChange={(event)=>{
            movie.year = event.target.value
            setMovie({...movie})
        }} type="date" name='year' />
        <input value={movie.category} onChange={(event)=>{
            movie.category = event.target.value
            setMovie({...movie})
        }} type="text" name='category' placeholder='Category...' />
        <input value={movie.imagen} onChange={(event)=>{
            movie.imagen = event.target.value
            setMovie({...movie})
        }} type="text" name='imagen' placeholder='Imagen...' />
        <button>Update</button>
    </form>
    </>
  )
}
