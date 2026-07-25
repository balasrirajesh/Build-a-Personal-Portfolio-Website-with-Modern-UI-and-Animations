import React, { useRef } from 'react';
import {
  SiDart, SiPython, SiC, SiJavascript,
  SiFlutter, SiHtml5, SiReact,
  SiFirebase, SiNodedotjs, SiExpress,
  SiMysql, SiMongodb,
  SiGit, SiGithub, SiDocker, SiJenkins, SiPostman, SiPrisma, SiApachekafka, SiRabbitmq, SiTypescript, SiPostgresql, SiRedis, SiApachemaven
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaTools } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
  const bentoCategories = [
    {
      title: 'LANGUAGES',
      gridArea: 'lang',
      skills: [
        { name: 'JAVA', icon: <FaJava /> },
        { name: 'DART', icon: <SiDart /> },
        { name: 'JAVASCRIPT', icon: <SiJavascript /> },
        { name: 'TYPESCRIPT', icon: <SiTypescript /> },
        { name: 'C', icon: <SiC /> },
        { name: 'HTML', icon: <SiHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'PYTHON', icon: <SiPython /> }
      ]
    },
    {
      title: 'FRAMEWORKS & RUNTIMES',
      gridArea: 'frame',
      skills: [
        { name: 'SPRING BOOT', icon: <FaJava /> },
        { name: 'FLUTTER', icon: <SiFlutter /> },
        { name: 'NODE.JS', icon: <SiNodedotjs /> },
        { name: 'EXPRESS.JS', icon: <SiExpress /> },
        { name: 'REACT', icon: <SiReact /> },
        { name: 'PRISMA', icon: <SiPrisma /> }
      ]
    },
    {
      title: 'DATABASES',
      gridArea: 'db',
      skills: [
        { name: 'MYSQL', icon: <SiMysql /> },
        { name: 'POSTGRESQL', icon: <SiPostgresql /> },
        { name: 'MONGODB', icon: <SiMongodb /> },
        { name: 'REDIS', icon: <SiRedis /> },
        { name: 'FIREBASE', icon: <SiFirebase /> }
      ]
    },
    {
      title: 'MESSAGE BROKERS',
      gridArea: 'brokers',
      skills: [
        { name: 'RABBITMQ', icon: <SiRabbitmq /> },
        { name: 'KAFKA', icon: <SiApachekafka /> }
      ]
    },
    {
      title: 'DEVOPS & TOOLS',
      gridArea: 'devops',
      skills: [
        { name: 'DOCKER', icon: <SiDocker /> },
        { name: 'MAVEN', icon: <SiApachemaven /> },
        { name: 'GIT', icon: <SiGit /> },
        { name: 'GITHUB', icon: <SiGithub /> },
        { name: 'POSTMAN', icon: <SiPostman /> },
        { name: 'SONARQUBE', icon: <FaTools /> },
        { name: 'JENKINS', icon: <SiJenkins /> }
      ]
    }
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="skills" className="section">
      <ScrollReveal animation="fade-up" delay={0}>
        <div className="section-title-wrapper">
          <p className="section-subtitle">TECH STACK & TOOLS</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>
      </ScrollReveal>

      <div className="bento-grid">
        {bentoCategories.map((category, index) => (
          <ScrollReveal
            key={index}
            animation="fade-up"
            delay={index * 100}
            as="div"
            className="bento-category"
            data-area={category.gridArea}
            onMouseMove={handleMouseMove}
            style={{ position: 'relative' }}
          >
            <div className="bento-header">
              {category.title}
            </div>
            <div className="bento-items">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-box" title={skill.name}>
                  <div className="skill-box-icon">
                    {skill.icon}
                  </div>
                  <div className="skill-box-name">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
