import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '1rem',
          backgroundColor: 'var(--royal-blue)',
          color: '#FFFFFF',
          padding: '0.75rem 1.25rem',
          zIndex: 100,
          borderRadius: 'var(--radius-sm)',
          transition: 'top var(--transition-fast)',
          fontWeight: 600,
        }}
        onFocus={(e) => (e.currentTarget.style.top = '1rem')}
        onBlur={(e) => (e.currentTarget.style.top = '-100px')}
      >
        Skip to main content
      </a>

      {/* Header & Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" style={{ flex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
