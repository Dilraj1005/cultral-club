import Membershipform from "./components/Membershipform";
import "./App.css"
import { useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom"
import Membercard from "./components/Membercard";
import Members from "./components/Members";


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
  console.log(Member)
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
  <div className="flex flex-row items-center gap-6 ml-6  justify-center mt-11">
  <Routes>
    <Route path="/Membershipform" element={<Membershipform Addmember={Addmember} Member={Member}/>} />
  </Routes>
   <div className=" bg-gray-700 flex justify-center items-center w-[50vw] gap-3 rounded-xl" >
   <Members Member={Member} />
   </div>
   </div>
  </>
)
}
export default App;