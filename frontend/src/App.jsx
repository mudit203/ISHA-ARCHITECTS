import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotoCarousel from './components/PhotoCarousel';
import Footer from './components/Footer';
import ContactForm from './components/ContactFor';
import About from './components/About';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PhotoCarousel />
      <About/>
      <ContactForm/>
      <Footer/>
      
    </div>
  );
}

export default App;