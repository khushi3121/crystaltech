import React from 'react'
import Hero from './components/Hero'
import Blog from './components/Blog'
import Testimonials from './components/Tesimonial'
import Service from './components/Service'
import Footer from './components/Footer'
import Counting from './components/Counting'
import Strength from './components/Strength'
import Logo from './components/Logo'
import Slide from'./components/Slide'
import About from './components/About'

const App = () => {
  return (
    <>
    <Hero/>
    <Logo/>
    <Slide/>
    <About/>
    <Strength/>
    <Counting/>
    <Service/>
    <Testimonials/>
    <Blog/>
    <Footer/>
      
    </>
  )
}

export default App
