import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import ProductMain from './Pages/ProductMain'
import Cart from './Pages/Cart'



function App() {

  
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductMain/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
