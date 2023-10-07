import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import Checkout from './pages/Checkout'
import PaymentCompleted from './pages/PaymentCompleted'
import PublicOnlyRoute from './components/PublicOnlyRoute'
import PrivateRoute from './components/PrivateRoute'
import AddProduct from './pages/AddProduct'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart/checkout' element={<PrivateRoute children={<Checkout/>}/>} />
        <Route path='/cart/complete' element={<PaymentCompleted/>} />
        <Route path='/auth/login' element={<PublicOnlyRoute>
          <Login/>
        </PublicOnlyRoute>} />
        <Route path='/auth/signup' element={<PublicOnlyRoute>
          <SignUp/>
        </PublicOnlyRoute>} />
        <Route path='/admin/products/add' element={<ProtectedRoute allowedRoles={['ADMIN','EDITOR']}>
          <AddProduct/>
        </ProtectedRoute>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
