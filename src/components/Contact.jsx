import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    // NOTE: Replace with actual Web3Forms access key
    const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    
    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      alert("Please enter your Web3Forms Access Key in Contact.jsx to enable form submission.");
      setStatus('');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Failed to send message.');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      setStatus('An error occurred.');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="section" style={{ padding: '120px 5%' }}>
      <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
        
        <ScrollReveal animation="fade-up">
          <div className="section-title-wrapper">
            <p className="section-subtitle">CONNECT WITH ME</p>
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
            I'm currently open to full-time roles, internships, and project collaborations. Feel free to send a message or reach out directly!
          </p>
        </ScrollReveal>

        {/* Contact Links */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1.5rem', 
            marginBottom: '3.5rem', 
            flexWrap: 'wrap',
            fontFamily: 'var(--font-code)',
            fontSize: '0.9rem'
          }}>
            <a 
              href="mailto:balasrirajesh.n@gmail.com" 
              className="social-icon"
              style={{ padding: '0.6rem 1.2rem' }}
            >
              <FaEnvelope style={{ color: 'var(--accent-color)' }} /> balasrirajesh.n@gmail.com
            </a>
            <a 
              href="https://github.com/balasrirajesh" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon"
              style={{ padding: '0.6rem 1.2rem' }}
            >
              <FaGithub style={{ color: 'var(--accent-emerald)' }} /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/bala-sri-rajesh-narendrapurapu-20b44a291/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon"
              style={{ padding: '0.6rem 1.2rem' }}
            >
              <FaLinkedin style={{ color: 'var(--accent-cyan)' }} /> LinkedIn
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <form onSubmit={handleSubmit} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', textAlign: 'left', padding: '3rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: 'var(--text-primary)', fontSize: '0.88rem', fontWeight: '600', fontFamily: 'var(--font-code)' }}>NAME</label>
              <input 
                type="text" 
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: '10px',
                  padding: '1rem', 
                  color: 'var(--text-primary)', 
                  fontSize: '1rem', 
                  outline: 'none', 
                  transition: 'all 0.3s var(--ease-out-expo)' 
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-color)';
                  e.target.style.boxShadow = '0 0 15px rgba(255, 87, 34, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: 'var(--text-primary)', fontSize: '0.88rem', fontWeight: '600', fontFamily: 'var(--font-code)' }}>EMAIL</label>
              <input 
                type="email" 
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: '10px',
                  padding: '1rem', 
                  color: 'var(--text-primary)', 
                  fontSize: '1rem', 
                  outline: 'none', 
                  transition: 'all 0.3s var(--ease-out-expo)' 
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-emerald)';
                  e.target.style.boxShadow = '0 0 15px rgba(0, 223, 137, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: 'var(--text-primary)', fontSize: '0.88rem', fontWeight: '600', fontFamily: 'var(--font-code)' }}>MESSAGE</label>
              <textarea 
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: '10px',
                  padding: '1rem', 
                  color: 'var(--text-primary)', 
                  fontSize: '1rem', 
                  outline: 'none', 
                  resize: 'none', 
                  transition: 'all 0.3s var(--ease-out-expo)' 
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-color)';
                  e.target.style.boxShadow = '0 0 15px rgba(255, 87, 34, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
                required
              ></textarea>
            </div>

            <button type="submit" style={{
              background: 'linear-gradient(135deg, #ff5722 0%, #e64a19 100%)',
              color: '#fff',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              marginTop: '1rem',
              alignSelf: 'center',
              transition: 'all 0.3s var(--ease-out-expo)',
              boxShadow: '0 0 20px rgba(255, 87, 34, 0.4)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 87, 34, 0.7)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 87, 34, 0.4)'; }}
            >
              Send Message
            </button>
            
            {status && (
              <div style={{ 
                fontSize: '0.9rem', 
                color: status.includes('success') ? '#4ade80' : status.includes('error') || status.includes('Failed') ? '#ef4444' : 'var(--text-secondary)', 
                textAlign: 'center', 
                marginTop: '0.5rem',
                fontFamily: 'var(--font-code)'
              }}>
                {status}
              </div>
            )}

          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
