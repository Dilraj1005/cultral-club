import React from 'react'
import university_logo from "../images/university_logo.jpg"
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
    <div className='float-left m-0 p-0'>
      
    <Cards />
    </div>
    </>
  )
}

export default Homepage