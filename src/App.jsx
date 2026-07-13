import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'; 
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

// A unified Home layout component to maximize landing page flow and scannability
const Home = () => (
  <div className="space-y-16 sm:space-y-24">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Achievements />
    <Contact />
  </div>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      {/* Root wrapper injecting dark utility tags down the DOM tree */}
      <div className={`${isDarkMode ? 'dark' : ''} font-sans antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
          
          {/* Header persistent layout panel passing global dark configuration handles */}
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

          {/* Core Content Hub - Structured grid layout framing responsive breakpoints */}
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
            <Routes>
              {/* Single-page smooth rolling root showcase target view */}
              <Route path="/" element={<Home />} />
              
              {/* Standalone sub-routes for direct tab isolation navigation links */}
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer persistent layout container */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;