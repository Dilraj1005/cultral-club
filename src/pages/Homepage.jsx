import React from 'react'
import Marquee from '../Components/Marquee'
import Slideshow from '../Components/Card3'
import university_logo from "../images/pup.jpg"
import Cards from '../Components/Cards'
import Typewriter from '../Components/Typewriter';

const Homepage = () => {
  

  return (
    <>
  
    <div className='flex '>
      <img className='m-[20px] h-[70vh] rounded-lg' src={university_logo} alt="" />
    <div className='mt-[20px] flex justify-center items-center w-[50vw] h-[70vh]'>
    <Typewriter text="WELCOME TO THE CULTURAL CLUB!" />
    </div>
    </div>
    <div className=' m-0 p-0'>
      
     <Marquee />
     <Slideshow />
      <Cards />

    </div>
    </>
  )
}

export default Homepage