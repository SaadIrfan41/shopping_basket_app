import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ErrorPage from './Pages/404'
import Cart from './Pages/Cart'
import Home from './Pages/Home'

import SingleProduct from './Pages/SingleProduct'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='h-screen '>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<SingleProduct />} />

          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
