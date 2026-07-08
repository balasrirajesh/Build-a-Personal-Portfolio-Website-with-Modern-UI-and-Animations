import React, { useState, useEffect } from 'react';

const About = () => {
  const [terminalText, setTerminalText] = useState('');
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

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 20); // Fast typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section" style={{ padding: '120px 5%' }}>
      <div className="about-split-layout" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '4rem',
        maxWidth: '1200px',
        margin: '0 auto',
        alignItems: 'center'
      }}>
        
        {/* Left Side: Text Content */}
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

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
        </div>

        {/* Right Side: Terminal Window */}
        <div className="glass-card terminal-window" style={{ 
          padding: '2rem', 
          height: '100%', 
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(rgba(0, 230, 150, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 230, 150, 0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}>
          <div style={{ 
            fontFamily: 'var(--font-code)', 
            color: 'var(--text-secondary)', 
            fontSize: '0.75rem', 
            marginBottom: '2rem',
            letterSpacing: '1px'
          }}>
            ARCHITECTURE / RUNTIME
          </div>
          
          <div style={{
            fontFamily: 'var(--font-code)',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            lineHeight: '1.8',
            whiteSpace: 'pre-wrap'
          }}>
            {terminalText}
            <span className="cursor blink" style={{ color: 'var(--accent-color)' }}>_</span>
          </div>

          <div style={{ 
            marginTop: 'auto', 
            paddingTop: '2rem',
            fontStyle: 'italic', 
            color: 'var(--text-secondary)',
            fontSize: '0.95rem'
          }}>
            "Systems designed to survive real usage."
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
