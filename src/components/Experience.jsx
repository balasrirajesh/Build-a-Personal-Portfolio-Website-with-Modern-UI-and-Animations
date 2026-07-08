import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Flutter Development Intern',
      company: 'Technical Hub',
      duration: '2024 - 2025',
      stack: ['Flutter', 'Dart', 'Firebase', 'Git', 'REST APIs'],
      responsibilities: [
        'Developed responsive cross-platform mobile applications using Flutter.',
        'Designed clean and reusable UI components.',
        'Integrated REST APIs and Firebase services.',
        'Fixed bugs and optimized application performance.',
        'Collaborated with mentors and team members during project development.'
      ],
      achievements: [
        'Successfully completed the Flutter internship.',
        'Built multiple Flutter applications with modern UI.',
        'Strengthened knowledge of state management, API integration, and responsive design.',
        'Earned a Flutter Internship Certificate.'
      ]
    },
    {
      role: 'Open Source / Personal Projects',
      company: 'Personal Projects (GitHub)',
      duration: 'Ongoing',
      stack: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'Express.js', 'HTML', 'CSS', 'JavaScript'],
      responsibilities: [
        'Designed and developed complete mobile and web applications.',
        'Implemented responsive and attractive user interfaces.',
        'Integrated third-party APIs and backend services.',
        'Managed projects using Git and GitHub.',
        'Continuously enhanced applications with new features and performance improvements.'
      ],
      achievements: [
        'Developed an Interview Prep App for placement preparation.',
        'Built a Blood Donation App connecting donors and recipients.',
        'Created a Company Info App to explore company details.',
        'Developed SkyScope, a weather forecasting application using weather APIs.',
        'Improved skills in Flutter, UI design, backend integration, and software architecture.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem', width: '100%', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass-card" style={{ padding: '2rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                <h4 style={{ color: 'var(--accent-color)', fontSize: '1.1rem', marginTop: '0.2rem' }}>{exp.company}</h4>
              </div>
              <div style={{ background: 'rgba(255, 87, 34, 0.1)', padding: '0.5rem 1rem', borderRadius: '20px', color: 'var(--accent-color)', fontWeight: '500' }}>
                {exp.duration}
              </div>
            </div>

            <div className="tags" style={{ marginBottom: '1.5rem' }}>
              {exp.stack.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Responsibilities:</h5>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Key Achievements:</h5>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
