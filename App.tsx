import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Services />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;