import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Mobile', 'Web', 'Backend'];

  const projectsData = [
    {
      id: 1,
      title: 'Blood Donation Network',
      category: 'Mobile',
      subtitle: 'REAL-TIME DONOR COORDINATION PLATFORM',
      shortDesc: 'A comprehensive mobile application facilitating blood donation camp management. Features secure donor registration, real-time location mapping, and appointment scheduling to bridge the gap between blood banks and donors efficiently.',
      stack: ['FLUTTER', 'DART', 'FIREBASE', 'GOOGLE MAPS API'],
      github: '#'
    },
    {
      id: 2,
      title: 'InterviewPrep Analytics',
      category: 'Web',
      subtitle: 'HIGH-PERFORMANCE DATA VISUALIZATION DASHBOARD',
      shortDesc: 'An analytics platform designed to track user interview preparation progress. Focused on frontend optimization, refactoring the codebase to decrease average page load times by 25% despite heavy real-time data visualization requirements.',
      stack: ['REACT', 'JAVASCRIPT', 'FIREBASE', 'REST API'],
      github: '#'
    },
    {
      id: 3,
      title: 'WeatherCast Dashboard',
      category: 'Web',
      subtitle: 'ASYNCHRONOUS CLIMATE DATA VISUALIZATION',
      shortDesc: 'A responsive weather monitoring platform providing real-time data and 7-day forecasting. Built using optimized asynchronous API polling to ensure seamless responsiveness across desktop and mobile devices.',
      stack: ['HTML/CSS', 'JAVASCRIPT', 'OPENWEATHER API'],
      github: '#'
    },
    {
      id: 4,
      title: 'Graduway Connect',
      category: 'Backend',
      subtitle: 'ALUMNI MENTORSHIP & EVENT MICROSERVICES',
      shortDesc: 'A backend architecture built to handle complex relationships between students, alumni, and administrators. Implemented robust Role-Based Access Control (RBAC) and WebSocket integration for real-time messaging.',
      stack: ['NODE.JS', 'EXPRESS', 'MONGODB', 'WEBSOCKETS'],
      github: '#'
    },
    {
      id: 5,
      title: 'Corporate Insight Explorer',
      category: 'Mobile',
      subtitle: 'OFFLINE-FIRST FINANCIAL DATA ANALYSIS',
      shortDesc: 'A Flutter application designed for exploring detailed corporate information. Features MVVM architecture, Provider state management, and background isolates for efficient parsing of large financial JSON payloads without UI stutter.',
      stack: ['FLUTTER', 'DART', 'SQLITE', 'PROVIDER'],
      github: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section" style={{ padding: '120px 2%' }}>
      <div style={{ width: '100%', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <p className="hero-greeting" style={{ marginBottom: '0.5rem', fontSize: '0.8rem' }}>PROJECTS GALLERY</p>
            <h2 className="section-title" style={{ margin: 0, border: 'none', padding: 0 }}>All Projects</h2>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-code)', fontSize: '0.9rem' }}>
            {filters.map(filter => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeFilter === filter ? 'var(--accent-color)' : 'var(--text-secondary)',
                  borderBottom: activeFilter === filter ? '2px solid var(--accent-color)' : '2px solid transparent',
                  paddingBottom: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        {/* Border separator */}
        <div style={{ width: '100%', height: '1px', background: 'var(--card-border)', marginBottom: '4rem' }}></div>

        {/* Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ flexGrow: 1 }}>
                <p style={{ fontFamily: 'var(--font-code)', color: 'var(--accent-color)', fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '1rem' }}>
                  {project.subtitle}
                </p>
                <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: '800' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '2rem' }}>
                  {project.shortDesc}
                </p>
              </div>
              
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
                  {project.stack.map((tech, i) => (
                    <span key={i} style={{
                      border: '1px solid var(--card-border)',
                      background: 'rgba(0,0,0,0.2)',
                      color: 'var(--text-secondary)',
                      padding: '0.4rem 1rem',
                      borderRadius: '20px',
                      fontFamily: 'var(--font-code)',
                      fontSize: '0.7rem',
                      letterSpacing: '1px'
                    }}>{tech}</span>
                  ))}
                </div>
                
                <a href={project.github} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  border: '1px solid var(--card-border)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '30px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-code)',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--text-primary)'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--card-border)'}
                >
                  <FaGithub size={16} /> View Repo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
