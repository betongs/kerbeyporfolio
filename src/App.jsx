import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const pageVariants = {
    initial: { opacity: 0, x: -200, scale: 0.8 },
    enter: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      x: 200, 
      scale: 0.8,
      transition: { duration: 0.5, ease: 'easeIn' }
    }
  }

  const handleNavigation = (section) => {
    setCurrentSection(section)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">KC</div>
          <div className="flex items-center space-x-8">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('home')}
              className={`cursor-pointer hover:text-blue-600 transition-colors ${currentSection === 'home' ? 'text-blue-600' : ''}`}
            >
              Home
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('services')}
              className={`cursor-pointer hover:text-blue-600 transition-colors ${currentSection === 'services' ? 'text-blue-600' : ''}`}
            >
              Services
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('about')}
              className={`cursor-pointer hover:text-blue-600 transition-colors ${currentSection === 'about' ? 'text-blue-600' : ''}`}
            >
              About me
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('projects')}
              className={`cursor-pointer hover:text-blue-600 transition-colors ${currentSection === 'projects' ? 'text-blue-600' : ''}`}
            >
              Projects
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact me
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Main Content with AnimatePresence for page transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          className="min-h-screen pt-20"
        >
          {currentSection === 'home' && (
            <section className="pt-32 pb-20 px-4">
              <div className="container mx-auto flex items-center justify-between">
                <div className="max-w-2xl">
                  <div className="inline-block border-2 border-blue-600 rounded-lg px-4 py-2 mb-6">
                    <span className="text-xl">Hello !</span>
                  </div>
                  <h1 className="text-5xl font-bold mb-4">
                    I'm <span className="text-blue-600">Kerbey Campos</span>,
                  </h1>
                  <h2 className="text-4xl font-bold mb-6">PoS Specialist & Developer</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Detail-oriented IT professional with expertise in Point of Sale systems
                    and web development, specializing in creating efficient business solutions.
                  </p>
                  <div className="flex space-x-4">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Hire Me
                    </motion.button>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-[600px] h-[600px] bg-blue-50 rounded-full relative">
                    <img 
                      src="/images/pogiko.jpg" 
                      alt="Kerbey Campos" 
                      className="absolute inset-0 w-full h-full object-cover rounded-full"
                    />
                    <motion.div 
                      className="absolute top-4 right-4 bg-blue-600 text-white px-6 py-2 rounded-full z-10"
                      whileHover={{ scale: 1.1 }}
                    >
                      PoS Specialist
                    </motion.div>
                    <motion.div 
                      className="absolute bottom-20 left-0 bg-blue-600 text-white px-6 py-2 rounded-full z-10"
                      whileHover={{ scale: 1.1 }}
                    >
                      Developer
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {currentSection === 'services' && (
            <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
              <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-blue-600">POS Backend Support</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Download and manage inventory data</li>
                      <li>• Process transaction records</li>
                      <li>• Handle price updates and management</li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </section>
          )}

          {currentSection === 'projects' && (
            <section className="py-20 px-4">
              <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-blue-600">Form System</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">A paperless solution featuring:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li>Online form submission</li>
                      <li>Digital document management</li>
                      <li>Efficient paperless workflow</li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-blue-600">Sorting System</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Advanced POS analytics including:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li>Product sorting and analysis</li>
                      <li>Top 10 products tracking</li>
                      <li>Category performance analysis</li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </section>
          )}

          {currentSection === 'contact' && (
            <motion.section 
              className="py-20 px-4 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center space-x-3"
                    whileHover={{ x: 10 }}
                  >
                    <FaEnvelope className="text-blue-600 text-xl" />
                    <a href="mailto:camposkerbeyesurena@gmail.com" className="hover:text-blue-600 transition-colors">
                      camposkerbeyesurena@gmail.com
                    </a>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3"
                    whileHover={{ x: 10 }}
                  >
                    <FaPhone className="text-blue-600 text-xl" />
                    <a href="tel:09058020823" className="hover:text-blue-600 transition-colors">
                      09058020823
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {currentSection === 'about' && (
            <section className="py-20 px-4">
              <div className="container mx-auto max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
                  <div className="space-y-6 text-gray-600 dark:text-gray-300">
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg"
                    >
                      Hi! I'm someone who's diving headfirst into the world of programming and web development — starting from scratch, fueled by pure passion and curiosity. I'm currently rebuilding my own sorter and forms system, and loving every moment of the process.
                    </motion.p>
                    
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg"
                    >
                      Even though I'm just getting started, I'm excited about writing clean, functional code and creating systems that actually work. I believe learning by doing is the best way forward, and I'm not afraid to break things (and fix them again!).
                    </motion.p>
                    
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-lg"
                    >
                      I'm also the kind of person who believes in keeping things light — yes, I love coding, but I also like to have a laugh along the way. So if I can build something awesome and make you smile while doing it, I'd say I'm on the right path.
                    </motion.p>
                    
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-lg font-semibold text-blue-600 dark:text-blue-400"
                    >
                      Let's code something cool.
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App