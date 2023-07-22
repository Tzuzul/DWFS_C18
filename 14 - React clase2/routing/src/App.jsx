import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Tasks from './pages/Tasks'

function App() {

  return (
    <>
      <Routes>
        {/* Pagina principal */}
        <Route path='/' element={<Home/>}/>
        {/* Tareas */}
        <Route path='/tareas' element={<Tasks/>} />
      </Routes>
    </>
  )
}

export default App
