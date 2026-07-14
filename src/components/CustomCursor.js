"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Direct motion values for zero-lag tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const mouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over a clickable element
      if (
        e.target.tagName.toLowerCase() === 'a' || 
        e.target.tagName.toLowerCase() === 'button' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.classList.contains('magnetic')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Hide default cursor globally
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      <style>{`
        /* Hide cursor globally when custom cursor is active */
        body * {
          cursor: none !important;
        }
      `}</style>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '24px',
          height: '24px',
          pointerEvents: 'none',
          zIndex: 99999,
          x: cursorX,
          y: cursorY,
          transformOrigin: 'top left' // Ensure it scales from the tip
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* A sleek, sharp pointer arrow */}
          <path 
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L5.5 3.21z" 
            fill="var(--primary-color)" 
            stroke="#ffffff" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </>
  );
}
