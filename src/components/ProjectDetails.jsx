import React from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaInfoCircle, FaTools, FaCheckCircle } from 'react-icons/fa';

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '900px', width: '90%', maxHeight: '90vh', overflowY: 'auto', padding: '0' }}>
        
        {/* Header Image */}
        <div style={{ height: '300px', backgroundColor: 'var(--card-border)', position: 'relative', overflow: 'hidden' }}>
           <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, var(--bg-color))' }}></div>
           
           <button className="modal-close" onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(10, 25, 47, 0.8)', border: 'none', color: 'white', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaTimes size={20} />
          </button>
        </div>

        <div style={{ padding: '3rem' }}>
          {/* Title & Metadata */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <span style={{ color: 'var(--accent-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{project.category}</span>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>{project.title}</h2>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={project.github} target="_blank" rel="noreferrer" className="btn secondary-btn" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaGithub /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn primary-btn" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}><FaCalendarAlt color="var(--accent-color)"/> {project.duration}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}><FaInfoCircle color="var(--accent-color)"/> Status: {project.status}</div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Overview</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{project.shortDesc}</p>
          </div>

          {/* Case Study Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>Challenges</h4>
              <p style={{ color: 'var(--text-secondary)' }}>{project.challenges}</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>Solution</h4>
              <p style={{ color: 'var(--text-secondary)' }}>{project.solution}</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem', gridColumn: '1 / -1' }}>
              <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>Architecture</h4>
              <p style={{ color: 'var(--text-secondary)' }}>{project.architecture}</p>
            </div>
          </div>

          {/* Features & Tech */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaCheckCircle color="var(--accent-color)" size={20}/> Key Features
              </h3>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaTools color="var(--accent-color)" size={20}/> Tech Stack
              </h3>
              <div className="tags" style={{ marginTop: '1rem' }}>
                {project.stack.map((tech, i) => <span key={i} className="tag">{tech}</span>)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
