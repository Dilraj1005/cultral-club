import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100); 


      return () => clearInterval(intervalId);
    }
  }, [text, currentIndex]);

  return <h1 className='font-bold text-[100px] text-white glow-purple'>{displayText}</h1>;
};

export default Typewriter;
