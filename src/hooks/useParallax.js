import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that returns a scroll-based parallax offset value.
 * @param {number} speed - Multiplier for how fast the element moves relative to scroll (0.1 = subtle, 0.5 = strong)
 * @param {number} initialOffset - Initial scroll offset (0 = top of page)
 * @returns {{ ref: React.RefObject, offsetY: number }}
 */
const useParallax = (speed = 0.2) => {
  const [offsetY, setOffsetY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY * speed);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offsetY;
};

export default useParallax;
