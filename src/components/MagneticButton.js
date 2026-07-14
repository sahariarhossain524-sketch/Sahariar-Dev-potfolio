"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className, onClick, style, type = "button", as = "button" }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Pull the button towards the mouse by 30% of the distance
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  
  const MotionComponent = as === "div" ? motion.div : motion.button;
  const componentProps = as === "button" ? { type } : {};

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`magnetic ${className || ''}`}
      onClick={onClick}
      style={style}
      {...componentProps}
    >
      {children}
    </MotionComponent>
  );
}
