"use client"
import React, { useEffect, useRef } from 'react';

import { CiCirclePlus } from "react-icons/ci";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const cursor = cursorRef.current ;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    
    <div ref={cursorRef} className="custom-cursor">
      {/* Add your custom cursor styles here */}
      <CiCirclePlus className='text-3xl font-bold'/>
    </div>
  );
};

export default CustomCursor;