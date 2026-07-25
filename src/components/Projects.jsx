import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

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
    <section id="projects" className="section" style={{ padding: '120px 5%' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '2rem' }}>
          <ScrollReveal animation="fade-right">
            <div>
              <p className="section-subtitle" style={{ marginBottom: '0.5rem' }}>FEATURED WORKS</p>
              <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>Projects Gallery</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              background: 'rgba(255,255,255,0.03)',
              padding: '0.3rem',
              borderRadius: '30px',
              border: '1px solid var(--card-border)',
              fontFamily: 'var(--font-code)',
              fontSize: '0.85rem'
            }}>
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    background: activeFilter === filter ? 'var(--accent-color)' : 'transparent',
                    border: 'none',
                    color: activeFilter === filter ? '#ffffff' : 'var(--text-secondary)',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '25px',
                    fontWeight: activeFilter === filter ? '700' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s var(--ease-out-expo)',
                    boxShadow: activeFilter === filter ? '0 0 15px rgba(255, 87, 34, 0.4)' : 'none'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Border separator */}
        <div style={{ width: '100%', height: '1px', background: 'var(--card-border)', marginBottom: '3.5rem' }}></div>

        {/* Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={index * 100}>
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.4s var(--ease-out-expo)' }}>
                <div style={{ flexGrow: 1 }}>
                  <p style={{ fontFamily: 'var(--font-code)', color: 'var(--accent-emerald)', fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '1rem' }}>
                    {project.subtitle}
                  </p>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.2rem', fontWeight: '800' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.98rem', marginBottom: '2rem' }}>
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                    {project.stack.map((tech, i) => (
                      <span key={i} style={{
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        color: 'var(--text-secondary)',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '20px',
                        fontFamily: 'var(--font-code)',
                        fontSize: '0.72rem',
                        letterSpacing: '1px'
                      }}>{tech}</span>
                    ))}
                  </div>

                  <a href={project.github} target="_blank" rel="noreferrer" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    border: '1px solid var(--accent-color)',
                    background: 'rgba(255, 87, 34, 0.05)',
                    padding: '0.65rem 1.4rem',
                    borderRadius: '30px',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-code)',
                    fontWeight: '600',
                    transition: 'all 0.3s var(--ease-out-expo)'
                  }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'var(--accent-color)';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 87, 34, 0.5)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 87, 34, 0.05)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FaGithub size={16} /> View Repository
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
