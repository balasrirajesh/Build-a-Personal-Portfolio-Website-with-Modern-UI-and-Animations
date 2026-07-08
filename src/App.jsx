import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Resume from './components/Resume';

import Background3D from './components/Background3D';
import SplashScreen from './components/SplashScreen';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
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

  return (
    <>
      {isBooting && <SplashScreen onComplete={() => setIsBooting(false)} />}

      <Background3D />
      <CustomCursor />

      <Navbar activePage={activePage} />
      
      <main>
            <div id="home" className="scroll-section"><Hero /></div>
            <div id="about" className="scroll-section" style={{paddingTop: '80px'}}><About /></div>
            <div id="skills" className="scroll-section" style={{paddingTop: '80px'}}><Skills /></div>
            <div id="experience" className="scroll-section" style={{paddingTop: '80px'}}><Experience /></div>
            <div id="projects" className="scroll-section" style={{paddingTop: '80px'}}><Projects /></div>
            <div id="certifications" className="scroll-section" style={{paddingTop: '80px'}}><Certifications /></div>
            <div id="achievements" className="scroll-section" style={{paddingTop: '80px'}}><Achievements /></div>
            <div id="resume" className="scroll-section" style={{paddingTop: '80px'}}><Resume /></div>
            <div id="contact" className="scroll-section" style={{paddingTop: '80px'}}><Contact /></div>
      </main>

      <footer>
        <p>&copy; 2026 Narendrapurapu Bala Sri Rajesh. Built with React.</p>
      </footer>
    </>
  );
}

export default App;
