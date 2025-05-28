import React, { useEffect, useState } from 'react';
import logo from './logo.svg'; // Use the existing React logo

function AboutMe() {
  const [visible, setVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  
  useEffect(() => { 
    // Delay the fade-in effect slightly for better UX
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    // Add scroll event listener for skills animation
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setSkillsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const skills = [
    { name: 'Microsoft Office', level: 95 },
    { name: 'POS Systems', level: 90 },
    { name: 'PHP', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'Laravel', level: 85 },
    { name: 'React', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Responsive Design', level: 85 }
  ];
  
  return (
    <section id="about" className={`about-me${visible ? ' fade-in' : ''}`}>
      <div className="hero-card">
        <div className="profile-pic" style={{ 
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="hero-content">
          <h1>Kerbey Campos</h1>
          <h3>PoS Specialist & IT Professional</h3>
          <p>I'm a <span className="highlight">PoS Specialist</span> in the IT industry with extensive experience in retail technology solutions. My expertise spans <span className="highlight">Microsoft Office</span>, <span className="highlight">POS systems</span>, and web development technologies including <span className="highlight">PHP</span>, <span className="highlight">CSS</span>, <span className="highlight">Laravel</span>, and <span className="highlight">React</span>. I'm passionate about creating efficient, user-friendly systems that enhance business operations.</p>
        </div>
      </div>
      
      <div id="skills" className="section">
        <h2>Professional Skills</h2>
        <div className={`skills-container${skillsVisible ? ' animate-skills' : ''}`}>
          {skills.map((skill, index) => (
            <div className="skill-item" key={index} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{
                    width: skillsVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;