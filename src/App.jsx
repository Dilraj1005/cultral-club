import Membershipform from "./Components/Membershipform";
import "./App.css"
import { useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import Members from "./Components/Members";
import Homepage from './pages/Homepage'
import Contactpage from './pages/Contactpage'
import Events from './pages/Events'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';




function App(){
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
  < div className="overflow-hidden  ">
  <Navbar/>
  <div className="flex flex-row items-center gap-6 mt-6  justify-center">
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path="/members" element={<div className=" bg-gray-700 flex justify-center items-center w-[50vw] gap-3 rounded-xl" >
   <Members Member={Member} />
   </div>} />
   <Route path="/Membershipform" element={<><Membershipform />,<div className=" bg-gray-700 flex justify-center items-center w-[50vw] gap-3 rounded-xl" >
   <Members Member={Member} />
   </div></>}/>
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/events' element={<Events />} />
         <Route path='/about' element={<About />} />
  </Routes>
   
   </div>
  </div>
  
)
}
export default App;