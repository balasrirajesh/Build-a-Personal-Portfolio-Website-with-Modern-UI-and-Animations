import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Background3D from './components/Background3D';
import SplashScreen from './components/SplashScreen';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isBooting, setIsBooting] = useState(true);
  const [homeVisible, setHomeVisible] = useState(false);

  // Suppress all child CSS animations while the page is loading
  useEffect(() => {
    document.body.classList.add('page-loading');
  }, []);

  useEffect(() => {
    // Force start at top of page on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id);
        }
      });
    }, { threshold: 0.2 });

    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleFadeStart = () => {
    // Homepage starts fading in at the EXACT same moment splash fades out
    setHomeVisible(true);
    // Unfreeze child animations after the crossfade completes (0.9s)
    setTimeout(() => {
      document.body.classList.remove('page-loading');
    }, 900);
  };

  const handleSplashComplete = () => {
    setIsBooting(false);
  };

  return (
    <>
      {isBooting && <SplashScreen onComplete={handleSplashComplete} onFadeStart={handleFadeStart} />}

      <Background3D />
      <CustomCursor />

      {/* The entire homepage crossfades in AS the splash fades out — simultaneous */}
      <div id="home-wrapper" style={{
        opacity: homeVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in',
        minHeight: '100vh',
      }}>
        <Navbar activePage={activePage} />

        <main>
          <div id="home" className="scroll-section"><Hero /></div>
          <div id="about" className="scroll-section" style={{paddingTop: '80px'}}><About /></div>
          <div id="skills" className="scroll-section" style={{paddingTop: '80px'}}><Skills /></div>
          <div id="experience" className="scroll-section" style={{paddingTop: '80px'}}><Experience /></div>
          <div id="projects" className="scroll-section" style={{paddingTop: '80px'}}><Projects /></div>
          <div id="certifications" className="scroll-section" style={{paddingTop: '80px'}}><Certifications /></div>
          <div id="resume" className="scroll-section" style={{paddingTop: '80px'}}><Resume /></div>
          <div id="contact" className="scroll-section" style={{paddingTop: '80px'}}><Contact /></div>
        </main>

        <footer>
          <p>&copy; 2026 Narendrapurapu Bala Sri Rajesh. Built with React.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
