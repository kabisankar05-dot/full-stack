import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-lighter to-dark overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20 -z-10"></div>

      {/* Main Content */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
