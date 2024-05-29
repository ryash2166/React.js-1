import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'



const Header = () => {
    const result = useSelector((state) => state.Reducer)
    console.warn('HeaderData Called' , result);
  return (
    <div className="h-24 bg-teal-500 text-3xl flex justify-between text-white   items-center px-20 max-md:px-2 max-md:text-xl">
      <NavLink to='/' >
        <div className='font-mono tracking-wide'>
          ProductShop
        </div>
      </NavLink>
      <NavLink to='/Cart'>
        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span className='text-lg -mt-3'>{result.length}</span>
        </div>
      </NavLink>
    </div>
  )
}

export default Header
