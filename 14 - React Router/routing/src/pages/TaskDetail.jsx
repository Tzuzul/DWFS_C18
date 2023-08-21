import React from 'react'
import { useParams } from 'react-router-dom'

export default function TaskDetail(props) {
  const {id} = useParams() // objeto

  const getTask = (id)=>{
    const task = props.tasks.find(element=>element.id===id)

    return <div>
      <h3>{task.name}</h3>
      <p>{task.id}</p>
      <p>{task.description}</p>
    </div>
  }

  return (
    <div>
      {getTask(id)}
    </div>
  )
}
