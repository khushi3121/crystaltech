import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Hero from './components/Hero';
import Blog from './components/Blog';
import Testimonials from './components/Tesimonial';
import Service from './components/Service';
import Footer from './components/Footer';
import Counting from './components/Counting';
import Strength from './components/Strength';
import Logo from './components/Logo';
import Slide from './components/Slide';
import About from './components/About';

const App = () => {
  return (
    <div className="bg-container">
      {/* Hero & Navbar */}
      <Hero />

      {/* Sections with IDs for smooth scroll */}
      <section id="logo">
        <Logo />
      </section>

      <section id="portfolio">
        <Slide />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="strength">
        <Strength />
      </section>

      <section id="careers">
        <Counting />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Footer />
      </section>

      {/* Toast notifications */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
