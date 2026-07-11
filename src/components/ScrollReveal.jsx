import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal - wraps children and animates them into view using IntersectionObserver.
 * Only animates opacity and transform for best performance.
 *
 * @param {React.ReactNode} children
 * @param {'fade-up' | 'fade-left' | 'fade-right' | 'fade-in'} animation - type of reveal animation
 * @param {number} delay - CSS animation delay in ms (for stagger effects)
 * @param {number} threshold - Intersection threshold (0–1)
 * @param {string} className - additional class names
 */
const ScrollReveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after triggering - animations play once
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  const animClass = isVisible ? `scroll-reveal--visible` : `scroll-reveal--hidden`;

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal scroll-reveal--${animation} ${animClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
