import React from 'react';
import { FaDownload, FaFileAlt } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <h2 className="section-title">Resume</h2>
      
      <div className="glass-card" style={{ maxWidth: '600px', width: '100%', padding: '4rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'rgba(255, 87, 34, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', color: 'var(--accent-color)' }}>
          <FaFileAlt size={45} />
        </div>
        
        <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Narendrapurapu Bala Sri Rajesh</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '400px' }}>
          Aspiring Mobile App Developer with experience in Flutter and Firebase. Skilled in developing user-centric mobile applications with real-time data integration.
        </p>

        <a href="/assets/resume.pdf" download="Bala_Sri_Rajesh_Resume.pdf" className="btn primary-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2.5rem', fontSize: '1.2rem' }}>
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
