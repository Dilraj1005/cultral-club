import React,{useRef} from "react";
import { CgPlayButtonR } from "react-icons/cg";
import { BsPauseBtnFill } from "react-icons/bs";


const UseRefPlayer = () => {
    const videoRef = useRef();
    const videoReff =useRef();
   
    const handlePlay = () =>{
        videoRef.current.play();

    };
    const handlePlay1= () =>{
        videoReff.current.play();
        

    };

    const handlePause =()=>{
        videoRef.current.pause();
    
        
    };
    const handlePause1 =()=>{
        videoReff.current.pause();
    };
    



    return(
    <>
 <h1 className="text-7xl hover:text-9xl text-center">MEMORIES</h1>

    <div className="grid-btn ">
        <CgPlayButtonR className="h-[50px] w-[50px]" onClick={handlePlay} /> 
        <BsPauseBtnFill  className="h-[50px] w-[50px]"onClick={handlePause}/>
    </div>
    <div className="vdo flex ">
       
    <div className="a h-6 w-[50%] bg-indigo-400" >
    <video  className="w-[80%] justify-center h-[500px]"  ref={videoRef} onMouseEnter={handlePlay} onMouseLeave={handlePause}>
        <source src="/Videos/videoBasant.mp4"/>
    </video>
    </div>
    <div className="b m-9 bg-red-400 w-[50%]" >
    <video height="200" width="300px" ref={videoReff} onMouseEnter={handlePlay1} onMouseLeave={handlePause1}>
        <source src="/Videos/videoBasant.mp4"/>
    </video>
    </div>
    {/* <div className="c m-9" >
    <video height="200" width="300px" ref={videoRef} onMouseEnter={handlePlay} onMouseLeave={handlePause}>
        <source src="/Videos/videoBasant.mp4"/>
    </video>
    </div> */}
    </div>
    </>
    );
};
export default UseRefPlayer;
