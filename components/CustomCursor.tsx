"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateMousePosition);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-hover');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 800, 
          damping: 35,
          mass: 0.5
        }}
      />
      
      {/* Cursor trail */}
      <motion.div
        className="cursor-trail"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 25, 
          mass: 0.8
        }}
      />
    </>
  );
}