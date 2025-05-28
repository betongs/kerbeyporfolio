import React, { useState } from 'react';
import './Sidebar.css';
// Add this import at the top of your file
import { FaHome, FaBolt, FaFolder, FaEnvelope, FaFile, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Default to open

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? '←' : '→'}
      </button>
      <div className="sidebar-header">
        <h2>Kerbey Campos</h2>
        <p>PoS Specialist & IT Professional</p>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="#about">
              <span className="icon"><FaHome /></span>
              <span className="text">About Me</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <span className="icon"><FaBolt /></span>
              <span className="text">Skills</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <span className="icon"><FaFolder /></span>
              <span className="text">Projects</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="icon"><FaEnvelope /></span>
              <span className="text">Contact</span>
            </a>
          </li>
          <li>
            <a href="#resume">
              <span className="icon"><FaFile /></span>
              <span className="text">Resume</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>© 2023 Kerbey Campos</p>
      </div>
    </div>
  );
};

export default Sidebar;