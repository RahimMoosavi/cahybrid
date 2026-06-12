/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LOGO_URL, CONTACT_INFO } from '../data';

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <footer className="w-full py-10 bg-paper-white border-t border-outline-variant" id="app-footer">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side Logo & Brand */}
        <div className="flex items-center gap-3">
          <img
            alt="CA Hybrid Logo"
            className="h-8 w-auto object-contain select-none"
            src={LOGO_URL}
            referrerPolicy="no-referrer"
          />
          <span className="font-headline text-lg text-terracotta font-bold tracking-tight">
            CA Hybrid
          </span>
        </div>

        {/* Center / Right Links */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          <a
            className="font-sans text-xs md:text-sm text-slate-text hover:text-terracotta hover:underline transition-colors"
            href={CONTACT_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-sans text-xs md:text-sm text-slate-text hover:text-terracotta hover:underline transition-colors cursor-pointer"
            href="#privacy-policy"
            onClick={(e) => e.preventDefault()}
          >
            Privacy Policy
          </a>
          <a
            className="font-sans text-xs md:text-sm text-slate-text hover:text-terracotta hover:underline transition-colors cursor-pointer"
            href="#terms-of-service"
            onClick={(e) => e.preventDefault()}
          >
            Terms of Service
          </a>
          <a
            className="font-sans text-xs md:text-sm text-slate-text hover:text-terracotta hover:underline transition-colors"
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
          >
            Contact
          </a>
        </div>

        {/* Right Side Copyright */}
        <p className="font-sans text-xs text-slate-text text-center md:text-right leading-relaxed max-w-[280px] sm:max-w-none">
          © {new Date().getFullYear()} CA Hybrid. Professional Engineering for Green Energy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
