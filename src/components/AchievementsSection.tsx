/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Award, Star, History, Milestone } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/brandData';
import { motion } from 'motion/react';

export default function AchievementsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="achievements" className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-rosegold-500 block">
            A Ledger of Distinction
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-sand-950 tracking-wide">
            Our Key Achievements
          </h2>
          <div className="w-12 h-[2px] bg-rosegold-400 mx-auto mt-4" />
          <p className="text-xs text-sand-400 max-w-md mx-auto leading-relaxed uppercase tracking-wider">
            Consistently challenging the boundary between performance fiber and luxury.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-sand-200 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-[1px] md:before:bg-sand-200/80 space-y-12 md:space-y-24">
          
          {ACHIEVEMENTS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, x: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Visual Connector Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-1.5 w-2.5 h-2.5 rounded-full bg-sand-50 border-2 border-rosegold-500 z-10 transition-transform duration-300 scale-100 group-hover:scale-125" />

                {/* Content Box */}
                <div className="w-full md:w-1/2 pl-6 md:pl-0 md:px-12">
                  <div
                    className={`p-6 md:p-8 bg-sand-100 border border-sand-200/80 transition-all duration-500 rounded-none relative group ${
                      hoveredIdx === idx
                        ? 'border-rosegold-400 shadow-[0_10px_35px_rgba(189,122,102,0.05)] translate-y-[-2px]'
                        : 'hover:border-sand-300'
                    }`}
                  >
                    {/* Floating Accent Accent Year behind card */}
                    <div className="absolute -top-6 right-6 font-serif text-5xl md:text-6xl text-sand-200/50 font-normal select-none pointer-events-none group-hover:text-rosegold-100/60 transition-colors">
                      {item.year}
                    </div>

                    <div className="space-y-4">
                      {/* Year badge */}
                      <div className="inline-flex items-center gap-2 bg-sand-950 text-sand-50 px-3.5 py-1.5 text-[9px] uppercase tracking-[0.2em] font-semibold">
                        <Calendar className="w-3 h-3 text-rosegold-300" />
                        <span>Maison {item.year}</span>
                      </div>

                      {/* Achievement Title */}
                      <h3 className="font-serif text-lg md:text-xl font-medium text-sand-950 tracking-wide">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-sand-400 leading-relaxed max-w-md font-sans">
                        {item.description}
                      </p>

                      {/* Key highlights / metric */}
                      {item.metric && (
                        <div className="border-t border-sand-200/60 pt-4 mt-2 flex items-center gap-2">
                          <Milestone className="w-3.5 h-3.5 text-rosegold-500" />
                          <span className="text-[10px] uppercase font-bold tracking-widest text-rosegold-600">
                            Milestone Highlight: {item.metric}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Empty block on the opposite side to balance timeline */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}

        </div>

        {/* Historical Summary Box */}
        <div className="mt-20 p-8 md:p-12 bg-sand-100 border border-sand-200 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
          {/* Subtle rose gold ambient glow */}
          <div className="absolute right-0 bottom-0 w-32 h-32 rounded-full bg-rosegold-100/30 blur-2xl" />
          
          <div className="space-y-2 max-w-lg">
            <h4 className="font-serif text-xl font-normal text-sand-950">
              Curious about our upcoming limited collections?
            </h4>
            <p className="text-xs text-sand-400 leading-relaxed">
              We announce private capsule drops only to select verified clients on our register. Ensure you are enrolled to receive the autumn catalogue.
            </p>
          </div>

          <a
            href="#contact"
            className="px-8 py-3.5 bg-sand-950 hover:bg-rosegold-600 active:bg-rosegold-700 text-sand-50 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 border border-sand-950 hover:border-rosegold-600 whitespace-nowrap"
          >
            Join Registry Club
          </a>
        </div>

      </div>
    </section>
  );
}
