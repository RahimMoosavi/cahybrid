/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Competencies from './components/Competencies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth-scroll navigation Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      let current = 'home';
      const scrollPos = window.scrollY + 160; // offset lookup

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-on-surface font-sans antialiased min-h-screen">
      {/* Navigation Bar */}
      <Header activeSection={activeSection} />

      {/* Main Sections */}
      <main className="w-full">
        {/* Home / Hero Section */}
        <Hero />

        {/* Services / Core Competencies Section */}
        <Competencies />

        {/* About Us / Sustainability Section */}
        <About />

        {/* Contact Us / Form Section */}
        <Contact />
      </main>

      {/* Clean Footer Row */}
      <Footer />
    </div>
  );
}
