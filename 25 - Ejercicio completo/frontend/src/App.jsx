import Navbar from './components/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {Routes, Route} from 'react-router-dom'
import PostDetails from './pages/PostDetails'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/posts/:id' element={<PostDetails/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
