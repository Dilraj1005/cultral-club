import React from 'react'
import { Link } from 'react-router-dom'
import logoImg2 from '../images/logo2.png'

const Navbar = () => {
  return (
  <header className='sticky top-0  bg-white shadow-lg z-50 h-24 flex items-center '>
    <div className='flex items-center pl-5 relative '>
    <div>
    <img  src= {logoImg2} className='h-[60px] max-w-[14rem]' />
    </div>
    <div className='flex flex-shrink-0 items-center ml-44 gap-10 '>
    
            <Link to="/" className=' hover:scale-125 hover:text-slate-500 hover:font-bold'>HOME</Link>
            <Link to="/events" className=' hover:scale-125 hover:text-slate-500 hover:font-bold'>EVENTS</Link>
            <Link to="/members" className=' hover:scale-125 hover:text-slate-500 hover:font-bold'>MEMBERS</Link>
            <Link to="/about" className=' hover:scale-125 hover:text-slate-500 hover:font-bold'>ABOUT</Link>
            <Link to="/Membershipform"><button className='rounded-md bg-blue-500 px-5 ml-[34vw] hover:scale-125 hover:font-bold'>Join now</button></Link>
         </div>
       
    </div>
    
  

   </header> 
  )
}

export default Navbar