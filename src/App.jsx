import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 selection:bg-zinc-800 selection:text-zinc-50 font-sans antialiased relative">
      {/* Floating Capsule Header */}
      <Navbar />

      {/* 1. Intro Section */}
      <Intro />

      {/* 2. Technical Skills Section */}
      <TechnicalSkills />

      {/* 3. Projects Section */}
      <Projects />

      {/* 4. Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

