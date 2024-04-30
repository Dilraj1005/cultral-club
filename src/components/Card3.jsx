import React from "react";
import '../App.css' 
import event1 from "../images/event1.jpeg"
import event2 from "../images/event2.jpeg"

const colors = [event1, event2];
const delay = 2500;

function Slideshow() {

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
    
    
    <div className="slideshow w-[300px]  mt-4 ">
      <h3 className="text-white font-bold text-[25px] ml-[2vw]">UPCOMING EVENTS</h3>
      <div
        className="slideshowSlider "
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div  key={index}
          className="slide  p-2  ">
            
            <img 
           className="rounded-lg  border  border-slate-500 h-[400px] "
            src={backgroundColor}  alt="img" />
          </div>
          
        ))}
      </div>

      <div className="slideshowDots ">
        {colors.map((_, idx) => (
          <div style={{height:"10px", width:"10px" }}
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    </>
  );
}



export default Slideshow ;