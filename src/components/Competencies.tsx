/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Zap, Home, BatteryCharging, Network, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPETENCIES } from '../data';
import { CompetencyCard } from '../types';

export default function Competencies() {
  const getIcon = (type: CompetencyCard['iconName']) => {
    switch (type) {
      case 'ev':
        return <Zap className="w-7 h-7 text-forest-green" strokeWidth={2.2} />;
      case 'energy':
        return <Home className="w-7 h-7 text-forest-green" strokeWidth={2.2} />;
      case 'battery':
        return <BatteryCharging className="w-7 h-7 text-forest-green" strokeWidth={2.2} />;
      case 'grid':
        return <Network className="w-7 h-7 text-forest-green" strokeWidth={2.2} />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-20 bg-paper-white relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4" id="services-section-title">
            Core Competencies
          </h2>
          <div className="h-1.5 w-24 bg-terracotta mx-auto rounded-full"></div>
        </div>

        {/* Competencies Bento-like Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id="services-grid"
        >
          {COMPETENCIES.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)' }}
              className="group bg-white p-8 rounded-2xl border border-outline-variant hover:border-forest-green/40 transition-colors duration-300 flex flex-col justify-between h-full select-none"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 bg-sage-wash/65 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage-wash transition-colors">
                  {getIcon(card.iconName)}
                </div>

                <h3 className="font-headline text-xl font-bold text-primary mb-4 group-hover:text-forest-green transition-colors">
                  {card.title}
                </h3>

                <ul className="space-y-3">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-text font-sans">
                      <CheckCircle2 className="w-[18px] h-[18px] text-terracotta flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
