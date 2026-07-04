import React from 'react';
import { FaCode, FaMobileAlt, FaServer, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: ['Dart', 'Java', 'Python', 'C', 'JavaScript']
    },
    {
      title: 'Frontend & Mobile',
      icon: <FaMobileAlt />,
      skills: ['Flutter', 'HTML5', 'CSS3', 'UI/UX Design', 'Responsive Web Design']
    },
    {
      title: 'Backend',
      icon: <FaServer />,
      skills: ['Firebase', 'Node.js', 'Express.js', 'REST APIs', 'Auth Systems']
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      skills: ['MySQL', 'SQL', 'MongoDB', 'Real-time Database']
    },
    {
      title: 'Cloud & Deployment',
      icon: <FaCloud />,
      skills: ['Google Cloud Platform (GCP)', 'AWS Basics', 'Render']
    },
    {
      title: 'Development Tools',
      icon: <FaTools />,
      skills: ['Git', 'GitHub', 'Docker', 'Jenkins', 'VS Code', 'Android Studio', 'Postman']
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-card skill-category" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent-color)', fontSize: '1.5rem' }}>
              {category.icon}
              <h3 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--text-primary)' }}>{category.title}</h3>
            </div>
            <div className="tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
