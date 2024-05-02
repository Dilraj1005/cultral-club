
import React from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import pp1 from '../images/pp1.jpg'
import pp2 from '../images/pp2.jpg'
import pp3 from '../images/pp3.jpg'
import pp5 from '../images/pp5.jpg'




const Cards = () => {

  const slideLeft =()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft -500
  }
  const slideRight =()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft +500
  }
  return (

    <>
    <h2 className='text-white mt-3 text-3xl underline hover:underline-offset-8 justify-center text-center font-serif  bg-purple-600 mx-[35vw] p-2 rounded-lg'>FACULTY</h2>
   
   
   <div className=' relative flex items-center my-3     max-w-full '>
 <MdChevronLeft className='opacity-50 bg-purple-600 rounded-full cursor-pointer hover:opacity-100 z-2 ' onClick={slideLeft} size={40} />
    <div id='slider' className=' p-3 rounded-xl flex  flex-row gap-3 w-full h-full overflow-x-auto scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
    
    <div className= 'border-2 border-slate-500 rounded-xl shadow-2xl  m-2 flex flex-col flex-grow-0 flex-shrink-0 flex-auto p-3  h-[400px] w-[280px] cursor-pointer hover:scale-105 ease-in-out duration-300 bg-purple-600 text-white    '>
        <img className='h-[55%]  rounded-full  mx-4 ' src={pp3}  />
        <h3 className='mt-4 text-xl font-bold'> Mrs. Ranjit Kaur</h3>
        <p className=' text-wrap '>Head of Department (Electronics and Communication)</p>

       
    </div>
    <div className= 'border-2 border-slate-500 rounded-xl shadow-2xl m-2 flex flex-col flex-grow-0 flex-shrink-0 flex-auto p-3 h-[400px] w-[280px] cursor-pointer hover:scale-105 ease-in-out duration-300 bg-purple-600 text-white  ' >
    <img className='h-[55%]  rounded-full  mx-4 ' src={pp1}  />
       
         <h3 className='mt-4 text-xl font-bold'> Mrs. Lovekesh</h3>
        <p className=' text-wrap '>President (Cultural Club ECE/ECM)</p>
       
 
    </div>
    <div className= 'border-2 border-slate-500 rounded-xl shadow-2xl m-2 flex flex-col flex-grow-0 flex-shrink-0 flex-auto p-3 h-[400px] w-[280px] cursor-pointer hover:scale-105 ease-in-out duration-300 bg-purple-600 text-white  ' >
    <img className='h-[55%]  rounded-full  mx-4 ' src={pp5}  />
       
         <h3 className='mt-4 text-xl font-bold'> Mrs. Aman Brar</h3>
        <p className=' text-wrap '>Vice President (Cultural Club ECE/ECM)</p>
       
 
    </div>
    <div className= 'border-2 border-slate-500 rounded-xl shadow-2xl m-2 flex flex-col flex-grow-0 flex-shrink-0 flex-auto p-3 h-[400px] w-[280px] cursor-pointer hover:scale-105 ease-in-out duration-300 bg-purple-600 text-white  ' >
    <img className='h-[55%]  rounded-full  mx-4 ' src={pp2}  />
       
         <h3 className='mt-4 text-xl font-bold'> Mrs. Beant Kaur</h3>
        <p className=' text-wrap'>Mentor (Cultural Club ECE/ECM)</p>
       
 
    </div>
   
   
    
    </div>
    <MdChevronRight className='opacity-50 bg-purple-600 rounded-full cursor-pointer hover:opacity-100 z-2 ' onClick={slideRight} size={40} />
  
   </div>
    </>  
  )
}

export default Cards