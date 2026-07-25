import React from 'react';
import { FaDownload, FaFileAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const Resume = () => {
  return (
    <section id="resume" className="section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '65vh' }}>
      <ScrollReveal animation="fade-up">
        <div className="section-title-wrapper">
          <p className="section-subtitle">CURRICULUM VITAE</p>
          <h2 className="section-title">Resume</h2>
        </div>
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={100} className="glass-card" style={{ maxWidth: '650px', width: '100%', padding: '4rem 2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <div style={{ 
            width: '95px', 
            height: '95px', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(0, 223, 137, 0.08)', 
            border: '1px solid rgba(0, 223, 137, 0.25)',
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '2rem', 
            color: 'var(--accent-emerald)',
            boxShadow: '0 0 25px rgba(0, 223, 137, 0.15)'
          }}>
            <FaFileAlt size={42} />
          </div>
          
          <h3 style={{ fontSize: '1.9rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: '800' }}>Narendrapurapu Bala Sri Rajesh</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.05rem', maxWidth: '460px', marginInline: 'auto', lineHeight: '1.7' }}>
            Mobile App Developer specializing in Flutter, Dart, Java, and scalable backend integrations. Explore full experience, projects, and skill matrix.
          </p>

          <a 
            href="/assets/resume.pdf" 
            download="Bala_Sri_Rajesh_Resume.pdf" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.8rem', 
              padding: '1rem 2.6rem', 
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #ff5722 0%, #e64a19 100%)',
              color: '#ffffff',
              fontWeight: 'bold',
              borderRadius: '30px',
              textDecoration: 'none',
              boxShadow: '0 0 25px rgba(255, 87, 34, 0.45)',
              transition: 'all 0.3s var(--ease-out-expo)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.5px'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 0 35px rgba(255, 87, 34, 0.7)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 87, 34, 0.45)'; }}
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Resume;
