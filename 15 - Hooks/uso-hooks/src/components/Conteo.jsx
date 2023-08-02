import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Conteo() {
    //const contador = useState(10)
    const [contador, setContador] = useState(10)
    const [numeros, setNumeros] = useState([1,2,3])

    useEffect(()=>{
        lanzarAlerta()
    },[contador])

    const incrementar = ()=>{
        setContador(contador+1) //12
    }
    const decrementar = ()=>{
        setContador(contador-1) //12
    }

    const agregarNumero = () =>{
        numeros.push(contador)
        const nuevoArrayMismoContenido = [...numeros]
        setNumeros(nuevoArrayMismoContenido)
    }

    const lanzarAlerta = ()=>{
        console.log('Efecto secundario!')
    }
  return (
    <div>
        <section>
            <Link to='/login'>Login</Link>
            <Link to='/counter'>Counter</Link>
        </section>
        <p>{contador}</p>
        {console.log('Se hizo render')}
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>

        <button onClick={agregarNumero}>Agregar numero actual</button>

        <div>
            {numeros.map((numero, indice)=><p key={indice}>{numero}</p>)}
            {/* {[<p>{1}</p>,<p>{2}</p>,<p>{3}</p>]} */}
        </div>
    </div>
  )
}
