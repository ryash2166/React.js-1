import React, { useEffect } from 'react'
import {addToCart, RemoveToCart, emptyCart} from '../ProductData/Redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import { ProductData } from '../ProductData/ProductRedux/ProductAction'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

      <div className='flex flex-wrap gap-x-10 my-3 ml-4'>
        {
            data.flat().map((item) => {
                return(
                    <div key={item.id} className='row'>                     
                        <Card className='w-[18rem] my-2'>
                            <Card.Img variant="top" src={item.image} className='h-48 object-contain my-2' />
                            <Card.Body>
                                <Card.Text className='pb-2 text-muted'>
                                {item.category}
                                </Card.Text>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text className='pb-2 text-danger'>
                                $ {item.price}
                                </Card.Text>
                                <div className='flex gap-x-2 items-center'>
                                    <Button onClick={()=> dispatch(addToCart(item))} className='bg-teal-600 border-2 border-solid border-teal-400 hover:text-slate-700 hover:border-slate-700 hover:bg-teal-500 hover:scale-110 duration-300 ease-in-out hover:rounded-xl px-4 mt-2' size='md'>ADD</Button>
                                    <Button onClick={()=> dispatch(RemoveToCart(item))} className='bg-teal-600 border-2 border-solid border-teal-400 hover:text-slate-700 hover:border-slate-700 hover:bg-teal-500 hover:scale-110 duration-300 ease-in-out hover:rounded-xl px-4 mt-2' size='md'>Remove</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default ProductMain
