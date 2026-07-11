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

      {/* Parallax decorative background orbs — move at different speeds than scroll */}
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
            <h1 className="huge-text">
              Bala<br/>Sri<br/>Rajesh
            </h1>

            <div className="hero-socials">
              <a href="https://github.com/balasrirajesh" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/bala-sri-rajesh-narendrapurapu-20b44a291/" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /> LinkedIn</a>
            </div>

            <button onClick={() => handleScroll('resume')} className="btn primary-btn hero-resume-btn" style={{marginTop: '2rem'}}>
              <span style={{marginRight: '10px'}}>⬇</span> RESUME
            </button>
          </div>
        </ScrollReveal>

        {/* Center Column: Portrait Image */}
        <div className="hero-center">
          <div className="hero-image-container">
            <img
              src={heroImage}
              alt="Narendrapurapu Bala Sri Rajesh - App Developer"
              className="hero-image"
              style={{
                boxShadow: 'none',
                borderRadius: '0',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                filter: 'drop-shadow(0 0 20px rgba(0, 230, 150, 0.15))'
              }}
            />
          </div>
        </div>

        {/* Right Column: Roles */}
        <ScrollReveal animation="fade-left" delay={150}>
          <div className="hero-right" style={{ textAlign: 'left' }}>
            <p className="hero-greeting" style={{ textAlign: 'left', marginBottom: '0.5rem', fontSize: '1rem', letterSpacing: '3px' }}>
              I'M AN
            </p>
            <h2 className="hero-role-title" style={{ textAlign: 'left', margin: 0 }}>
              APP<br/>DEVELOPER
            </h2>
            <p className="hero-availability" style={{ textAlign: 'left', marginTop: '1.5rem' }}>
              <span className="accent-dash">-</span> Open to work
            </p>
          </div>
        </ScrollReveal>

      </div>
    </header>
  );
};

export default Hero;
