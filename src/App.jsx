import './Sidebar.css';
import './App.css';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <Sidebar />
      <main className="transition-all duration-300 ease-in-out ml-16 lg:ml-64 p-8">
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;