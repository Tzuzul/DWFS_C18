// Componente con estado
// Tendremos que hacer uso de eventos y el hook de estado de React
import { useState } from "react"

function MiBoton(){
    // const boton = document.getElementById('comenzar')
    // boton.onclick = ()=>{
    //     /// Hacemos algo al dar click
    // }

    // Se usan los hooks antes del return 
    // useState nos devuelve un array con dos posiciones
    // Primer posicion es el valor actual del estado
    // Segunda posicion es una funcion para actualizar el estado
    const estado = useState(10) // 12
    console.log(estado)
    const estadoActual = estado[0]
    const actualizarEstado = estado[1] // Funcion

    let valor = 10

    // const hacerAlgo = ()=>{
    //     alert('Click')
    // }
    const incrementar = ()=>{
        actualizarEstado(estadoActual + 1)
    }

    const incrementarSinHook = ()=>{
        valor = valor + 1
    }

    return (
    <div>
        <p>Valor del estado: {estadoActual}</p>
        <p>Valor: {valor}</p>
        <p>Da click para comenzar</p>
        <button onClick={incrementar}>Incrementar con Hook</button>
        <button onClick={incrementarSinHook} >Incrementar sin Hook</button>
        <section>
            <h3>Lee terminos y condiciones</h3>
        </section>
    </div>
    )
}

export default MiBoton