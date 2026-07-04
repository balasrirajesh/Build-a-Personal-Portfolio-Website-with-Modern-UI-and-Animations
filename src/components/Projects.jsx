import React, { useState, useEffect } from 'react';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [sweepAngle, setSweepAngle] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const animateRadar = () => {
      setSweepAngle((prev) => (prev + 1) % 360);
      animationFrameId = requestAnimationFrame(animateRadar);
    };
    animationFrameId = requestAnimationFrame(animateRadar);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const projectsData = [
    {
      id: 1,
      title: 'Blood Donation Management App',
      category: 'Mobile App',
      image: '/assets/blooddonation.png',
      shortDesc: 'A mobile app for blood donation camp management with donor registration and location mapping.',
      stack: ['Flutter', 'Firebase', 'Google Maps API', 'Dart'],
      features: ['Donor Registration', 'Location Mapping', 'Appointment Scheduling', 'Firebase Authentication'],
      status: 'Ongoing',
      duration: 'Present',
      github: '#',
      demo: '#',
      architecture: 'Client-server architecture using Flutter for the frontend and Firebase for real-time backend synchronization and authentication.',
      challenges: 'Handling real-time location mapping accurately and ensuring secure authentication for medical data.',
      solution: 'Integrated Google Maps API for precise tracking and leveraged Firebase Auth for robust security.',
      x: 30, y: 30
    },
    {
      id: 2,
      title: 'Interview Preparation Platform',
      category: 'Mobile App',
      image: '/assets/interviewprep.png',
      shortDesc: 'A platform featuring real-time data visualization and analytics dashboard to track user progress.',
      stack: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      features: ['Real-time Visualization', 'Analytics Dashboard', 'Progress Tracking', 'Optimized Load Times'],
      status: 'Completed',
      duration: 'August 2025',
      github: '#',
      demo: '#',
      architecture: 'Built using Flutter framework with a focus on high-performance rendering and state management.',
      challenges: 'Average page load times were initially too high due to heavy data visualization.',
      solution: 'Refactored code and shrank codebase by 15%, decreasing average page load time by 25%.',
      x: 70, y: 20
    },
    {
      id: 3,
      title: 'Real-time Weather Dashboard',
      category: 'Web App',
      image: '/assets/weather.png',
      shortDesc: 'A responsive weather platform with real-time data and 7-day forecasts using OpenWeather API.',
      stack: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      features: ['7-day Forecast', 'Weather Alerts', 'Location-based Updates', 'Responsive Design'],
      status: 'Completed',
      duration: 'June 2024',
      github: '#',
      demo: '#',
      architecture: 'Frontend-only web application communicating directly with third-party weather REST APIs.',
      challenges: 'Ensuring seamless responsiveness across mobile and desktop while handling asynchronous API calls.',
      solution: 'Implemented optimized async/await fetching and CSS Grid/Flexbox for a fluid layout.',
      x: 80, y: 70
    },
    {
      id: 4,
      title: 'Graduway Alumni Platform',
      category: 'Web App',
      image: '/assets/graduway.jpeg',
      shortDesc: 'A comprehensive platform for alumni networking, event management, and mentorship.',
      stack: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: ['User Authentication', 'Event Management', 'Mentorship Matching', 'Real-time Chat'],
      status: 'Completed',
      duration: '2023',
      github: '#',
      demo: '#',
      architecture: 'MERN stack architecture with JWT based authentication and WebSocket integration for chat.',
      challenges: 'Managing complex relationships between different user roles (Students, Alumni, Admins).',
      solution: 'Designed a normalized MongoDB schema and robust RBAC middleware.',
      x: 20, y: 70
    },
    {
      id: 5,
      title: 'Company Info Explorer',
      category: 'Mobile App',
      image: '/assets/companyinfo.png',
      shortDesc: 'A comprehensive mobile application to explore and analyze detailed corporate information.',
      stack: ['Flutter', 'Dart', 'REST API', 'Provider'],
      features: ['Company Search', 'Financial Data Visualization', 'Offline Caching', 'Dark Mode'],
      status: 'Completed',
      duration: '2024',
      github: '#',
      demo: '#',
      architecture: 'Flutter MVVM architecture with Provider for state management and local SQLite caching.',
      challenges: 'Handling large JSON payloads and parsing nested financial data efficiently.',
      solution: 'Implemented background isolates for JSON parsing to prevent UI stutter.',
      x: 50, y: 85
    }
  ];

  return (
    <section id="projects" className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className="section-title">Project Radar</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', textAlign: 'center' }}>
        Scanning for deployed applications. Hover over a blip to preview, click for case study.
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '1200px' }}>
        <div className="radar-container" style={{ position: 'relative', width: '500px', height: '500px', borderRadius: '50%', border: '2px solid var(--accent-color)', overflow: 'hidden', boxShadow: '0 0 30px rgba(255, 87, 34, 0.2)', backgroundColor: 'rgba(10, 25, 47, 0.5)' }}>
          
          {/* Concentric Circles */}
          <div style={{ position: 'absolute', top: '10%', left: '10%', right: '10%', bottom: '10%', borderRadius: '50%', border: '1px solid rgba(255, 87, 34, 0.3)' }}></div>
          <div style={{ position: 'absolute', top: '30%', left: '30%', right: '30%', bottom: '30%', borderRadius: '50%', border: '1px solid rgba(255, 87, 34, 0.3)' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', right: '50%', bottom: '50%', borderRadius: '50%', border: '1px solid rgba(255, 87, 34, 0.3)', width: '2px', height: '2px', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--accent-color)' }}></div>
          
          {/* Crosshairs */}
          <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', backgroundColor: 'rgba(255, 87, 34, 0.3)', transform: 'translateY(-50%)' }}></div>
          <div style={{ position: 'absolute', left: '50%', top: 0, height: '100%', width: '1px', backgroundColor: 'rgba(255, 87, 34, 0.3)', transform: 'translateX(-50%)' }}></div>

          {/* Sweeping Line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '50%',
            height: '2px',
            backgroundColor: 'var(--accent-color)',
            transformOrigin: '0 0',
            transform: `rotate(${sweepAngle}deg)`,
            boxShadow: '0 0 15px var(--accent-color)',
            zIndex: 2
          }}>
            {/* Radar Gradient Sweep Effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '500px',
              height: '500px',
              background: 'conic-gradient(from 180deg at 0 0, transparent 0deg, rgba(255, 87, 34, 0.4) 90deg)',
              transformOrigin: '0 0',
              transform: 'rotate(-90deg)',
              pointerEvents: 'none'
            }}></div>
          </div>

          {/* Blips */}
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="radar-point-container"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              style={{
                position: 'absolute',
                top: `${project.y}%`,
                left: `${project.x}%`,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                transform: hoveredProject?.id === project.id ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(1)',
                transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                zIndex: hoveredProject?.id === project.id ? 20 : 10,
                boxShadow: hoveredProject?.id === project.id ? '0 0 25px var(--accent-color)' : '0 0 15px var(--accent-color)',
                border: '2px solid var(--accent-color)',
                overflow: 'hidden',
                animation: 'pulse 2s infinite',
                backgroundColor: 'var(--bg-color)'
              }}
            >
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Blip Ping Animation */}
              <div style={{
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                borderRadius: '50%',
                border: '2px solid var(--accent-color)',
                animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                pointerEvents: 'none'
              }}></div>
            </div>
          ))}
        </div>

        {/* Hover Card */}
        <div style={{ width: '100%', maxWidth: '400px' }}>
          {hoveredProject ? (
            <div className="glass-card fade-in-up" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', transition: 'all 0.3s ease' }}>
              <img src={hoveredProject.image} alt={hoveredProject.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--card-border)' }} />
              <div>
                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 'bold' }}>{hoveredProject.category}</span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: '0.5rem 0' }}>{hoveredProject.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{hoveredProject.shortDesc}</p>
                <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {hoveredProject.stack.slice(0, 4).map((tech, i) => <span key={i} className="tag" style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem' }}>{tech}</span>)}
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '350px', color: 'var(--text-secondary)', textAlign: 'center', fontSize: '1.2rem' }}>
              Hover over a radar blip to preview project details.
            </div>
          )}
        </div>
      </div>

      {/* Styles for animations */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .radar-container {
          @media (max-width: 600px) {
            width: 300px !important;
            height: 300px !important;
          }
        }
      `}</style>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
