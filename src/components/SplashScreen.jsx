import React, { useState, useEffect, useRef } from 'react';
import './SplashScreen.css';

const NUM_STARS = 400;

const SplashScreen = ({ onComplete, onFadeStart }) => {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animFrameRef = useRef(null);
  const isHyperspaceRef = useRef(false);
  const hyperStartTimeRef = useRef(0);
  const stopRecyclingRef = useRef(false);

  const fullText = "HI, I AM NARENDRAPURAPU BALA SRI RAJESH. WELCOME TO MY PORTFOLIO.";

  // Initialize stars
  const initStars = (w, h) => {
    starsRef.current = Array.from({ length: NUM_STARS }, (v, i) => ({
      angle: Math.random() * Math.PI * 2,
      startRadius: Math.random() * 20 + 10, // Start very close to center like the screenshot
      radius: (Math.random() * 20 + 10) + (Math.random() * 1000), // Spread outwards
      baseSpeed: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random(),
      // Group stars into waves of 30. Each wave waits an extra 100ms before zooming.
      waveDelay: Math.floor(i / 30) * 100,
    }));
  };

  // Canvas draw loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    let lastTime = 0;

    const draw = (timestamp) => {
      const dt = Math.min(timestamp - lastTime, 50); // Cap dt
      lastTime = timestamp;

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      starsRef.current.forEach(star => {
        let isStarZooming = false;

        if (isHyperspaceRef.current) {
          const timeSinceHyper = timestamp - hyperStartTimeRef.current;
          if (timeSinceHyper > star.waveDelay) {
            isStarZooming = true;
          }
        }

        if (isStarZooming) {
          // Exponentially accelerate the star to mimic the CSS zoom
          star.speed = Math.min(star.speed * 1.15, 80);
        } else {
          star.speed = star.baseSpeed;
        }

        // Slowly drift outward normally, or streak outward in hyperspace
        star.radius += star.speed * (dt / 16);

        // Recycle star back to start radius when it flies off screen
        const maxDist = Math.max(w, h) + 200;
        if (star.radius > maxDist) {
          if (!stopRecyclingRef.current) {
            star.startRadius = Math.random() * 20 + 10;
            star.radius = star.startRadius;
            star.angle = Math.random() * Math.PI * 2;
            star.opacity = 0;
            star.speed = star.baseSpeed; // Reset speed for recycled stars
          } else {
            // Keep it permanently off-screen
            star.opacity = 0;
          }
        }

        if (star.opacity > 0) {
          // Fade in gradually if not fully visible
          if (star.opacity < 0.8) {
            star.opacity += 0.02;
          }

          const x = cx + Math.cos(star.angle) * star.radius;
          const y = cy + Math.sin(star.angle) * star.radius;

          // Stretch the star into a long streak based on its current speed
          let tailLength = isStarZooming ? Math.max(10, star.speed * 3) : 10;

          // CRITICAL FIX: Ensure the tail of the streak never crosses back into the hollow center!
          if (star.radius - tailLength < star.startRadius) {
            tailLength = Math.max(0.1, star.radius - star.startRadius);
          }

          const tailX = x - Math.cos(star.angle) * tailLength;
          const tailY = y - Math.sin(star.angle) * tailLength;

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
          // Thicken the star slightly as it zooms past
          ctx.lineWidth = isStarZooming ? Math.min(6, 2 + (star.speed / 20)) : 2;
          ctx.lineCap = "round";

          // Add glow
          ctx.shadowColor = '#ff5722';
          ctx.shadowBlur = isStarZooming ? 15 : 5;

          ctx.stroke();

          // Reset shadow for performance on next iteration
          ctx.shadowBlur = 0;
        }
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Typing sequence
  useEffect(() => {
    let timeoutId;
    const typeDelay = 1500 / fullText.length;
    let currentText = '';
    let i = 0;

    const typeSequence = () => {
      if (i < fullText.length) {
        currentText += fullText.charAt(i);
        setText(currentText);
        i++;
        timeoutId = setTimeout(typeSequence, typeDelay + (Math.random() * 20 - 10));
      } else {
        timeoutId = setTimeout(() => {
          setShowText(false);
          timeoutId = setTimeout(() => {
            // Trigger hyperspace inside the canvas loop
            isHyperspaceRef.current = true;
            hyperStartTimeRef.current = performance.now();

            // Allow stars to streak for 2.4 seconds, then immediately crossfade
            timeoutId = setTimeout(() => {
              // Trigger homepage fade-in immediately
              if (onFadeStart) onFadeStart();
              setFadeOut(true);

              // Stop recycling 100ms later — last stars trail off as homepage appears
              const stopTimer = setTimeout(() => { stopRecyclingRef.current = true; }, 100);

              // Unmount splash after fade completes
              timeoutId = setTimeout(() => {
                clearTimeout(stopTimer);
                if (onComplete) onComplete();
              }, 400);
            }, 2400);
          }, 800);
        }, 400);
      }
    };

    timeoutId = setTimeout(typeSequence, 500);
    return () => clearTimeout(timeoutId);
  }, [onComplete, onFadeStart]);

  return (
    <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
      <canvas
        ref={canvasRef}
        className="warp-scene"
      />

      <div className="splash-text-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 2rem' }}>
        <h1
          className="splash-hi"
          style={{
            opacity: showText ? 1 : 0,
            transition: 'opacity 0.8s ease',
            fontFamily: 'var(--font-code, monospace)',
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            color: 'var(--accent-color, #ff5722)',
            textAlign: 'center',
            margin: 0,
            lineHeight: '1.4'
          }}
        >
          {text}
          {text && <span className="cursor-blink" style={{ opacity: showText ? 1 : 0 }}></span>}
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
