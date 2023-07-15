import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import TaskDetail from './pages/TaskDetail'
import { useState } from 'react'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import Pokemon from './pages/Pokemon'
import PokemonDetails from './pages/PokemonDetails'

function App() {
  // Si tienen informacion en el local storage, tomarian el estado inicial del local storage
  const [tasks, updateTasks] = useState([])

  return (
    <>
    {/* ROutes me permite registar rutas */}
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* Pagina principal */}
          <Route index element={<Home/>}/>
          {/* Tareas */}
          {/* <Route path='tareas' element={<Tasks/>}>
            <Route path='otracosa' element={<TaskDetail/>} />
            <Route path=':id' element={<TaskDetail/>} />
          </Route> */}
          <Route path='/tareas' element={<Tasks tasks={tasks} updateTasks={updateTasks} />} />
          <Route path='/pokemon' element={<Pokemon/>} />
          <Route path='/pokemon/:name' element={<PokemonDetails/>} />
          {/* El '*' indica cualquier otra ruta */}
        </Route>
        <Route path='/tareas/:id' element={<TaskDetail tasks={tasks} updateTasks={updateTasks} />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
