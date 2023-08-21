import './App.css'
import Conteo from './components/Conteo'
import {Routes, Route} from 'react-router'
import Login from './pages/login'
import Counter from './pages/Counter'
import { useState } from 'react'

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
