import React from 'react'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Recommended from './components/Recommended';
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function App() {
  return <>
  <ScrollToTop />
  <Navbar />
  <Hero />
  <Services />
  <Recommended />
  <Testimonials />
  <Footer />

  
  </>;
  
}
