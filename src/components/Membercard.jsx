import React from 'react'

function Membercard ({Membername,Memberphone,Memberemail,Memberbranch,Memberrole}){
  return(
    <div className='flex  justify-center items-center gap-28 border rounded-md w-[40vw] p-3 m-3 bg-white text-black '>
      <div className='flex flex-col items-center'>
     <img src="https://cdn-icons-png.freepik.com/256/3237/3237472.png?semt=ais_hybrid" alt="" className='h-[70px]  rounded-full'/>
      <h1 className='text-[17px] font-semibold'>{Membername}</h1>
      </div>
    <div className='flex flex-col'>
      <p>E-mail : {Memberemail}</p>
      <p>Contact : {Memberphone}</p>
      <p>Branch : {Memberbranch}</p>
      <p>Role : {Memberrole}</p>
      </div>
    </div>)}

  
export default Membercard
