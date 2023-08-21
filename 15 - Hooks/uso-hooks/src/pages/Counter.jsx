import React, { useEffect } from 'react'

export default function Counter(props) {
    useEffect(()=>{
        const intervalo = setInterval(()=>{
            //props.setCounter(props.counter+1)
            props.setCounter(function(updatedCounter){
                return updatedCounter + 1
            });
        }, 1000)

        // Funcion que se ejecuta al desmontar el componente
        // Funcion que se ejecuta al salir del componente o no ver el componente en pantalla

        return ()=>{
            clearInterval(intervalo)
        }
    },[])
  return (
    <>
        <p>{props.counter}</p>
    </>
  )
}
