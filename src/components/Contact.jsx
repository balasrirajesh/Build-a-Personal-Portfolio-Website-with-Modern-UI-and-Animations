import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact section fade-in-up">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">Currently looking for new opportunities. My inbox is always open!</p>
      <div className="contact-links">
        <a href="mailto:narendrapurapubalasrirajesh@gmail.com" className="contact-card glass-card">
          <span className="icon">✉️</span>
          <span style={{ fontSize: '0.8rem', wordBreak: 'break-all' }}>narendrapurapubalasrirajesh@gmail.com</span>
        </a>
        <a href="tel:+919110536990" className="contact-card glass-card">
          <span className="icon">📱</span>
          <span>+91 91105 36990</span>
        </a>
        <a href="https://www.linkedin.com/in/bala-sri-rajesh-narendrapurapu-20b44a291/" className="contact-card glass-card" target="_blank" rel="noreferrer">
          <span className="icon">💼</span>
          <span>LinkedIn Profile</span>
        </a>
        <a href="https://github.com/balasrirajesh" className="contact-card glass-card" target="_blank" rel="noreferrer">
          <span className="icon">🐙</span>
          <span>GitHub Profile</span>
        </a>
      </div>
      <p className="location-text">📍 Rajamundry, Andhra Pradesh</p>
    </section>
  );
};

export default Contact;
