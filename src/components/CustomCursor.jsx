import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const outlinePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('.glass-card') ||
        target.closest('.skill-box') ||
        target.closest('.achievement-card') ||
        target.closest('.social-icon') ||
        target.closest('.nav-btn');

      setIsHovering(Boolean(isInteractive));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    let animId;
    const animateOutline = () => {
      // Lerp outline position toward exact mouse position for smooth trailing
      outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * 0.18;
      outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * 0.18;

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outlinePos.current.x}px, ${outlinePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(animateOutline);
    };

    animId = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hover' : ''}`}
        style={{ top: 0, left: 0 }}
      />
      <div 
        ref={outlineRef}
        className={`cursor-outline ${isHovering ? 'hover' : ''}`}
        style={{ top: 0, left: 0 }}
      />
    </>
  );
};

export default CustomCursor;
