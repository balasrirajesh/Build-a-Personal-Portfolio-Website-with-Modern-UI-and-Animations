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
      <div className="hero-grid fade-in-up">
        
        {/* Left Column: Massive Typography */}
        <div className="hero-left">
          <p className="hero-greeting">HELLO, I'M</p>
          <h1 className="huge-text">
            Bala<br/>Sri<br/>Rajesh
          </h1>
          <p className="hero-tagline">
            <span className="accent-line"></span> Full Stack Developer & Backend Engineer
          </p>
          
          <div className="hero-socials">
            <a href="https://github.com/balasrirajesh" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/bala-sri-rajesh-narendrapurapu-20b44a291/" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /> LinkedIn</a>
          </div>

          <button onClick={() => handleScroll('resume')} className="btn primary-btn hero-resume-btn" style={{marginTop: '2rem'}}>
            <span style={{marginRight: '10px'}}>⬇</span> RESUME
          </button>
        </div>

        {/* Center Column: Portrait Image */}
        <div className="hero-center">
          <div className="hero-image-container">
            <img src="/assets/hero.png" alt="Narendrapurapu Bala Sri Rajesh" className="hero-image" />
          </div>
        </div>

        {/* Right Column: Roles */}
        <div className="hero-right">
          <h2 className="hero-role-title">Full Stack<br/>Developer</h2>
          <h2 className="hero-role-title">Backend<br/>Engineer</h2>
          <p className="hero-availability">
            <span className="accent-dash">-</span> Currently available for opportunities
          </p>
        </div>

      </div>
    </header>
  );
};

export default Hero;
