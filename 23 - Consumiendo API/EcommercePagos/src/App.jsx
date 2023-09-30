import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import Checkout from './pages/Checkout'
import PaymentCompleted from './pages/PaymentCompleted'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart/checkout' element={<Checkout/>} />
        <Route path='/cart/complete' element={<PaymentCompleted/>} />
        <Route path='/auth/login' element={<Login/>} />
        <Route path='/auth/signup' element={<SignUp/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
