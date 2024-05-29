// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import emart from '../assets/emart.webp'
const Navbar = () => {
  return (
    <nav className=" p-[1rem] flex items-center  border-b-[1px] border-slate-500 bg-zinc-300">
      <div className="navbar-logo">
        <img src={emart} alt="Logo" className='h-9 max-lg:h-8' />
        
      </div>
      <div className='flex justify-center w-full'>
        <ul className="flex pr-32 gap-x-4 max-lg:pr-0 max-lg:gap-x-2 text-[18px] ">
          <li className='font-[500] hover:font-[600]'>
            <Link to="/">Home</Link>
          </li>
          <li className='font-[500] hover:font-[600]'>
            <Link to="/about">About</Link>
          </li>
          <li className='font-[500] hover:font-[600]'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
