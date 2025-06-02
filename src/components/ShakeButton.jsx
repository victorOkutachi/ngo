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
    <button
      ref={btnRef}
      className="my-button"
      onClick={onClick}
    >
      Join The Movement
    </button>
  );
};

export default ShakeButton;
