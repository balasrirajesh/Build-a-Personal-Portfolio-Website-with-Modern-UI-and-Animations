import React, { useState } from 'react';

const Navbar = ({ activePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'achievements', label: 'ACHIEVEMENTS' },
    { id: 'resume', label: 'RESUME' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const getIsActive = (tabId) => {
    return activePage === tabId;
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo" style={{ cursor: 'pointer', fontFamily: 'var(--font-code)', fontSize: '1.4rem', letterSpacing: '1px' }} onClick={() => handleNavClick('home')}>
          [BSR]
        </div>
        
        {/* Desktop Menu */}
        <div className="nav-links">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleNavClick(tab.id)}
              className={`nav-btn ${getIsActive(tab.id) ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Side Action */}
        <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button 
            className="reach-out-btn" 
            onClick={() => handleNavClick('contact')}
            style={{
              background: 'transparent',
              border: '1px solid var(--accent-color)',
              color: 'var(--accent-color)',
              padding: '0.4rem 1.2rem',
              borderRadius: '20px',
              fontFamily: 'var(--font-code)',
              fontSize: '0.8rem',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => { e.target.style.background = 'var(--accent-color)'; e.target.style.color = 'var(--bg-color)'; }}
            onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-color)'; }}
          >
            REACH OUT
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleNavClick(tab.id)}
            className={`nav-btn mobile-nav-btn ${getIsActive(tab.id) ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
