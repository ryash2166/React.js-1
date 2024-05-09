import React from 'react'
import {addToCart, RemoveToCart, emptyCart} from './ProductData/Action'
import { useDispatch } from 'react-redux'
import { ProductData } from './ProductData/ProductAction'
import Header from './Header'
function App() {

  const dispatch = useDispatch()
  const product = {
    name: 'Iphone',
    color:'Red',
    price: 60000,
    chip:'M2'
  }
  return (
    <>
    <Header></Header>
      <button onClick={()=> dispatch(addToCart(product))}>AddToCart</button>
      <button onClick={() => dispatch(RemoveToCart(product))}>RemoveToCart</button>
      <button onClick={() => dispatch(emptyCart(product))}>EmptyCart</button>
      <button onClick={() => dispatch(ProductData())}>ProductCart</button>
    </>
  )
}

export default App
