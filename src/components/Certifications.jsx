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
        <h2 className="section-title">Certifications</h2>
      </ScrollReveal>
      
      {/* Fully responsive bento-like grid using auto-fit minmax */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', 
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
              padding: '1.5rem', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              height: '100%'
            }}
          >
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(255, 87, 34, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
              <FaAward size={40} />
            </div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{cert.title}</h3>
            <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontWeight: '500' }}>{cert.org}</h4>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
               <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn secondary-btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <FaExternalLinkAlt /> View Certificate
               </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
