import React, { useState, useEffect } from 'react';
import heroImage from '../assets/me.webp';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const [terminalText, setTerminalText] = useState('');
  
  useEffect(() => {
    const fullText = `> SYSTEM BOOT SEQUENCE INITIATED...
> LOADING KERNEL... OK
> MOUNTING FILE SYSTEMS... OK
> INITIALIZING DEV ENVIRONMENT...
  - DART SDK VERIFIED
  - JAVA RUNTIME VERIFIED
  - PYTHON ENV ACTIVATED
> STARTING LOCALHOST... 
> LISTENING ON PORT 8080...
> ALL SYSTEMS NOMINAL. READY FOR DEVELOPMENT.`;

    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 20); // Fast typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section">
      <div className="about-split-layout">

        {/* Left Side: Text Content */}
        <ScrollReveal animation="fade-right" delay={0}>
          <div className="about-content">
            <p className="hero-greeting" style={{ marginBottom: '2rem' }}>ABOUT ME</p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              I'm a Computer Science undergraduate building systems that are meant to last. My work sits at the intersection of cross-platform mobile development and full-stack architecture—where the engineering decisions made early determine everything that follows.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              My primary tools are <strong style={{color: 'var(--text-primary)'}}>Dart</strong> and <strong style={{color: 'var(--text-primary)'}}>Java</strong>. On the frontend, I build seamless, cross-platform mobile applications with <strong style={{color: 'var(--text-primary)'}}>Flutter</strong>. On the backend, I design reliable APIs and scalable services—systems built around clean separation of concerns and robust data flow.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.8' }}>
              I'm methodical about system design, opinionated about code quality, and serious about building things that work correctly under real-world conditions.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {['B.Tech CSE', '2023 - 2027', 'Open to Work'].map((pill, i) => (
                <span key={i} style={{
                  border: '1px solid var(--text-secondary)',
                  color: 'var(--text-secondary)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.85rem'
                }}>{pill}</span>
              ))}
            </div>

            {/* Premium Mock Terminal Output */}
            <div style={{
              background: '#0d1117',
              border: '1px solid var(--card-border)',
              borderRadius: '8px',
              padding: '1.25rem',
              fontFamily: 'var(--font-code)',
              fontSize: '0.8rem',
              color: '#00df89',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              minHeight: '220px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'flex',
                gap: '6px',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                paddingBottom: '0.5rem'
              }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }}></span>
              </div>
              <div>{terminalText}<span className="blink-cursor">_</span></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Side: Portrait Photo */}
        <ScrollReveal animation="fade-left" delay={200}>
          <div className="about-image-container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            minHeight: '400px',
            position: 'relative'
          }}>
            <img
              src={heroImage}
              alt="Narendrapurapu Bala Sri Rajesh portrait"
              loading="lazy"
              style={{
                width: '100%',
                maxHeight: '500px',
                objectFit: 'contain',
                objectPosition: 'center',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                filter: 'drop-shadow(0 0 20px rgba(0, 230, 150, 0.1))'
              }}
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;
