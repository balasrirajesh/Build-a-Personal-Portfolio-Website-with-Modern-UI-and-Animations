import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING...');
    
    // NOTE: You must replace this placeholder with your actual Web3Forms access key
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
        setStatus('TRANSMISSION SUCCESSFUL');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('TRANSMISSION FAILED');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('TRANSMISSION ERROR');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="section" style={{ padding: '120px 5%' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', overflow: 'hidden' }}>
          
          {/* Left Panel: Console Feed */}
          <div style={{ padding: '3rem', borderRight: '1px solid var(--card-border)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'var(--font-code)', fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '2rem', letterSpacing: '2px' }}>
              &gt;_ SYS.CONSOLE_FEED
            </h3>
            <div style={{ width: '100%', height: '1px', background: 'var(--card-border)', marginBottom: '2rem' }}></div>
            
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '2' }}>
              <p>[00:00:00] SYSTEM.READY // UPLINK GATEWAY STABLE</p>
              <p>[00:00:01] ENDPOINT DETECTED: api.web3forms.com</p>
              <p style={{ marginTop: '2rem' }}>AWAITING_PAYLOAD...</p>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '4rem', fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <p>ACCESS_KEY: eb45e3d...35be</p>
              <p>SECURE_SHIELDS: ACTIVE (TLS 1.3)</p>
              <p>GATEWAY ORBITAL STRETCH</p>
            </div>
          </div>

          {/* Right Panel: Form Inputs */}
          <div style={{ padding: '3rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  SENDER_IDENTITY
                </label>
                <input 
                  type="text" 
                  placeholder="ENTER YOUR NAME..."
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--card-border)', borderRadius: '8px', padding: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-code)', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  RETURN_COORDINATES
                </label>
                <input 
                  type="email" 
                  placeholder="ENTER YOUR EMAIL..."
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--card-border)', borderRadius: '8px', padding: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-code)', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  &gt;_ MESSAGE_PAYLOAD
                </label>
                <textarea 
                  rows="5"
                  placeholder="="
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--card-border)', borderRadius: '8px', padding: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-code)', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }}
                ></textarea>
              </div>

              <button type="submit" style={{
                background: 'var(--text-primary)',
                color: 'var(--bg-color)',
                border: 'none',
                padding: '1.2rem',
                borderRadius: '8px',
                fontFamily: 'var(--font-code)',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                letterSpacing: '1px',
                cursor: 'pointer',
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                TRANSMIT UPLINK <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
              
              {status && (
                <div style={{ 
                  fontFamily: 'var(--font-code)', 
                  fontSize: '0.8rem', 
                  color: status.includes('SUCCESS') ? '#4ade80' : status.includes('ERROR') || status.includes('FAILED') ? '#ef4444' : 'var(--text-secondary)', 
                  textAlign: 'center', 
                  marginTop: '0.5rem',
                  letterSpacing: '1px'
                }}>
                  {status}
                </div>
              )}

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
