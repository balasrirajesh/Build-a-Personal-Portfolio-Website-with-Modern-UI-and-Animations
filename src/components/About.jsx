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
  - FLUTTER / REACT FRAMEWORKS ACTIVE
> STARTING LOCALHOST SERVER... 
> LISTENING ON PORT 8080...
> ALL SYSTEMS NOMINAL. READY FOR DEVELOPMENT.`;

    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section">
      <div className="about-split-layout">

        {/* Left Side: Text Content */}
        <ScrollReveal animation="fade-right" delay={0}>
          <div className="about-content">
            <p className="hero-greeting" style={{ marginBottom: '1.5rem' }}>ABOUT ME</p>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 800, lineHeight: '1.2' }}>
              Building scalable cross-platform apps & backend architecture.
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: '1.8' }}>
              I'm a Computer Science undergraduate building systems that are engineered to last. My work sits at the intersection of cross-platform mobile development and full-stack architecture—where early engineering decisions determine scalability and longevity.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: '1.8' }}>
              My primary tools are <strong style={{color: 'var(--accent-emerald)'}}>Dart</strong> and <strong style={{color: 'var(--accent-color)'}}>Java</strong>. On the mobile frontend, I build seamless apps with <strong style={{color: 'var(--accent-emerald)'}}>Flutter</strong>. On the backend, I design reliable APIs, microservices, and robust data workflows.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {['B.Tech CSE (2023-2027)', 'Flutter & Dart', 'Java & Spring Boot', 'Open to Work'].map((pill, i) => (
                <span key={i} style={{
                  border: '1px solid rgba(0, 223, 137, 0.25)',
                  background: 'rgba(0, 223, 137, 0.06)',
                  color: 'var(--accent-emerald)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.5px'
                }}>{pill}</span>
              ))}
            </div>

            {/* Premium Mock Terminal Emulator */}
            <div style={{
              background: '#090d12',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '14px',
              padding: '1.25rem 1.5rem',
              fontFamily: 'var(--font-code)',
              fontSize: '0.82rem',
              color: 'var(--accent-emerald)',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
              boxShadow: '0 15px 35px rgba(0,0,0,0.6), 0 0 20px rgba(0, 223, 137, 0.08)',
              minHeight: '230px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                paddingBottom: '0.6rem'
              }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#27c93f' }}></span>
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.72rem', letterSpacing: '1px' }}>bash ~ dev-environment</span>
              </div>
              <div style={{ lineHeight: '1.7' }}>{terminalText}<span className="blink-cursor">_</span></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Side: Portrait Photo with Glowing Frame */}
        <ScrollReveal animation="fade-left" delay={200}>
          <div className="about-image-container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            minHeight: '420px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 223, 137, 0.15) 0%, rgba(255, 87, 34, 0.1) 50%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
              zIndex: 0
            }}></div>
            <img
              src={heroImage}
              alt="Narendrapurapu Bala Sri Rajesh portrait"
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: '650px',
                maxHeight: '750px',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(0 20px 45px rgba(255, 87, 34, 0.35))',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)',
                transition: 'all 0.4s var(--ease-out-expo)'
              }}
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;
