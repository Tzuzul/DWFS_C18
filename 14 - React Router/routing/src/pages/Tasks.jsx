import React from 'react'
import {v4} from 'uuid'
import { Link } from 'react-router-dom'

export default function Tasks(props) {

  console.log(props.tasks)
  console.log(props.updateTasks)

    const saveTask = (event)=>{
        event.preventDefault()

        const form = event.target

        const id = v4()
        const name = form.name.value
        const description = form.description.value

        const task = {id, name, description}

        // updateTasks actualiza el estado
        
        props.tasks.push(task)
        // Siempre debemos pasar un nuevo elemento en el estado, para que react acutalice la pantalla
        // props.updateTasks([...props.tasks])
        // Operador Spread
        props.updateTasks([...props.tasks])
        // Almacenar props.tasks en local storage
    }

    const showTasks = ()=>{
      const tasksList = []
      props.tasks.forEach(element=>{
        tasksList.push(<div>
          <Link to={'/tareas/'+element.id}><h3>{element.name}</h3></Link>
          <p>{element.description}</p>
        </div>)
      })

      return tasksList
    }

  return (
    <>
        <h1>Tareas</h1>
        {/* Mostrar lista de tareas */}

        {[<p>Numero 1</p>, <p>Numero 2</p>, <p>Numero 3</p>]}
        <h2>Tareas por realizar</h2>
        {/* {showTasks()} */}
        {props.tasks.map(element=><div>
          <Link to={'/tareas/'+element.id}><h3>{element.name}</h3></Link>
          <p>{element.description}</p>
        </div>)}

          <h2>Agregar tarea:</h2>
        {/* Formulario */}
        <form onSubmit={saveTask}>
            <input type="text" name="name" />
            <textarea name="description"></textarea>

            <button>Guardar</button>
        </form>
    </>
  )
}
