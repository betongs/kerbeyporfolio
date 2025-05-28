import './Sidebar.css';
import './App.css';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main-content">
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;