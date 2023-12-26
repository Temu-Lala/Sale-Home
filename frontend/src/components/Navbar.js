import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import Product from './Product'
function Navbar() {
  return (
    <div className=' w-full h-20  top-0 fixed z-50 flex flex-row  bg-black text-blue-600 justify-between border-b-4'>
    
    <div className=' pl-12'>
        <img src={logo} alt='Logo' className=' w-full h-full' />
    </div>
    
    <div className=' text-xl pr-56 pt-6 flex list-none gap-10 font-bold  float-right cursor-pointer  '>
        <li className='hover:underline underline   '> <Link to={'/' } > Home</Link></li>
        <li className='hover:underline  filter blur-3 opacity-80 hover:opacity-100 '> <Link to={'/Product' } > Products</Link> </li>
        <li className='hover:underline  filter blur-3 opacity-80 hover:opacity-100'><Link to={'/About' } > About</Link> </li>
        <li className='hover:underline  filter blur-3 opacity-80 hover:opacity-100'><Link to={'/Contact' } > Contact</Link> </li>
    </div>
    
    </div>
  )
}

export default Navbar