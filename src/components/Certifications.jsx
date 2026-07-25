import React from 'react';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const Certifications = () => {
  const certs = [
    { title: 'GitHub Foundation', org: 'GitHub', link: '/certificates/github foundation.pdf' },
    { title: 'Stanford edX Certification', org: 'Stanford / edX', link: '/certificates/standford edx certification.pdf' },
    { title: 'HTML & CSS', org: 'Certiport', link: '/certificates/HTML & CSS (Certiport).pdf' },
    { title: 'Java Basic', org: 'HackerRank', link: '/certificates/java_basic certificate.pdf' },
    { title: 'SQL Basic', org: 'HackerRank', link: '/certificates/sql_basic certificate.pdf' },
    { title: 'SQL Intermediate', org: 'HackerRank', link: '/certificates/sql_intermediate certificate.pdf' },
    { title: 'DriveReady Internship', org: 'DriveReady', link: '/certificates/internship(driveReady letter).pdf' },
    { title: 'Oracle Cloud Infrastructure', org: 'Oracle Academy', link: '/certificates/Oracle_Cloud_Infrastructure.pdf' },
    { title: 'Programming Essentials in C', org: 'Cisco / C++ Institute', link: '/certificates/Programming_Essentials_in_C.pdf' },
    { title: 'Web Development Course', org: 'Academor', link: '/certificates/Web_Development_Course.pdf' },
    { title: 'Web Development Internship', org: 'Academor', link: '/certificates/Web_Development_Internship.pdf' },
    { title: 'Outstanding Performance', org: 'Academor', link: '/certificates/Outstanding_Performance.pdf' },
    { title: 'Letter of Recommendation', org: 'Academor', link: '/certificates/Letter_of_Recommendation.pdf' },
    { title: 'Flutter Summer Internship', org: 'Technical Hub', link: '/certificates/Flutter_Summer_Internship.pdf' },
    { title: 'VEDA 2K24 Web Diseno', org: 'Aditya University', link: '/certificates/VEDA_2K24_Web_Diseno.pdf' }
  ];

  return (
    <section id="certifications" className="section">
      <ScrollReveal animation="fade-up">
        <div className="section-title-wrapper">
          <p className="section-subtitle">CREDENTIALS & VERIFICATIONS</p>
          <h2 className="section-title">Certifications</h2>
        </div>
      </ScrollReveal>
      
      {/* Responsive grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', 
        gap: '1.5rem', 
        maxWidth: '1400px', 
        margin: '0 auto' 
      }}>
        {certs.map((cert, i) => (
          <ScrollReveal 
            key={i} 
            animation="fade-up" 
            delay={(i % 5) * 80}
            as="div"
            className="glass-card"
            style={{ 
              padding: '1.8rem 1.5rem', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              height: '100%',
              background: 'rgba(14, 19, 28, 0.65)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
          >
            <div style={{ 
              width: '75px', 
              height: '75px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(255, 87, 34, 0.08)', 
              border: '1px solid rgba(255, 87, 34, 0.25)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '1.5rem', 
              color: 'var(--accent-color)',
              boxShadow: '0 0 20px rgba(255, 87, 34, 0.15)'
            }}>
              <FaAward size={36} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.4rem', fontWeight: '700' }}>{cert.title}</h3>
            <h4 style={{ color: 'var(--accent-emerald)', marginBottom: '1rem', fontWeight: '500', fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>{cert.org}</h4>
            <div style={{ marginTop: 'auto', paddingTop: '1.2rem' }}>
               <a 
                 href={cert.link} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 style={{ 
                   padding: '0.65rem 1.4rem', 
                   fontSize: '0.82rem', 
                   display: 'inline-flex', 
                   alignItems: 'center', 
                   gap: '0.5rem',
                   borderRadius: '25px',
                   border: '1px solid rgba(255, 255, 255, 0.1)',
                   background: 'rgba(255, 255, 255, 0.04)',
                   color: 'var(--text-primary)',
                   fontFamily: 'var(--font-code)',
                   textDecoration: 'none',
                   transition: 'all 0.3s var(--ease-out-expo)'
                 }}
                 onMouseOver={(e) => {
                   e.currentTarget.style.borderColor = 'var(--accent-color)';
                   e.currentTarget.style.background = 'rgba(255, 87, 34, 0.1)';
                   e.currentTarget.style.color = 'var(--accent-color)';
                   e.currentTarget.style.transform = 'translateY(-2px)';
                 }}
                 onMouseOut={(e) => {
                   e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                   e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                   e.currentTarget.style.color = 'var(--text-primary)';
                   e.currentTarget.style.transform = 'translateY(0)';
                 }}
               >
                 <FaExternalLinkAlt size={12} /> View Credential
               </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
