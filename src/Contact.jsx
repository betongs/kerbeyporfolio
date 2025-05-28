import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
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
  
  return (
    <div id="contact" className="section contact-section">
      <h2>Get In Touch</h2>
      <p className="contact-intro">I'm currently available for freelance work and full-time positions. If you have a project that needs some creative work, feel free to contact me.</p>
      
      <div className={`contact-grid${visible ? ' animate-contact' : ''}`}>
        <div className="contact-card" style={{animationDelay: '0.1s'}}>
          <div className="contact-icon-wrapper">
            <FaEnvelope className="contact-icon" />
          </div>
          <h3>Email</h3>
          <p><a href="mailto:camposkerbeyesurena@gmail.com">camposkerbeyesurena@gmail.com</a></p>
        </div>
        
        <div className="contact-card" style={{animationDelay: '0.2s'}}>
          <div className="contact-icon-wrapper">
            <FaLinkedin className="contact-icon" />
          </div>
          <h3>LinkedIn</h3>
          <p><a href="https://linkedin.com/in/kerbeycampos" target="_blank" rel="noopener noreferrer">linkedin.com/in/kerbeycampos</a></p>
        </div>
        
        <div className="contact-card" style={{animationDelay: '0.3s'}}>
          <div className="contact-icon-wrapper">
            <FaGithub className="contact-icon" />
          </div>
          <h3>GitHub</h3>
          <p><a href="https://github.com/kerbeycampos" target="_blank" rel="noopener noreferrer">github.com/kerbeycampos</a></p>
        </div>
        
        <div className="contact-card" style={{animationDelay: '0.4s'}}>
          <div className="contact-icon-wrapper">
            <FaPhone className="contact-icon" />
          </div>
          <h3>Phone</h3>
          <p><a href="tel:+639385755408">+639385755408</a></p>
        </div>
      </div>
      
      <div className="contact-form-container">
        <h3>Send Me a Message</h3>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;