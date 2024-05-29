import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {

  const CartData = useSelector(state => state.Reducer)
  const amount = CartData.length && CartData.map((item) => item.price).reduce((prev , next) => prev += next)
  console.log(CartData,'hello');
  
  return (
    <>
    {/* <div>
      {
        CartData.map((item) => {
          return(
   
            <div key={item.id} className='row'>                     
              <Card className='w-[18rem] my-2'>
                  <Card.Img variant="top" src={item.image} className='h-48 object-contain my-2' />
                  <Card.Body>
                      <Card.Text className='pb-2 text-muted'>
                      {item.category}
                      </Card.Text>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text className='pb-2 text-danger'`>
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
    </div> */}
    <h1 className='flex justify-center font-mono font-[600] text-3xl mt-4 max-md:text-xl'>Shopping Cart</h1>
    <div className='container mx-auto flex justify-between mt-5 max-md:block '>
      <table className='w-[80%] text-center table-fixed max-md:w-auto'>
        <thead>
          <tr>
            <th className='border-2 border-black text-lg py-3'>Item Image</th>
            <th className='border-2 border-black text-lg py-3'>Item Name</th>
            <th className='border-2 border-black text-lg py-3'>Item Price</th>
          </tr>
        </thead>
        {
          CartData.map((item) => {
            return(
              <tbody key={item}>
              <tr className='' key={item.id}>
                <td className='border-2 py-3 border-black'>
                  <img src={item.image} className='h-28 mx-auto' />
                </td>
                <td className='border-2 border-black '>
                  {item.title}
                </td>
                <td className='border-2 border-black '>
                  {item.price}
                </td>
                
              </tr>
              </tbody>
            )
          })
        }
      </table>
      <div className='max-md:mt-4'>
        <table className='text-center'>
          <thead>
            <tr className='border-2 text-lg  border-black'>
              <th className='px-3 py-2'>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-2 border-black'>
              <td className=''>{amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Cart
