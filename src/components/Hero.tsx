/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Bolt, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_BATTERY_IMAGE } from '../data';

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <section
      id="home"
      className="relative pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden min-h-[90vh] flex items-center bg-background"
    >
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left column info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <span className="font-sans text-sm font-semibold text-terracotta uppercase tracking-[0.15em] mb-4 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-terracotta rounded-full inline-block animate-pulse"></span>
            Engineering for Sustainability
          </span>

          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] mb-6 text-balance">
            Professional Engineering for{' '}
            <span className="text-forest-green font-extrabold relative inline-block">
              Green Energy Technologies
            </span>
          </h1>

          <p className="font-sans text-base md:text-lg text-slate-text mb-10 max-w-lg leading-relaxed">
            Leading the transition to a sustainable future through smart grid innovation, advanced storage
            solutions, and comprehensive clean energy consulting. Providing global technical consultancy of the
            highest precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, '#services')}
              className="px-8 py-4 bg-terracotta text-white font-sans text-sm font-bold rounded-lg shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-explore-btn"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, '#about')}
              className="px-8 py-4 border border-forest-green text-forest-green font-sans text-sm font-semibold rounded-lg hover:bg-forest-green hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
              id="hero-learn-btn"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Right column visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-6 mt-12 lg:mt-0 relative flex justify-center"
        >
          <div className="relative w-full max-w-xl">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative border border-outline-variant/30 group">
              <img
                alt="Green Energy Battery Illustration"
                className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700 select-none cursor-pointer"
                src={HERO_BATTERY_IMAGE}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>

            {/* Technical Badge Overlay */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-outline-variant hidden sm:block max-w-[280px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage-wash rounded-full flex items-center justify-center text-forest-green flex-shrink-0 animate-bounce">
                  <Bolt className="w-6 h-6 fill-forest-green" />
                </div>
                <div>
                  <p className="font-sans text-[13px] font-bold text-slate-text tracking-wide uppercase">
                    Established Precision
                  </p>
                  <p className="font-headline text-lg font-bold text-primary whitespace-nowrap">
                    Clean Energy
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-sage-wash/40 rounded-full blur-3xl opacity-60 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-sage-wash/30 rounded-full blur-3xl opacity-40 z-0 pointer-events-none"></div>
    </section>
  );
}
