import React, { useState } from 'react';
import '../App.css'; // Import CSS file with marquee styles

const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className='w-[600px] h-[400px]  m-4 p-4  rounded-lg shadow-lg border-2 border-white bg-purple-600 float-left'>

<h3 className='text-[25px] font-bold text-white'>Important Notice</h3>
    <div 
      className={`marquee ${isPaused ? 'paused' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Your marquee text goes here */}
      
      <p className='text-wrap whitespace-normal text-white'><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet leo vel metus consequat tincidunt. 
        {<br/>} {<br/>}

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, explicabo exercitationem iste magnam in necessitatibus neque maiores, a architecto debitis earum beatae expedita molestiae doloremque, sed numquam consectetur harum dolorum.
        {<br/>} {<br/>}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum harum aliquid quaerat porro vero beatae impedit, similique nesciunt doloremque dolorum recusandae consequuntur, voluptatibus consequatur at eveniet voluptate nam magnam?
       </span>
       
      
        </p>
    </div>
    </div>
  );
};

export default Marquee;
