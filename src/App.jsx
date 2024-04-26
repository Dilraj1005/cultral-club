import Membershipform from "./Components/Membershipform";
import "./App.css"
import { useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom"
import Members from "./Components/Members";

import 'bootstrap/dist/css/bootstrap.min.css';

const Typewriter = ({ sentence, onComplete }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < sentence.length) {
        setCurrentText((prevText) => prevText + sentence[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        if (onComplete) onComplete();
      }
    }, 100); 

    return () => clearTimeout(timer);
  }, [currentIndex, sentence, onComplete]);

  return <h1 className=" font-bold text-[10vh] text-blue-500">{currentText}</h1>;
};

function App(){
  const initialSentence = "Welcome to the Members page!";
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, initialSentence.length * 300); 

    return () => clearTimeout(timer);
  }, []);

  const handleTypewriterComplete = () => {
    setTimeout(() => {
      setShowPage(true);
    }, 500); 
  };

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
  
    
  <div className="flex flex-row items-center gap-6 ml-6  justify-center mt-11">

  {!showPage && <Typewriter sentence={initialSentence} onComplete={handleTypewriterComplete} />}
      {showPage && (
        <>
          {/* Render the rest of your components here */}
          <div>
          <Routes>
    <Route path="/Membershipform" element={<Membershipform Addmember={Addmember} Member={Member} />} />
  </Routes>
   <div className=" bg-gray-300 flex justify-center items-center w-[50vw] gap-3 rounded-xl" >
   <Members Member={Member} />
   </div>
          </div>
        </>
      )}</div>
  
  
)
}
export default App;