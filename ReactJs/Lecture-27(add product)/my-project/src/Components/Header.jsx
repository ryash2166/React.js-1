import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'



const Header = () => {
    const result = useSelector((state) => state.Reducer)
    console.warn('HeaderData Called' , result);
  return (
    <div className="h-24 bg-teal-500 text-3xl flex justify-between text-white   items-center px-20">
      <NavLink to='/' >
        <div className='font-mono tracking-wide'>
          ProductShop
        </div>
      </NavLink>
      <NavLink to='/cart'>
        <div>
          <span>{result.length}</span>
        </div>
      </NavLink>
    </div>
  )
}

export default Header
