
import React from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import pp1 from '../images/pp1.jpg'
import pp2 from '../images/pp2.jpg'
import profile_pic from '../images/profile-pic.jpg'



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
   <div className=' relative flex items-center my-5     max-w-full '>
   <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 z-2 ' onClick={slideLeft} size={40} />
    <div id='slider' className=' p-3 rounded-xl flex  flex-row gap-3 w-full h-full overflow-x-auto scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
    
    <div className= 'border-2 border-slate-500 rounded-xl shadow-2xl  m-2 flex flex-col flex-grow-0 flex-shrink-0 flex-auto p-3  h-[400px] w-[280px] cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white     '>
        <img className='h-[55%]  rounded-full  mx-4 ' src={pp1}  />
        <h3> Mrs. Lovekesh</h3>
        <p className=' text-wrap'>kjdsf shdkfsdkf jhkfjhskj shfkjsd hkhfksjf kKJDSKAJsakljaslkjljLJLJ</p>

       
    </div>
    <div className= 'border-2 border-slate-500 rounded-xl shadow-2xl m-2 flex flex-col flex-grow-0 flex-shrink-0 flex-auto p-3 h-[400px] w-[280px] cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white    ' >
    <img className='h-[55%]  rounded-full  mx-4 ' src={pp2}  />
       
         <h3> Mrs. Beant Kaur</h3>
        <p className=' text-wrap'>kjdsf shdkfsdkf jhkfjhskj shfkjsd hkhfksjf kKJDSKAJsakljaslkjljLJLJ</p>
       
    </div>
    <div className='border-2 border-slate-500 rounded-xl shadow-2xl m-2 flex flex-grow-0 flex-shrink-0 flex-auto p-3 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white  h-[400px] w-[280px]'>
    <img className='h-[55%]  rounded-full  mx-4 ' src={profile_pic}  />
       <div>
         {/* <h3> <br />Mr. Xavier</h3>
        <p>kjdsf shdkfsdkf jhkfjhskj shfkjsd hkhfksjf</p> */}
       </div>
    </div>
    <div  className='border-2 border-slate-500 rounded-xl shadow-2xl m-2 flex flex-grow-0 flex-shrink-0 flex-auto p-3 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white  h-[400px] w-[280px]  '>
    <img className='h-[55%]  rounded-full float-left mx-4 ' src={profile_pic}  />
       <div>
         {/* <h3> <br />Mr. Xavier</h3>
        <p>kjdsf shdkfsdkf jhkfjhskj shfkjsd hkhfksjf</p> */}
       </div>
    </div>
    <div  className='rounded-xl shadow-2xl m-2 flex flex-grow-0 flex-shrink-0 flex-auto p-3 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white  h-[400px] w-[280px]  '>
         <img className='h-[55%]  rounded-full float-left mx-4 ' src={profile_pic}  />
       <div>
         {/* <h3> <br />Mr. Xavier</h3>
        <p>kjdsf shdkfsdkf jhkfjhskj shfkjsd hkhfksjf</p> */}
       </div>
    </div>
   
    
    </div>
    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 z-2 ' onClick={slideRight} size={40} />
  
   </div>
    </>
      
                        




    
        
    
   
  )
}

export default Cards