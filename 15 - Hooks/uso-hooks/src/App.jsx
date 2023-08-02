import './App.css'
import Conteo from './components/Conteo'
<<<<<<< HEAD
import contador from './components/contador/contador'
=======
import {Routes, Route} from 'react-router'
import Login from './pages/login'
import Counter from './pages/Counter'
import { useState } from 'react'
>>>>>>> 09281840126a03f10332e0e7b3515f4911a729cb

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Conteo />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/counter' element={<Counter counter={counter} setCounter={setCounter} />}></Route>

      </Routes>
    </>
  )
}

export default App
