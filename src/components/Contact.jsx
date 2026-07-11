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
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is open!
          </p>
        </ScrollReveal>

        {/* Contact Links: Required clickable mailto, GitHub and LinkedIn profile links */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2.5rem', 
            marginBottom: '3.5rem', 
            flexWrap: 'wrap',
            fontFamily: 'var(--font-code)',
            fontSize: '0.95rem'
          }}>
            <a 
              href="mailto:balasrirajesh.n@gmail.com" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              <FaEnvelope style={{ color: 'var(--accent-color)' }} /> balasrirajesh.n@gmail.com
            </a>
            <a 
              href="https://github.com/balasrirajesh" 
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              <FaGithub style={{ color: 'var(--accent-color)' }} /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/bala-sri-rajesh-narendrapurapu-20b44a291/" 
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              <FaLinkedin style={{ color: 'var(--accent-color)' }} /> LinkedIn
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ background: 'transparent', border: 'none', borderBottom: '2px solid var(--text-secondary)', padding: '1rem 0', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderBottomColor = 'var(--text-secondary)'}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
              <input 
                type="email" 
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ background: 'transparent', border: 'none', borderBottom: '2px solid var(--text-secondary)', padding: '1rem 0', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderBottomColor = 'var(--text-secondary)'}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
              <textarea 
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                style={{ background: 'transparent', border: 'none', borderBottom: '2px solid var(--text-secondary)', padding: '1rem 0', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', resize: 'none', transition: 'border-color 0.3s' }}
                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderBottomColor = 'var(--text-secondary)'}
                required
              ></textarea>
            </div>

            <button type="submit" style={{
              background: 'var(--accent-color)',
              color: '#fff',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '2rem',
              alignSelf: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 0 15px rgba(255, 87, 34, 0.4)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 87, 34, 0.6)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 87, 34, 0.4)'; }}
            >
              Say Hello
            </button>
            
            {status && (
              <div style={{ 
                fontSize: '0.9rem', 
                color: status.includes('success') ? '#4ade80' : status.includes('error') || status.includes('Failed') ? '#ef4444' : 'var(--text-secondary)', 
                textAlign: 'center', 
                marginTop: '1rem'
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
