import React, { useEffect } from 'react'
import {addToCart, RemoveToCart, emptyCart} from '../ProductData/Redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import { ProductData } from '../ProductData/ProductRedux/ProductAction'

const ProductMain = () => {

    const data = useSelector((state) => state.ProductReducer)
    
    console.warn('ProductMain' , data);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ProductData())
    } , [])
    
  return (
    <div className='mt-4'>
      {/* <button onClick={()=> dispatch(addToCart(product))} className='mr-3 btn'>AddToCart</button> */}
      {/* <button onClick={() => dispatch(RemoveToCart(product))} className='mr-3 btn'>RemoveToCart</button> */}
      {/* <button onClick={() => dispatch(emptyCart(product))} className='mr-3 btn'>EmptyCart</button> */}
      {/* <button onClick={() => dispatch(ProductData())} className='mr-3 btn'>ProductCart</button> */}

      <div className='flex flex-wrap gap-10'>
        {
            data.flat().map((item) => {
                return(
                    <div key={item.id}>
                        {/* <div className='w-96'>
                            <img src={item.image} alt="" className='h-64' />
                            <p>{item.title}</p>
                            <span>{item.price}</span>
                            <div className='flex'>
                                <button onClick={()=> dispatch(addToCart(item))} className='btn'>AddToCart</button>
                                <button onClick={() => dispatch(RemoveToCart(item))} className='btn'>RemoveToCart</button>
                            </div>
                        </div> */}
                        <div className="card">
                            <img className="card-img-top h-64 object-contain" src={item.image} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                {/* <p className="card-text">{item.description}</p> */}
                                <span>{item.price}</span>
                                <div className='flex'>
                                    <button onClick={()=> dispatch(addToCart(item))} className='mr-3 btn'>AddToCart</button>
                                    <button onClick={() => dispatch(RemoveToCart(item))} className='mr-3 btn'>RemoveToCart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default ProductMain
