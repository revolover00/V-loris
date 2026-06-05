/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Shirt, Compass, Milestone, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import AboutSection from './components/AboutSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { PRODUCTS } from './data/brandData';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div id="veloris-app" className="bg-sand-50 min-h-screen text-sand-950 flex flex-col font-sans selection:bg-rosegold-200 selection:text-sand-950 overflow-x-hidden antialiased">
      {/* Exquisite Sticky Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* Section 1: Hero Campaign Landmark Container */}
        <section
          id="home"
          className="relative min-h-[96vh] flex items-center pt-24 pb-16 overflow-hidden md:min-h-screen bg-sand-100"
        >
          {/* Elegant geometric subtle gridlines for architectural modern vibe */}
          <div className="absolute inset-x-0 top-0 h-[100%] w-full flex justify-between px-12 md:px-24 pointer-events-none opacity-40 select-none pb-12 z-0">
            <div className="w-[1px] h-full bg-sand-200" />
            <div className="w-[1px] h-full bg-sand-200 hidden md:block" />
            <div className="w-[1px] h-full bg-sand-200 hidden lg:block" />
            <div className="w-[1px] h-full bg-sand-200" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center w-full z-10 relative">
            
            {/* Left side text column */}
            <div className="lg:col-span-6 space-y-8 md:space-y-10 text-left">
              {/* Luxury context badge */}
              <div className="inline-flex items-center gap-2 bg-sand-950 text-sand-50 px-4 py-2 text-[9px] uppercase tracking-[0.25em] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-rosegold-300 animate-pulse" />
                <span>Egyptian Cotton • Italian Cashmere</span>
              </div>

              {/* Title & Tagline Pairings */}
              <div className="space-y-4">
                <span className="text-[11px] font-bold uppercase text-rosegold-500 tracking-[0.4em] block">
                  Est. 2018 | Dubai
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-light text-sand-950 leading-[1.1] tracking-wide">
                  Luxury You <br />
                  <span className="italic font-normal">Live In</span>
                </h1>
                <p className="text-sm md:text-base text-sand-400 font-sans tracking-wide leading-relaxed max-w-lg pt-2">
                  Each cashmere blend hoodie in our curated collections is hand-washed in volcanic-purified waters and lightly singed by hand, creating a soft, draped vintage finish that elevates daily wear to high couture.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#shop"
                  className="px-8 py-4 bg-sand-950 hover:bg-rosegold-600 active:bg-rosegold-750 text-sand-50 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  Shop Bestsellers
                  <ArrowDown className="w-3.5 h-3.5 text-rosegold-300" />
                </a>
                
                <a
                  href="#about"
                  className="px-8 py-4 border border-sand-300 hover:border-rosegold-400 text-sand-950 hover:text-rosegold-600 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 text-center"
                >
                  Explore The Maison
                </a>
              </div>

              {/* Minor stats footnotes */}
              <div className="flex items-center gap-8 pt-6 border-t border-sand-200 max-w-sm">
                <div>
                  <span className="block font-serif text-lg font-normal text-sand-950">Fine micron</span>
                  <span className="text-[9px] uppercase tracking-wider text-sand-400 font-bold">Cashmere Quality</span>
                </div>
                <div className="w-[1px] h-8 bg-sand-200" />
                <div>
                  <span className="block font-serif text-lg font-normal text-sand-950">Hand-finished</span>
                  <span className="text-[9px] uppercase tracking-wider text-sand-400 font-bold">Dubai Design District</span>
                </div>
              </div>
            </div>

            {/* Right side luxurious visual campaign column */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              {/* Outer floating border box frame */}
              <div className="absolute inset-0 border border-rosegold-400/30 transform translate-x-4 translate-y-4 -z-1 hidden sm:block" />
              
              {/* Ambient rose gold background spot highlight */}
              <div className="absolute w-72 h-72 rounded-full bg-rosegold-100/40 blur-3xl -z-2" />

              <div id="hero-campaign-card" className="w-full aspect-[4/5] bg-sand-200 relative overflow-hidden group border border-sand-200">
                <img
                  src="/images/veloris_hero_campaign_1780663603419.png"
                  alt="Véloris Editorial High-Fashion Campaign Hoodie representation"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vintage overlay texture tag */}
                <div className="absolute right-4 bottom-4 bg-sand-950/85 backdrop-blur-sm px-4 py-2.5 text-[9px] uppercase tracking-[0.2em] text-sand-50 font-medium border border-sand-800">
                  Capsule Photo • Dubai Mall Vault
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Best Sellers Grid Container */}
        <section id="shop" className="py-24 bg-sand-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header copy */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-3 max-w-xl">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-rosegold-500 block">
                  Couture Collection
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-sand-950 tracking-wide">
                  The Premium Bestsellers
                </h2>
                <p className="text-xs text-sand-400 tracking-wide uppercase font-medium">
                  Strictly limited drops. Available exclusively on registry reservation or d3 studio pickup.
                </p>
              </div>

              {/* Informative vintage notice */}
              <div className="p-4 bg-sand-100 border border-sand-200 text-xs text-sand-800 leading-relaxed max-w-sm shrink-0">
                <p className="font-semibold text-[10px] uppercase text-sand-950 tracking-wider mb-1">
                  Meticulous Finishing:
                </p>
                Each item undergoes a 48-hour conditioning loop, washed with volcanic-filtered mineral salts to stabilize the luxury cashmere weft forever before packaging.
              </div>
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="products-catalog-grid">
              {PRODUCTS.map((prod, idx) => (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  <ProductCard
                    product={prod}
                    onSelect={(p) => setSelectedProduct(p)}
                  />
                </motion.div>
              ))}
            </div>

            {/* Exclusive Trust banner */}
            <div className="mt-16 bg-sand-100 border border-sand-200/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-sand-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sand-50 border border-sand-200 text-rosegold-500 rounded-full flex items-center justify-center shrink-0">
                  <Shirt className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-sand-950 uppercase tracking-wider text-[10px]">Registry Certificate</span>
                  Each garment carries a unique serial thread hand-stitched inside the inner pocket lining verifying authentic craft.
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-rosegold-500 hover:text-rosegold-750 font-bold"
              >
                Learn registry rules <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </section>

        {/* Section 3: About 'The Maison' Component */}
        <AboutSection />

        {/* Section 4: Achievements & Ledger Timeline Components */}
        <AchievementsSection />

        {/* Section 5: Direct contact and interactive Consultation sheet */}
        <ContactSection />

      </main>

      {/* Footer segment */}
      <Footer />

      {/* Product Detail Private Inquiry Modal Sheet */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
}

