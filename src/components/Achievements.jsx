import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const Achievements = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const achievements = [
    {
      title: "Quantum Valley Hackathon",
      desc: "Team Leader. Explored quantum computing applications.",
      details: "Led a team of developers to build a quantum-inspired optimization algorithm over a 48-hour period. We presented our findings to a panel of industry experts, focusing on innovative supply chain optimization using quantum principles.",
      img: "/quantum.png",
      completionImg: "/quantum.png"
    },
    {
      title: "Google Hackathon",
      desc: "Won 2nd Prize in competitive coding.",
      details: "Participated in a rigorous 24-hour coding competition organized by developer groups. Solved complex algorithmic challenges and developed a scalable web solution, securing the 2nd prize among 50+ participating teams.",
      img: "/google.png",
      completionImg: "/google.png"
    },
    {
      title: "Software Engineering",
      desc: "Completed multiple backend development projects.",
      details: "Successfully architected and deployed multiple backend microservices using Node.js, Express, and MongoDB. Improved system efficiency and implemented robust authentication and authorization protocols.",
      img: "/software.png",
      completionImg: "/software.png"
    }
  ];

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="achievements" className="achievements section" style={{ minHeight: '80vh' }}>
      <ScrollReveal animation="fade-up">
        <div className="section-title-wrapper">
          <p className="section-subtitle">MILESTONES & RECOGNITION</p>
          <h2 className="section-title">Achievements</h2>
        </div>
      </ScrollReveal>
      
      <div className="achievements-container">
        <div className="achievements-grid">
          {achievements.map((ach, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
              <div 
                className="achievement-card glass-card" 
                onClick={() => handleCardClick(ach)}
                style={{ cursor: 'pointer', height: '100%' }}
              >
                <div className="achievement-img-wrapper">
                  <img src={ach.img} alt={ach.title} className="achievement-img" />
                </div>
                <div className="achievement-info">
                  <h4>{ach.title}</h4>
                  <p>{ach.desc}</p>
                  <div style={{ marginTop: '1.2rem', color: 'var(--accent-emerald)', fontSize: '0.88rem', fontWeight: 'bold', fontFamily: 'var(--font-code)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    View Details &rarr;
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <img src={selectedItem.completionImg} alt={selectedItem.title} style={{ maxWidth: '100%', maxHeight: '350px', borderRadius: '14px', objectFit: 'contain', border: '1px solid var(--card-border)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }} />
            </div>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', fontSize: '2rem', fontWeight: '800' }}>{selectedItem.title}</h3>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.15rem', fontWeight: '500' }}>{selectedItem.desc}</h4>
            <div style={{ height: '1px', background: 'var(--card-border)', marginBottom: '1.5rem' }}></div>
            <h5 style={{ color: 'var(--accent-emerald)', marginBottom: '0.8rem', fontSize: '1rem', fontFamily: 'var(--font-code)', textTransform: 'uppercase', letterSpacing: '1px' }}>Completion Details</h5>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.02rem' }}>{selectedItem.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
