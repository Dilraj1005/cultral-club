import Membershipform from "./Components/Membershipform";
import "./App.css"
import { useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom"

import university_logo from "./images/university_logo.jpg"
import Navbar from './Components/Navbar'
import Members from "./Components/Members";
import Homepage from './pages/Homepage'

import Events from './pages/Events'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';





function App(){
 

  //add2

  const[Member,setMember]=useState([])
  const userdata=async()=>{
    await fetch("https://cultral-group-default-rtdb.firebaseio.com/Users.json")
    .then((res)=>res.json())
      .then((data)=>{
        let temp=[]
        for(let key in data){
          temp.push(data[key]["Formdata"])
          }
          
         setMember(temp)
      })
    .catch((error)=>console.log(error))
  }

useEffect(()=>{

  userdata()
},[])
  function Addmember(username,userphone,useremail,userrole,userbranch){
    const newMember= {
      username:username,
      userphone:userphone,
      useremail:useremail,
      userrole:userrole,
      userbranch:userbranch,
      }
     setMember([...Member,newMember])
      ;}
      return(
        <>
            {/* Render the rest of your components here */}
            < div className="overflow-hidden  ">
  <Navbar />
  <div className="  mt-6 ">
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path="/members" element={<div className=" bg-gray-700 flex justify-center items-center w-[50vw] gap-3 rounded-xl" >
   <Members Member={Member} />
   </div>} />
   <Route path="/Membershipform" element={<Membershipform  Addmember={Addmember}/>}/>
          <Route path='/events' element={<Events />} />
         <Route path='/about' element={<About />} />
  </Routes>
   
   </div>
  </div>
          </>
      )}
export default App;