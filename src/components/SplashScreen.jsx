import React, { useState, useEffect, useMemo } from 'react';
import './SplashScreen.css';
const SplashScreen = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState(true);
  const [hyperspace, setHyperspace] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  const fullText = "HI, I AM NARENDRAPURAPU BALA SRI RAJESH. WELCOME TO MY PORTFOLIO.";

  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 150; // Randomly anywhere across the screen
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      
      const delay = Math.random() * -3; 
      const duration = 0.5 + Math.random() * 1.5;
      
      starArray.push({
        id: i,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        '--rot': `${angle}rad`
      });
    }
    return starArray;
  }, []);

  useEffect(() => {
    let timeoutId;
    const typeDelay = 1500 / fullText.length; 

    let currentText = "";
    let i = 0;

    const typeSequence = () => {
      if (i < fullText.length) {
        currentText += fullText.charAt(i);
        setText(currentText);
        i++;
        // Expert typist: slight random variance but very fast
        timeoutId = setTimeout(typeSequence, typeDelay + (Math.random() * 20 - 10));
      } else {
        // All finished typing, pause very briefly
        timeoutId = setTimeout(() => {
          
          // Fade out the text
          setShowText(false);
          
          // Wait for fade out, then trigger hyperspace
          timeoutId = setTimeout(() => {
            setHyperspace(true);
            
            // Wait for acceleration effect to be visible
            timeoutId = setTimeout(() => {
              setFadeOut(true);
              
              timeoutId = setTimeout(() => {
                if (onComplete) onComplete();
              }, 1000); 
              
            }, 1500);
            
          }, 800); // Time for text to fade
          
        }, 400); // Short pause after typing
      }
    };

    // Start sequence after a brief delay
    timeoutId = setTimeout(typeSequence, 500);

    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  return (
    <div className={`splash-container ${fadeOut ? 'fade-out' : ''} ${hyperspace ? 'hyperspace' : ''}`}>
      
      {/* Portal Fly-Through Effect */}
      <div className="vehicle-overlay">
        <div className="portal-ring" />
      </div>

      {/* Warp Speed 3D Stars */}
      <div className="warp-scene">
        {stars.map(star => (
          <div 
            key={star.id} 
            className="star-wrapper" 
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration,
              '--rot': star['--rot']
            }}
          >
            <div className="warp-star" />
          </div>
        ))}
      </div>

      <div className="splash-text-container" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 2rem' }}>
        
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
          <span className="cursor-blink" style={{ opacity: showText ? 1 : 0 }}></span>
        </h1>
      </div>
      
    </div>
  );
};

export default SplashScreen;
