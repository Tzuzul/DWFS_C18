import React from 'react'
import db from '../config/db'
import { collection, addDoc } from "firebase/firestore"; 

export default function SignUp() {
    const signup = (event)=>{
        event.preventDefault()
        const name = event.target.name.value
        const lastName = event.target.lastName.value
        const birthday = event.target.birthday.value
        const password = event.target.password.value

        console.log(name, lastName, birthday, password)

        addDoc(collection(db, "users"), {
            name, lastName, birthday, password
        }).then((docRef)=>{
            console.log(docRef)
        })

        //console.log(docRef)
    }
  return (
    <>
    <form onSubmit={signup}>
        <input type="text" name='name' placeholder='Name...' />
        <input type="text" name='lastName' placeholder='Last name...' />
        <input type="date" name='birthday' />
        <input type="password" name='password' placeholder='Password...' />
        <button>Sign Up</button>
    </form>
    </>
  )
}
