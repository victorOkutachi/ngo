import React, { useEffect, useRef } from 'react';
import './ShakeButton.css';

const ShakeButton = ({ onClick, children }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const interval = setInterval(() => {
      if (!btn) return;
      btn.classList.add('shakeCool');
      // remove the class after the animation duration
      setTimeout(() => btn.classList.remove('shakeCool'), 800);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfHsvozhEOZap5DkFgQTvpNlj2BN0i7bTacdTJlaP_3c-lSnw/viewform' target='blank'>
      <button
      ref={btnRef}
      className="my-button"
      onClick={onClick}
    >
      Join The Movement
    </button>
    </a>
    
  );
};

export default ShakeButton;
