import './App.css'
import Conteo from './components/Conteo'
import {Routes, Route} from 'react-router'
import Login from './pages/login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Conteo/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

      </Routes>
    </>
  )
}

export default App
