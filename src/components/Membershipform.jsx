import { useState } from "react"
import * as yup from "yup"
let email="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/"
const Membershipform = ({Addmember,Member}) => {
  const [Formdata,setFormdata]=useState({
    username:"",
    userphone:0,
    useremail:"",
    userrole:"",
    userbranch:""
})
//schema
 const formschema=yup.object().shape( {
  username:yup.string().required("Username must be provided").trim(),
  useremail:yup.string().required("Usermail must be provided").trim().email(email),
  userphone:yup.number().required("Phone no. must be provided").min(1000000000).max(9999999999).integer().positive(),
  userrole:yup.string().required("Role must be provided").trim(),
  userbranch:yup.string().required("Branch must be provided").trim(),

})
 return (
    <div className='flex justify-center items-center '>
      <form action="" 
      onSubmit={async(e)=>{e.preventDefault()
           for(let i of Member){
            if (i["useremail"]==Formdata.useremail){
              alert("Member from this email already exist")
              return
            }
           }
        const options={
          method:"POST",
          headers:{
            "Content-Type":"aplication/json"
          },
          body:JSON.stringify({
            Formdata
          })
        }
        const res= await fetch('https://cultral-group-default-rtdb.firebaseio.com/Users.json',options)
        if (res){console.log(res)}
        else{console.log(error)}
        try {
          
          await formschema.validate(Formdata,{
            abortEarly: false,})
            alert("submited sucsessfully!")
            setFormdata(Formdata)
          Addmember(Formdata.username,Formdata.userphone,Formdata.useremail,Formdata.userrole,Formdata.userbranch)
        }catch (error) {alert(error.message)} }}
      className='flex flex-col gap-7 border border-black rounded-lg p-12 bg-gray-500'>
      <h1 className='ml-[1vw] text-lg font-bold'>MEMBERSHIP FORM</h1>
      <input 
      id="username"
      name="username"
      value={Formdata.username}
      onChange={(e)=>{setFormdata({...Formdata,[e.target.name]:e.target.value})}}
      type="text" placeholder='Name' className='border px-4 py-2 border-black rounded-md'/>
      <input 
      id="userphone"
     name="userphone"
      value={Formdata.userphone}
      onChange={(e)=>{setFormdata({...Formdata,[e.target.name]:e.target.value})}}
      type="text" placeholder='Phone no.' className='border px-4 py-2 border-black rounded-md'/>
      <input 
      id="useremail"
      name="useremail"
      value={Formdata.useremail}
      onChange={(e)=>{setFormdata({...Formdata,[e.target.name]:e.target.value})}}
      type="email"  placeholder='E-mail' className='border px-4 py-2 border-black rounded-md'/>
      <input
      id="userrole"
      name="userrole"
      value={Formdata.userrole}
      onChange={(e)=>{setFormdata({...Formdata,[e.target.name]:e.target.value})}}
       type="text"  placeholder='Role' className='border px-4 py-2 border-black rounded-md'/>
      <select
      id="userbranch"
       name="userbranch"
       value={Formdata.userbranch}
       onChange={(e)=>{setFormdata({...Formdata,[e.target.name]:e.target.value})}}
        className='border px-4 py-2 border-black rounded-md'>
        <option value="">Select Your Branch</option>
        <option value="Ece">ECE</option>
        <option value="Ecm">ECM</option>
      </select>
      <input type="submit" className='border border-black rounded-md cursor-pointer bg-blue-500 hover:scale-90'/>
      </form>
    </div>  )
}
export default Membershipform
