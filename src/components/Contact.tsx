/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Mail, Share2, Send, CheckCircle2, AlertCircle, Database, Trash2, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from '../data';
import { ContactSubmission } from '../types';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  
  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [showInquiries, setShowInquiries] = useState(false);

  // Load existing inquiries from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ca_hybrid_inquiries');
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error reading localStorage', e);
    }
  }, []);

  // Sync to localStorage
  const saveToLocal = (newSubmissions: ContactSubmission[]) => {
    try {
      localStorage.setItem('ca_hybrid_inquiries', JSON.stringify(newSubmissions));
      setSubmissions(newSubmissions);
    } catch (e) {
      console.error('Error writing to localStorage', e);
    }
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Your name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    if (!message.trim()) {
      newErrors.message = 'Please type a quick message regarding your project inquiry';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more detail (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean API transmission
    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: new Date().toLocaleString(),
      };

      const revised = [newSubmission, ...submissions];
      saveToLocal(revised);

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Post-success cleanup
      setName('');
      setEmail('');
      setMessage('');

      // Auto clear success layout state after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 800);
  };

  const deleteSubmission = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = submissions.filter((sub) => sub.id !== id);
    saveToLocal(filtered);
  };

  const clearAllInquiries = () => {
    if (window.confirm('Are you sure you want to clear all local inquiries?')) {
      saveToLocal([]);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 bg-sage-wash relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column Information */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
              Let's Discuss Your Project
            </h2>
            <p className="font-sans text-base md:text-lg text-slate-text mb-12 max-w-md leading-relaxed">
              Get in touch with our experts to learn how CA Hybrid can accelerate your clean energy
              commercialization strategy.
            </p>

            <div className="space-y-8">
              {/* Email Address Link Card */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-6 group cursor-pointer select-none"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-forest-green shadow-sm group-hover:bg-forest-green group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-sans text-xs font-bold text-slate-text uppercase tracking-widest mb-1">
                    Email Address
                  </p>
                  <span className="font-headline text-[18px] sm:text-lg lg:text-xl font-bold text-primary group-hover:text-terracotta transition-colors duration-200">
                    {CONTACT_INFO.email}
                  </span>
                </div>
              </a>

              {/* LinkedIn Profile link */}
              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer select-none"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-forest-green shadow-sm group-hover:bg-[#0077B5] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-sans text-xs font-bold text-slate-text uppercase tracking-widest mb-1">
                    LinkedIn Profile
                  </p>
                  <span className="font-headline text-[18px] sm:text-lg lg:text-xl font-bold text-primary group-hover:text-terracotta transition-colors duration-200">
                    {CONTACT_INFO.linkedinName}
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column Form Container */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-outline-variant/60 relative"
          >
            {/* Success Overlay state */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-forest-green mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="font-sans text-slate-text text-sm max-w-sm mb-6">
                    Thank you. Your consultation draft has been received. Our chief consultants will review your design requirements and correspond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2 border border-forest-green text-forest-green hover:bg-forest-green hover:text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block font-sans text-xs font-bold text-primary mb-2 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className={`w-full bg-surface-container-low border ${
                      errors.name ? 'border-error ring-1 ring-error' : 'border-outline-variant/80'
                    } rounded-lg px-4 py-3 text-slate-text placeholder-slate-text/45 focus:outline-none focus:ring-2 focus:ring-terracotta/70 focus:bg-white transition-all`}
                  />
                  {errors.name && (
                    <span className="text-xs text-error mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block font-sans text-xs font-bold text-primary mb-2 uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className={`w-full bg-surface-container-low border ${
                      errors.email ? 'border-error ring-1 ring-error' : 'border-outline-variant/80'
                    } rounded-lg px-4 py-3 text-slate-text placeholder-slate-text/45 focus:outline-none focus:ring-2 focus:ring-terracotta/70 focus:bg-white transition-all`}
                  />
                  {errors.email && (
                    <span className="text-xs text-error mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-xs font-bold text-primary mb-2 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="How can we help?"
                  rows={4}
                  disabled={isSubmitting}
                  className={`w-full bg-surface-container-low border ${
                    errors.message ? 'border-error ring-1 ring-error' : 'border-outline-variant/80'
                  } rounded-lg px-4 py-3 text-slate-text placeholder-slate-text/45 focus:outline-none focus:ring-2 focus:ring-terracotta/70 focus:bg-white transition-all resize-none`}
                />
                {errors.message && (
                  <span className="text-xs text-error mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-error" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-forest-green text-white font-sans text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-forest-green/90 active:scale-[0.99] transition-all flex justify-center items-center gap-2 cursor-pointer shadow-lg disabled:opacity-75 disabled:pointer-events-none"
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Transmitting Inquiry...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Developer Local Inquiries Live Logger Portal */}
            <div className="mt-8 pt-6 border-t border-outline-variant/55 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setShowInquiries(!showInquiries)}
                className="flex items-center justify-between text-xs text-forest-green hover:text-terracotta transition-colors font-sans font-bold uppercase tracking-wider py-1 cursor-pointer select-none"
              >
                <span className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-forest-green" />
                  Developer Portal: Inquiries Monitor ({submissions.length})
                </span>
                <span className="text-[10px] bg-sage-wash text-forest-green px-2 py-0.5 rounded">
                  {showInquiries ? 'Hide' : 'Expand Live Log'}
                </span>
              </button>

              <AnimatePresence>
                {showInquiries && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/60 max-h-72 overflow-y-auto space-y-3 mt-1.5 scrollbar-thin">
                      {submissions.length === 0 ? (
                        <p className="text-xs text-slate-text/75 text-center italic py-6">
                          No local inquiries found. Submit the form above to see live updates in real-time.
                        </p>
                      ) : (
                        <>
                          <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                            <span className="text-[10px] text-slate-text font-bold uppercase">
                              Active Local Storage Stack (LIFO)
                            </span>
                            <button
                              type="button"
                              onClick={clearAllInquiries}
                              className="text-[10px] text-error hover:underline flex items-center gap-1 font-bold cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              Wipe Data
                            </button>
                          </div>
                          {submissions.map((sub) => (
                            <div
                              key={sub.id}
                              className="bg-white p-3.5 rounded-lg border border-outline-variant/40 shadow-sm relative group/item"
                            >
                              <div className="flex justify-between items-start gap-4 mb-2">
                                <div>
                                  <h4 className="text-xs font-bold text-primary font-headline">
                                    {sub.name}
                                  </h4>
                                  <p className="text-[11px] text-forest-green font-mono">
                                    {sub.email}
                                  </p>
                                </div>
                                <span className="text-[9px] text-slate-text bg-surface-container px-2 py-0.5 rounded font-mono flex items-center gap-1">
                                  <Calendar className="w-2.5 h-2.5" />
                                  {sub.createdAt.split(',')[0]}
                                </span>
                              </div>
                              <p className="text-xs text-slate-text leading-relaxed bg-surface-container-low/50 p-2 rounded italic">
                                "{sub.message}"
                              </p>
                              <button
                                type="button"
                                onClick={(e) => deleteSubmission(sub.id, e)}
                                className="absolute top-2 right-2 text-slate-text hover:text-error opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 cursor-pointer p-1"
                                title="Delete inquiry"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Accent Globe */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
