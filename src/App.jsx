import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Projects from './components/Projects';         
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectDetail from './components/ProjectDetail';
import RevealSection from './components/RevealSection';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const projectMatch = window.location.pathname.match(/^\/projects\/(\d+)$/);

  if (projectMatch) {
    return <ProjectDetail projectId={projectMatch[1]} />;
  }

  return (
    <div className={darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <RevealSection><Hero darkMode={darkMode} /></RevealSection>
      <RevealSection><About darkMode={darkMode} /></RevealSection>
      <RevealSection><Education darkMode={darkMode} /></RevealSection>
      <RevealSection><Experiences darkMode={darkMode} /></RevealSection>
      <RevealSection><Projects darkMode={darkMode} /></RevealSection>
      <RevealSection><Skills darkMode={darkMode} /></RevealSection>
      <RevealSection><Contact darkMode={darkMode} /></RevealSection>
      <RevealSection><Footer darkMode={darkMode} /></RevealSection>
    </div>
  );
}

export default App;