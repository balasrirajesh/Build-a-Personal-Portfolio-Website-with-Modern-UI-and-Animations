import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        
        <div className="about-text glass-card" style={{ padding: '2rem' }}>
          <h3>Introduction</h3>
          <p>
            Hi, I'm Narendrapurapu Bala Sri Rajesh, a passionate Computer Science Engineering student with a strong interest in Flutter Development, Full Stack Development, and UI/UX Design. I enjoy building modern, user-friendly applications that solve real-world problems and continuously explore new technologies to improve my development skills. My goal is to become a skilled software engineer who creates impactful and innovative digital solutions.
          </p>
        </div>

        <div className="about-text glass-card" style={{ padding: '2rem' }}>
          <h3>Education</h3>
          <ul style={{ listStyleType: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><strong style={{color: 'var(--accent-color)'}}>Degree:</strong> Bachelor of Technology (B.Tech) in Computer Science and Engineering</li>
            <li><strong style={{color: 'var(--accent-color)'}}>College:</strong> Aditya College Of Engineering and Technology</li>
            <li><strong style={{color: 'var(--accent-color)'}}>Academic Year:</strong> 2023 – 2027</li>
            <li><strong style={{color: 'var(--accent-color)'}}>Current Year:</strong> 4th Year</li>
          </ul>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="about-text glass-card" style={{ padding: '2rem' }}>
            <h3>Interests & Goals</h3>
            <h4 style={{marginTop: '1rem', color: 'var(--text-secondary)'}}>Interests</h4>
            <div className="tags" style={{ marginBottom: '1.5rem' }}>
              {['Flutter App Development', 'Full Stack Web Development', 'UI/UX Design', 'Cloud Computing (AWS)', 'Mobile Application Development', 'Open Source', 'Learning New Tech'].map((item, index) => (
                <span key={index} className="tag">{item}</span>
              ))}
            </div>
            
            <h4 style={{color: 'var(--text-secondary)'}}>Career Goals</h4>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
              <li>Become a Full Stack Software Engineer.</li>
              <li>Build scalable and user-friendly applications.</li>
              <li>Contribute to open-source projects.</li>
              <li>Continuously improve problem-solving and development skills.</li>
              <li>Work on innovative products that create a positive impact.</li>
            </ul>
          </div>

          <div className="about-text glass-card" style={{ padding: '2rem' }}>
            <h3>Languages</h3>
            <h4 style={{marginTop: '1rem', color: 'var(--text-secondary)'}}>Programming Languages</h4>
            <div className="tags" style={{ marginBottom: '1.5rem' }}>
              {['Dart', 'Java', 'Python', 'C', 'JavaScript', 'SQL'].map((item, index) => (
                <span key={index} className="tag">{item}</span>
              ))}
            </div>
            <h4 style={{color: 'var(--text-secondary)'}}>Spoken Languages</h4>
            <div className="tags">
              {['Telugu', 'Hindi', 'English', 'Japaneese (learning)'].map((lang, index) => (
                <span key={index} className="tag">{lang}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
