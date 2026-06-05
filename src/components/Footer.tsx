/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUp, CornerRightDown, Mail } from 'lucide-react';

export default function Footer() {
  const [subscribedVal, setSubscribedVal] = useState('');
  const [isDone, setIsDone] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedVal) {
      setIsDone(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sand-950 text-sand-200 pt-20 pb-12 border-t border-sand-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Segment: Newsletter and Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-sand-800 items-baseline">
          {/* Logo segment */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5 select-none">
              <img
                src="/src/assets/images/veloris_logo.png"
                alt="Véloris Logo"
                className="w-11 h-11 rounded-full object-cover border border-rosegold-500/30"
                referrerPolicy="no-referrer"
              />
              <div className="tracking-[0.25em] text-sand-50 font-serif leading-none flex flex-col">
                <span className="text-2xl font-light uppercase">Véloris</span>
                <span className="text-[0.6rem] tracking-[0.4em] text-rosegold-400 uppercase mt-1 md:mt-1.5 font-sans">
                  Luxury You Live In
                </span>
              </div>
            </div>
            <p className="text-xs text-sand-400 max-w-sm leading-relaxed">
              Redefining the hoodie as a structural luxury essential. Spun from certified Italian cashmere and Egyptian organic staple fiber. Created for modern minimalists.
            </p>
          </div>

          {/* Newsletter subscription panel */}
          <div className="lg:col-span-7 space-y-4" id="footer-newsletter">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-rosegold-400 flex items-center gap-1.5">
              <CornerRightDown className="w-3.5 h-3.5" />
              Subscribe to Autumn Catalogue & Drops
            </h4>
            {isDone ? (
              <div className="text-xs text-green-400 font-medium">
                Thank you. Your address ({subscribedVal}) is registered for priority drop releases.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  required-pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="Enter email for private drops..."
                  value={subscribedVal}
                  onChange={(e) => setSubscribedVal(e.target.value)}
                  className="w-full bg-sand-900 border border-sand-800 px-4 py-3 text-xs text-sand-100 placeholder:text-sand-500 focus:outline-none focus:border-rosegold-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-rosegold-500 hover:bg-rosegold-600 active:bg-rosegold-750 text-sand-950 font-semibold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  Join
                </button>
              </form>
            )}
            <p className="text-[10px] text-sand-500">
              By subscribing, you agree to our privacy protocols. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Middle Segment: Columns of Navigation and Legal information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          <div className="space-y-4">
            <h5 className="text-[10px] uppercase font-bold tracking-widest text-sand-50">Shop Categories</h5>
            <ul className="space-y-2 text-xs text-sand-400">
              <li><a href="#shop" className="hover:text-rosegold-400 transition-colors">The Obsidian Cashmere</a></li>
              <li><a href="#shop" className="hover:text-rosegold-400 transition-colors">The Alabaster Knit</a></li>
              <li><a href="#shop" className="hover:text-rosegold-400 transition-colors">The d3 Melange</a></li>
              <li><a href="#shop" className="hover:text-rosegold-400 transition-colors">Limited Edition mbappé Capsule</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] uppercase font-bold tracking-widest text-sand-50">Maison Heritage</h5>
            <ul className="space-y-2 text-xs text-sand-400">
              <li><a href="#about" className="hover:text-rosegold-400 transition-colors font-sans">Our Founders & Vision</a></li>
              <li><a href="#about" className="hover:text-rosegold-400 transition-colors">Dubai d3 Atelier</a></li>
              <li><a href="#achievements" className="hover:text-rosegold-400 transition-colors">Historical Timeline</a></li>
              <li><a href="#" className="hover:text-rosegold-400 transition-colors">Sourcing Certificate</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] uppercase font-bold tracking-widest text-sand-50">Private Vault Rooms</h5>
            <ul className="space-y-2 text-xs text-sand-400">
              <li><a href="#" className="hover:text-rosegold-400 transition-colors">Dubai Mall Showroom</a></li>
              <li><a href="#" className="hover:text-rosegold-400 transition-colors">Member Registry Log</a></li>
              <li><a href="#" className="hover:text-rosegold-400 transition-colors">Worldwide Private Transit</a></li>
              <li><a href="#" className="hover:text-rosegold-400 transition-colors">Corporate Gifting Suite</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] uppercase font-bold tracking-widest text-sand-50">Official Governance</h5>
            <ul className="space-y-2 text-xs text-sand-400">
              <li><a href="#" className="hover:text-rosegold-400 transition-colors">Terms of Atelier Enrollment</a></li>
              <li><a href="#" className="hover:text-rosegold-400 transition-colors">Privacy and NDA Protocols</a></li>
              <li><a href="#" className="hover:text-rosegold-400 transition-colors">Care Guide & Hand-washing Guidelines</a></li>
              <li><a href="#" className="hover:text-rosegold-400 transition-colors">Filing d3 coordinates</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-sand-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-sand-500">
          <div>
            &copy; {new Date().getFullYear()} Véloris Brand Maison. All Rights Reserved. Coordinated in Dubai Design District.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group text-[10px] uppercase tracking-widest font-bold text-rosegold-400 hover:text-rosegold-300 transition-all"
            aria-label="Scroll to top of website"
          >
            Ascend to Top
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
