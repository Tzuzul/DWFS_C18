import './App.css'
import {Routes, Route} from 'react-router'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import AddMovie from './pages/AddMovie'
import Movies from './pages/Movies'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/movies/add' element={<AddMovie/>}></Route>
      </Routes>
    </>
  )
}

export default App
