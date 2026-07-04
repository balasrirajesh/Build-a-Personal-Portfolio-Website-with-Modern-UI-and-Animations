import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements section fade-in-up">
      <h2 className="section-title">Certifications & Achievements</h2>
      <div className="achievements-content">
        <div className="achievements-list glass-card">
          <h3>Achievements</h3>
          <ul>
            <li>Team Leader in Quantum Valley Hackathon</li>
            <li>Won 2nd Prize in a Google Hackathon</li>
            <li>Completed multiple software engineering and backend development projects</li>
          </ul>
        </div>
        <div className="certifications-list glass-card">
          <h3>Certifications</h3>
          <ul>
            <li>Flutter Development – Technical Hub</li>
            <li>Python – Cisco</li>
            <li>C Programming – Cisco</li>
            <li>NPTEL – Internet of Things (IoT)</li>
            <li>Google Cloud Learning – Associate Cloud Engineer Learning Path</li>
            <li>Web Development – Academor</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
