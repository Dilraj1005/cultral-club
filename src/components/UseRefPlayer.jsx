import React,{useRef} from "react";
const UseRefPlayer = () => {
    const videoRef = useRef();
    const videoReff =useRef();
   const videoRefff=useRef()

    const handlePlay = () =>{
        videoRef.current.play();

    };
    const handlePlay2 = () =>{
        videoReff.current.play();

    };
    const handlePlay1= () =>{
        videoRefff.current.play();
        

    };

    const handlePause =()=>{
        videoRef.current.pause();
    
        
    };
    const handlePause2 =()=>{
        videoReff.current.pause();
    
        
    };
    const handlePause1 =()=>{
        videoRefff.current.pause();
    };
    



    return(
    <>

    
 <h1 className="text-5xl  text-center text-white">MEMORIES</h1>
    <div className=" flex gap-4 ml-7">
       
    <div className=" p-3 w-[30%]  flex justify-center h-[550px]" >
    <video  className="w-[80%] justify-center h-[500px]"  ref={videoRef} onMouseEnter={handlePlay} onMouseLeave={handlePause}>
        <source src="/Videos/videoBasant.mp4"/>
    </video>
    </div>
    <div className="p-3 w-[30%]  flex justify-center h-[550px]" >
    <video height="200" width="300px"  className=" "  ref={videoReff} onMouseEnter={handlePlay2} onMouseLeave={handlePause2}>
        <source src="/Videos/event1.mp4"/>
    </video>
    </div>
    <div className="p-3 w-[30%]  flex justify-center h-[550px]" >
    <video height="200" width="300px" className=" " ref={videoRefff} onMouseEnter={handlePlay1} onMouseLeave={handlePause1}>
        <source src="/Videos/Freshers_2k23.mp4"/>
    </video>
    </div>
   
    </div>
    </>
    );
};
export default UseRefPlayer;
