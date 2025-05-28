import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with Laravel and React. Features include product management, user authentication, shopping cart, and payment processing.",
      image: "https://via.placeholder.com/300x200/3182ce/FFFFFF?text=E-commerce",
      tech: ["Laravel", "React", "MySQL", "Stripe API"],
      github: "#",
      live: "#"
    },
    {
      title: "POS System",
      description: "Custom point-of-sale system for retail businesses with inventory management, sales tracking, and reporting features.",
      image: "https://via.placeholder.com/300x200/3182ce/FFFFFF?text=POS+System",
      tech: ["PHP", "JavaScript", "SQL", "Bootstrap"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React, featuring responsive design, animations, and modern UI/UX principles.",
      image: "https://via.placeholder.com/300x200/3182ce/FFFFFF?text=Portfolio",
      tech: ["React", "CSS", "JavaScript"],
      github: "#",
      live: "#"
    }
  ];
  
  return (
    <div id="projects" className="section">
      <h2>Featured Projects</h2>
      <div className={`projects-grid${visible ? ' animate-projects' : ''}`}>
        {projects.map((project, index) => (
          <div className="project-card" key={index} style={{animationDelay: `${index * 0.2}s`}}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View GitHub Repository">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="View Live Project">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;