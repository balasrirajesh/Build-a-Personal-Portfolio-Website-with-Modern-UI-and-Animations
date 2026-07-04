import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero">
      <div className="hero-content fade-in-up">
        <div className="hero-image-container">
          <img src="/assets/hero.png" alt="Narendrapurapu Bala Sri Rajesh" className="hero-image" />
          <div className="hero-image-overlay"></div>
        </div>
        <h1 className="huge-text">Hi, I'm Rajesh</h1>
        <h2 className="hero-role">App Developer <span className="highlight">|</span> Web Developer</h2>
        
        <div className="hero-cta" style={{marginTop: '2rem', marginBottom: '2rem'}}>
          <button onClick={() => handleScroll('resume')} className="btn primary-btn">Download Resume</button>
          <button onClick={() => handleScroll('projects')} className="btn secondary-btn">View Projects</button>
          <button onClick={() => handleScroll('contact')} className="btn secondary-btn">Contact Me</button>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/balasrirajesh" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/bala-sri-rajesh-narendrapurapu-20b44a291/" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
          <a href="mailto:narendrapurapubalasrirajesh@gmail.com" className="social-icon"><FaEnvelope /></a>
        </div>
      </div>
      
      {/* Animated floating particles (pure CSS) */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </header>
  );
};

export default Hero;
