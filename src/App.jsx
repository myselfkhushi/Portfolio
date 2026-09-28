import React from 'react';
import Intro from './components/Intro';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#090d16] min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased">
      {/* 1. Intro Section (Navbar + Hero) */}
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