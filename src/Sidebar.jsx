import React, { useState } from 'react';
import { FaHome, FaBolt, FaFolder, FaEnvelope, FaFile, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed left-0 h-screen bg-gradient-to-b from-secondary to-gray-800 text-gray-100 transition-all duration-300 ease-in-out overflow-hidden shadow-lg ${isOpen ? 'w-64' : 'w-16'}`}>
      <button 
        onClick={toggleSidebar} 
        className="absolute top-5 right-3 bg-opacity-10 bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-20 transition-all duration-200"
      >
        {isOpen ? '←' : '→'}
      </button>
      
      <div className="p-6">
        <h2 className="text-xl font-bold truncate">{isOpen ? 'Kerbey Campos' : 'KC'}</h2>
        <p className="text-sm text-gray-400 mt-1 truncate">PoS Specialist & IT Professional</p>
      </div>

      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          <li>
            <a href="#about" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200">
              <FaHome className="text-xl" />
              {isOpen && <span className="text-sm">About Me</span>}
            </a>
          </li>
          <li>
            <a href="#skills" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200">
              <FaBolt className="text-xl" />
              {isOpen && <span className="text-sm">Skills</span>}
            </a>
          </li>
          {/* Add other menu items similarly */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;