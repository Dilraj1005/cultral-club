import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../images/logo.png'
import logoImg2 from '../images/logo2.png'

const Navbar = () => {
  return (
  <header className='sticky top-0  bg-white shadow-lg z-50 h-24 '>
    <div className='flex items-center pl-5 relative '>
    <div>
    <img src= {logoImg2} className='h-[90px] max-w-[14rem]  ' />
    </div>
    <div className='flex flex-shrink-0 items-center ml-44 gap-10 '>
    
            <Link to="/">HOME</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/events">EVENTS</Link>
            <Link to="/members">MEMBERS</Link>
            <Link to="/about">ABOUT</Link>
            
         </div>
       
    </div>
    
  

   </header> 
  )
}

export default Navbar