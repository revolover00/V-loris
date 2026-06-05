/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote, Sparkles, Building2, UserCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedCounter from './AnimatedCounter';

export default function AboutSection() {
  const values = [
    {
      title: 'Ultimate Quality',
      desc: 'Each cashmere-organic fiber loop is individually monitored across multi-grade spinning machines before hands-on styling.',
      icon: Sparkles,
      topicId: 'sourcing-certificate'
    },
    {
      title: 'Ethical Simplicity',
      desc: 'Sourcing strictly organic Egyptian farms and circular Mongolian cashmere raw supplies to preserve natural soils.',
      icon: HeartHandshake,
      topicId: 'care-guide'
    },
    {
      title: 'Atelier Confidentiality',
      desc: 'Tailoring customized measurements and direct vault reserve experiences for collectors demanding strict privacy.',
      icon: UserCheck,
      topicId: 'privacy'
    }
  ];

  return (
    <section id="about" className="py-24 bg-sand-100 border-t border-b border-sand-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center mb-24">
          
          {/* Text/Narrative column with fade-in */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src="/images/veloris_logo.png"
                  alt="Véloris Seal"
                  className="w-10 h-10 rounded-full object-cover border border-rosegold-400/50 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-rosegold-500 block">
                  The Heritage of Véloris
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-sand-950 tracking-wide leading-tight">
                Luxury You Live In, <br />
                <span className="italic font-normal">Crafted for Global Citizens</span>
              </h2>
            </div>
            
            <p className="text-sm md:text-base text-sand-800 leading-relaxed max-w-2xl">
              Founded in 2018 in the architecturally advanced Dubai Design District (d3), Véloris was envisioned by co-founders Seif Al Ameri and Caroline Haddad as an answering cry to fast fashion. They set out with a simple yet formidable objective: to elevate the humble hoodie from sportswear to a premium luxury essential, worthy of the coordinates of fine culture.
            </p>

            {/* Quote Block with staggered entry */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative border-l-2 border-rosegold-400 pl-6 md:pl-8 py-2"
            >
              <Quote className="absolute top-0 left-2 w-10 h-10 text-rosegold-200/55 -z-1" />
              <p className="text-sm md:text-md italic text-sand-800 leading-relaxed font-serif">
                "We wanted to build the absolute perfect garment; a singular tactile armor that makes you feel both intensely confident and comfortable. There is elegance in comfort. True luxury doesn't announce itself—it is felt down to the fiber."
              </p>
              <cite className="block text-[10px] uppercase font-bold tracking-widest text-sand-950 mt-3 not-italic">
                — Seif Al Ameri & Caroline Haddad, Founders
              </cite>
            </motion.div>
          </motion.div>

          {/* Vision/Mission Block Column with slide-up */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-sand-50 p-8 md:p-11 border border-sand-200/60 shadow-[0_10px_40px_rgba(41,40,37,0.02)] space-y-10 relative"
          >
            {/* Absolute accent ornament */}
            <div className="absolute top-0 right-10 w-20 h-[3px] bg-rosegold-400" />
            
            <div className="space-y-3">
              <span className="text-[9px] uppercase font-semibold text-rosegold-500 tracking-[0.2em] block">Our Noble Vision</span>
              <h3 className="font-serif text-lg md:text-xl font-normal text-sand-950 tracking-wide">
                To become the global brand that redefines the hoodie as a core luxury essential, not just sportswear.
              </h3>
            </div>

            <div className="space-y-3 border-t border-sand-200/60 pt-8">
              <span className="text-[9px] uppercase font-semibold text-rosegold-500 tracking-[0.2em] block">Our Core Mission</span>
              <p className="text-xs md:text-sm text-sand-800 leading-relaxed">
                Empower the modern generation—from high-energy tech entrepreneurs and global athletes to minimalism devotees—to express raw confidence and understated elegance through one perfect, supremely comfortable fabric structure.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Fact Sheet banner with animated numbers */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-sand-200/60 mb-24 text-center"
        >
          <div>
            <span className="block font-serif text-3xl md:text-4xl text-sand-950 font-light mb-1">
              <AnimatedCounter value={2018} duration={1.5} />
            </span>
            <span className="text-[10px] uppercase tracking-widest text-sand-400 font-bold">Maison Founded</span>
          </div>
          <div>
            <span className="block font-serif text-3xl md:text-4xl text-sand-950 font-light mb-1 flex justify-center items-baseline gap-1">
              Dubai <span className="text-xs font-sans text-rosegold-500">d3</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-sand-400 font-bold">Headquarters</span>
          </div>
          <div>
            <span className="block font-serif text-3xl md:text-4xl text-sand-950 font-light mb-1">
              <AnimatedCounter value={45} duration={1.8} />
            </span>
            <span className="text-[10px] uppercase tracking-widest text-sand-400 font-bold font-serif">Master Tailors</span>
          </div>
          <div>
            <span className="block font-serif text-3xl md:text-4xl text-sand-950 font-light mb-1">
              <AnimatedCounter value={100} duration={1.2} suffix="%" />
            </span>
            <span className="text-[10px] uppercase tracking-widest text-sand-400 font-bold">Egyptian Cashmere</span>
          </div>
        </motion.div>

        {/* Values Block with staggered elements */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 space-y-2"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-rosegold-500">How We Stand Apart</span>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-sand-950 tracking-wide">
              The Three pillars of Véloris Craft
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  onClick={() => {
                    const tid = (v as any).topicId;
                    if (tid) window.dispatchEvent(new CustomEvent('open-footer-topic', { detail: tid }));
                  }}
                  className="p-8 bg-sand-50 border border-sand-200/50 hover:border-rosegold-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group select-none"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-rosegold-100 flex items-center justify-center text-rosegold-500 mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-base text-sand-950 font-semibold tracking-wide group-hover:text-rosegold-500 transition-colors">
                      {v.title}
                    </h4>
                    <p className="text-xs text-sand-400 leading-relaxed font-sans">
                      {v.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-sand-200/50 flex justify-between items-center text-[9px] uppercase font-bold tracking-widest text-rosegold-500 group-hover:text-rosegold-600">
                    <span>View Specifications</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

