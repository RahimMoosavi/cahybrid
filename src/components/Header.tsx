/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_URL } from '../data';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
          isScrolled ? 'h-16 shadow-md border-outline-variant/50' : 'h-20 border-outline-variant shadow-sm'
        }`}
      >
        <div className="max-w-[1440px] h-full mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center gap-3 md:gap-4 select-none hover:opacity-90 transition-opacity"
            id="nav-logo-link"
          >
            <img
              alt="CA Hybrid Logo"
              className="h-10 md:h-12 w-auto object-contain"
              src={LOGO_URL}
              referrerPolicy="no-referrer"
            />
            <span className="font-headline text-lg md:text-xl lg:text-2xl font-bold text-terracotta tracking-tight whitespace-nowrap">
              CA Hybrid
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 bg-transparent" id="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`font-sans text-[15px] font-semibold tracking-wide transition-all duration-200 py-1 border-b-2 relative ${
                  activeSection === item.id
                    ? 'text-forest-green border-terracotta font-bold'
                    : 'text-slate-text border-transparent hover:text-terracotta'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="ml-2 px-5 py-2.5 bg-forest-green text-white font-sans text-sm font-semibold rounded-lg hover:bg-forest-green/90 active:scale-[0.98] transition-all flex items-center gap-1 shadow-sm"
              id="cta-nav-button"
            >
              Let's Chat!
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-forest-green focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            id="mobile-drawer-overlay"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white p-8 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-8 mt-16">
                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className={`text-xl font-headline font-semibold text-left transition-colors ${
                        activeSection === item.id
                          ? 'text-forest-green pl-2 border-l-4 border-terracotta'
                          : 'text-slate-text hover:text-terracotta pl-0'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <p className="text-xs text-slate-text tracking-wide text-center">
                  CA Hybrid Green Energy Engineering
                </p>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="w-full text-center py-4 bg-forest-green text-white font-sans text-sm font-bold rounded-lg hover:bg-forest-green/95 transition-colors shadow-lg"
                  id="mobile-menu-chat-btn"
                >
                  Let's Chat!
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
