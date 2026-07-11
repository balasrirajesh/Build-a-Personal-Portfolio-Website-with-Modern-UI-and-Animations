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
    <section id="achievements" className="achievements section" style={{ minHeight: '100vh', paddingTop: '4rem' }}>
      <ScrollReveal animation="fade-up">
        <h2 className="section-title">Achievements</h2>
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
                  <div style={{ marginTop: '1rem', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    View Details &rarr;
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10,25,47,0.85)', backdropFilter: 'blur(5px)', zIndex: 1000 }}>
          <div className="modal-content glass-card fade-in-up" onClick={e => e.stopPropagation()} style={{ maxWidth: '700px', width: '90%', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', position: 'relative' }}>
            <button className="modal-close" onClick={closeModal} style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'var(--text-primary)', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }} onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}>
              &times;
            </button>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <img src={selectedItem.completionImg} alt={selectedItem.title} style={{ maxWidth: '100%', maxHeight: '350px', borderRadius: '12px', objectFit: 'contain', border: '1px solid var(--card-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} />
            </div>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', fontSize: '2rem' }}>{selectedItem.title}</h3>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: '500' }}>{selectedItem.desc}</h4>
            <div style={{ height: '1px', background: 'var(--card-border)', marginBottom: '1.5rem' }}></div>
            <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Completion Details</h5>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>{selectedItem.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
