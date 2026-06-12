/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ABOUT_EV_CHARGING_IMAGE, ABOUT_FACILITY_IMAGE, ABOUT_SOLAR_IMAGE, ABOUT_WIND_IMAGE } from '../data';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const imageHover = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Narrative */}
        <div className="lg:col-span-5" id="about-text-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-headline text-3xl md:text-4xl lg:text-[44px] font-bold text-primary mb-6 leading-tight">
              Envisioning a <span className="text-terracotta">Sustainable Future</span>
            </h2>
            <p className="font-sans text-xs md:text-sm font-bold text-forest-green mb-8 tracking-[0.2em] uppercase leading-relaxed">
              Clean Energy, Business and Technology Consulting
            </p>

            <div className="space-y-6 font-sans text-sm md:text-base text-slate-text leading-relaxed">
              <p>
                CA Hybrid Inc. is a Clean Energy, Business and Technology Consulting firm focused on renewable
                and alternative power generation, and electrical energy storage. CA Hybrid serves a full
                spectrum of international clients, including investors, entrepreneurs, technology developers and
                manufacturers.
              </p>
              <p>
                CA Hybrid envisions a future powered by Clean Energy Technologies, an electric grid that
                integrates Renewable, Alternative and Electrical Energy Storage into a "Green Smart Grid".
                Actualization of this necessitates a continual evolution of energy technologies to lower costs
                and expand benefits.
              </p>
              <p>
                With a strong entrepreneurial drive and comprehensive knowledge of the energy industry, CA
                Hybrid delivers a complete framework of tools to achieve Successful Commercialization of your
                Clean Energy Technology.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column Layout 4-Panel Bento */}
        <div className="lg:col-span-7 mt-12 lg:mt-0 relative pl-0 md:pl-4 lg:pl-12" id="about-bento-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Left Staggered Column */}
            <div className="space-y-4">
              {/* Wind Energy Photograph */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="rounded-xl overflow-hidden border border-outline-variant/60 shadow-md group cursor-pointer"
              >
                <motion.img
                  variants={imageHover}
                  whileHover="hover"
                  className="h-40 sm:h-48 w-full object-cover rounded-xl"
                  alt="Wind turbines generating renewable clean energy"
                  src={ABOUT_WIND_IMAGE}
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* High Tech Glass Facility Photograph */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="rounded-xl overflow-hidden border border-outline-variant/60 shadow-md group cursor-pointer"
              >
                <motion.img
                  variants={imageHover}
                  whileHover="hover"
                  className="h-56 sm:h-64 w-full object-cover rounded-xl"
                  alt="Rooftop solar panels on a northern Canadian community building"
                  src={ABOUT_FACILITY_IMAGE}
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Right Staggered Column */}
            <div className="space-y-4 pt-8">
              {/* Detailed Solar Grid Photograph */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="rounded-xl overflow-hidden border border-outline-variant/60 shadow-md group cursor-pointer"
              >
                <motion.img
                  variants={imageHover}
                  whileHover="hover"
                  className="h-56 sm:h-64 w-full object-cover rounded-xl"
                  alt="Solar panels with battery storage units for clean energy"
                  src={ABOUT_SOLAR_IMAGE}
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* EV Charging Technology Photograph */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="rounded-xl overflow-hidden border border-outline-variant/60 shadow-md group cursor-pointer"
              >
                <motion.img
                  variants={imageHover}
                  whileHover="hover"
                  className="h-40 sm:h-48 w-full object-cover rounded-xl"
                  alt="Electric vehicle charging station for clean transportation"
                  src={ABOUT_EV_CHARGING_IMAGE}
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Connected Architectural Line Accent */}
          <div className="absolute top-1/2 left-0 w-12 lg:w-16 h-px bg-terracotta/60 hidden lg:block -translate-x-full"></div>
        </div>
      </div>
    </section>
  );
}
