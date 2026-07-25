import React from 'react';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  const experiences = [
    {
      role: 'Flutter Development Intern',
      company: 'Technical Hub',
      duration: '2024 - 2025',
      stack: ['Flutter', 'Dart', 'Firebase', 'Git', 'REST APIs'],
      responsibilities: [
        'Developed responsive cross-platform mobile applications using Flutter.',
        'Designed clean and reusable UI components following MVVM architecture.',
        'Integrated REST APIs and Firebase backend authentication & realtime databases.',
        'Fixed bugs and optimized mobile application rendering performance.',
        'Collaborated with mentors and team members during agile project development sprints.'
      ],
      achievements: [
        'Successfully completed the Flutter internship with high performance marks.',
        'Built multiple Flutter applications featuring modern UI/UX design patterns.',
        'Strengthened expertise in state management, API integration, and responsive layouts.',
        'Earned official Flutter Internship Certification.'
      ]
    },
    {
      role: 'Open Source / Personal Projects',
      company: 'Personal Projects (GitHub)',
      duration: 'Ongoing',
      stack: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'Express.js', 'HTML', 'CSS', 'JavaScript'],
      responsibilities: [
        'Designed and developed end-to-end mobile and web applications.',
        'Implemented responsive, modern user interfaces with animations.',
        'Integrated third-party APIs, WebSocket services, and microservices.',
        'Managed repositories and version control using Git and GitHub.',
        'Continuously enhanced applications with feature updates and performance optimizations.'
      ],
      achievements: [
        'Developed Interview Prep App for placement analytics.',
        'Built Blood Donation App connecting donors and recipients with location mapping.',
        'Created Corporate Insight Explorer app for offline-first payload parsing.',
        'Developed SkyScope weather forecasting application.',
        'Expanded skill set across full-stack architecture, Flutter development, and system design.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <ScrollReveal animation="fade-up">
        <div className="section-title-wrapper">
          <p className="section-subtitle">CAREER & CONTRIBUTIONS</p>
          <h2 className="section-title">Experience</h2>
        </div>
      </ScrollReveal>

      <div className="timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '2rem', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
            <div className="glass-card" style={{ padding: '2.5rem', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', fontWeight: '800' }}>{exp.role}</h3>
                  <h4 style={{ color: 'var(--accent-color)', fontSize: '1.1rem', marginTop: '0.3rem', fontFamily: 'var(--font-code)' }}>{exp.company}</h4>
                </div>
                <div style={{ 
                  background: 'rgba(0, 223, 137, 0.08)', 
                  border: '1px solid rgba(0, 223, 137, 0.3)',
                  padding: '0.4rem 1.1rem', 
                  borderRadius: '20px', 
                  color: 'var(--accent-emerald)', 
                  fontWeight: '600',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.85rem'
                }}>
                  {exp.duration}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.8rem' }}>
                {exp.stack.map((tech, i) => (
                  <span key={i} style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: 'var(--text-secondary)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '16px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-code)'
                  }}>{tech}</span>
                ))}
              </div>

              <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-code)' }}>Key Responsibilities:</h5>
                <ul style={{ paddingLeft: '0', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem' }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent-emerald)', fontWeight: 'bold' }}>▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-code)' }}>Key Achievements:</h5>
                <ul style={{ paddingLeft: '0', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem' }}>
                  {exp.achievements.map((ach, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>▸</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
