import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import heroImage from '../assets/me.webp';
import useParallax from '../hooks/useParallax';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  // Parallax offsets: different speeds for layered depth effect
  const orbOffset = useParallax(0.25);   // decorative orbs move at 25% of scroll speed
  const orb2Offset = useParallax(0.15);  // second orb moves slower for layered depth

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero">

      {/* Parallax decorative background orbs */}
      <div
        className="parallax-orb"
        style={{
          top: '15%',
          left: '5%',
          transform: `translateY(${orbOffset}px)`,
        }}
        aria-hidden="true"
      />
      <div
        className="parallax-orb-2"
        style={{
          top: '60%',
          right: '8%',
          transform: `translateY(${-orb2Offset}px)`,
        }}
        aria-hidden="true"
      />
      <div
        className="parallax-orb"
        style={{
          bottom: '10%',
          left: '45%',
          transform: `translateY(${orbOffset * 0.6}px)`,
          width: '180px',
          height: '180px',
        }}
        aria-hidden="true"
      />

      <div className="hero-grid">

        {/* Left Column: Massive Typography */}
        <ScrollReveal animation="fade-right" delay={0}>
          <div className="hero-left">
            <p className="hero-greeting">HELLO, I'M</p>
            <h1 className="huge-text gradient-text">
              Bala<br/>Sri<br/>Rajesh
            </h1>

            <div className="hero-socials">
              <a href="https://github.com/balasrirajesh" target="_blank" rel="noreferrer" className="social-icon">
                <FaGithub size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/bala-sri-rajesh-narendrapurapu-20b44a291/" target="_blank" rel="noreferrer" className="social-icon">
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>

            <button onClick={() => handleScroll('resume')} className="btn primary-btn hero-resume-btn" style={{marginTop: '2rem'}}>
              <span style={{marginRight: '8px', fontSize: '1.2rem'}}>↓</span> RESUME
            </button>
          </div>
        </ScrollReveal>

        {/* Center Column: Portrait Image (Massive & Animated) */}
        <div className="hero-center">
          <div className="hero-image-container floating-hero-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <img
              src={heroImage}
              alt="Narendrapurapu Bala Sri Rajesh - App Developer"
              className="hero-image"
              style={{
                width: '100%',
                maxWidth: '850px',
                maxHeight: '850px',
                transform: 'scale(1.22)',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)',
                filter: 'drop-shadow(0 0 45px rgba(0, 223, 137, 0.35))',
                transition: 'all 0.4s var(--ease-out-expo)'
              }}
            />
          </div>
        </div>

        {/* Right Column: Roles (Original Clean Design) */}
        <ScrollReveal animation="fade-left" delay={150}>
          <div className="hero-right">
            <p className="hero-greeting" style={{ marginBottom: '0.5rem', fontSize: '0.85rem', letterSpacing: '3px' }}>
              I'M AN
            </p>
            <h2 className="hero-role-title gradient-orange-text" style={{ margin: 0 }}>
              APP<br/>DEVELOPER
            </h2>
            <p className="hero-availability" style={{ marginTop: '1.5rem' }}>
              <span className="pulse-dot"></span> Open to work
            </p>
          </div>
        </ScrollReveal>

      </div>
    </header>
  );
};

export default Hero;
