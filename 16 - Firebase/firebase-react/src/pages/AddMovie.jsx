import React from 'react'
import db from '../config/db'
import { collection, addDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router';

export default function AddMovie() {

    const navigate = useNavigate()

    const add = (event)=>{
        event.preventDefault()
        const name = event.target.name.value
        const director = event.target.director.value
        const year = event.target.year.value
        const category = event.target.category.value
        const imagen = event.target.imagen.value

        addDoc(collection(db, "movies"), {
            name, director, year, category, imagen
        }).then((docRef)=>{
            console.log(docRef)
            navigate('/')
        })

        //console.log(docRef)
    }
  return (
    <>
    <form onSubmit={add}>
        <input type="text" name='name' placeholder='Name...' />
        <input type="text" name='director' placeholder='Director...' />
        <input type="date" name='year' />
        <input type="text" name='category' placeholder='Category...' />
        <input type="text" name='imagen' placeholder='Imagen...' />
        <button>Add</button>
    </form>
    </>
  )
}
