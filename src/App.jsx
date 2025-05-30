import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">KC</div>
          <div className="flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About me</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Contact me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
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
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Hire Me
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-[600px] h-[600px] bg-blue-50 rounded-full relative">
              <img 
                src="/src/pogiko.jpg" 
                alt="Kerbey Campos" 
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-6 py-2 rounded-full z-10">
                PoS Specialist
              </div>
              <div className="absolute bottom-20 left-0 bg-blue-600 text-white px-6 py-2 rounded-full z-10">
                Developer
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App