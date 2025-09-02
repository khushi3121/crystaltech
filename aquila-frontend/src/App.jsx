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
    <>
      <Hero />
      <Logo />
      <Slide />
      <About />
      <Strength />
      <Counting />
      <Service />
      <Testimonials />
      <Blog />
      <Footer />
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
    </>
  );
}

export default App;
