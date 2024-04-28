import React from 'react'
import Membercard from './Membercard'
import { Link } from 'react-router-dom'

const Members = ({Member}) => {
  return (
    
    <div className='gap-3 flex flex-col p-3 text-white h-auto'>
        <h1 className='text-[5vh] font-medium text-white '>MEMBERS</h1>

{Member==false ? <div className='text-black font-bold text-[5vh]'>"NO Members Yet !"</div>:<div className='h-[50vh] overflow-y-scroll stacked-fractions'>
{
   Member.map((values,index)=>{
       return <Membercard key={index} Membername={values.username}
        Memberphone={values.userphone} 
        Memberemail={values.useremail} 
        Memberbranch={values.userbranch}
        Memberrole={values.userrole}/>
      })}
       
        </div>}
        <div>
        <Link to="/Membershipform"><button className='rounded-md bg-black px-5  ml-5 hover:scale-125 hover:font-bold'>Join now</button></Link>
        </div>
     
    </div>
  )
}

export default Members
