import React from 'react'
import Membercard from './Membercard'
import { Link } from 'react-router-dom'

const Members = ({Member}) => {
  return (
    <div className='gap-3 flex flex-col p-3  '>
        <h1 className='text-[20px] font-medium'>MEMBERS</h1>

{Member==false ? <div>"NO Members Yet !"</div>:<div className='h-[50vh] overflow-y-scroll stacked-fractions'>
{
   Member.map((values,index)=>{
       return <Membercard key={index} Membername={values.username}
        Memberphone={values.userphone} 
        Memberemail={values.useremail} 
        Memberbranch={values.userbranch}
        Memberrole={values.userrole}/>
      })}
        </div>}
       
    <Link to="/Membershipform"><button className='rounded-md bg-blue-500 px-5 '>Join now</button></Link> 
    </div>
  )
}

export default Members
