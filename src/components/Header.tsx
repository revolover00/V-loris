/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Shop Bestsellers', href: '#shop' },
    { name: 'The Maison', href: '#about' },
    { name: 'Our Achievements', href: '#achievements' },
    { name: 'Private Inquiry', href: '#contact' },
  ];

  return (
    <>
      <header
        id="veloris-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-sand-50/95 backdrop-blur-md shadow-[0_1px_15px_rgba(41,40,37,0.05)] border-b border-sand-200/50 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="#home"
            id="header-logo"
            className="flex items-center gap-3 group text-sand-950 leading-none"
          >
            <img
              src="/src/assets/images/veloris_logo.png"
              alt="Véloris Logo"
              className="w-9 h-9 object-contain transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col tracking-[0.22em] font-serif">
              <span className="text-lg md:text-xl font-light uppercase transition-colors duration-300 group-hover:text-rosegold-500">
                Véloris
              </span>
              <span className="text-[0.52rem] tracking-[0.35em] text-sand-400 uppercase mt-1 transition-colors duration-300 group-hover:text-rosegold-400 font-sans">
                Dubai • Vault
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-widest text-sand-800 font-medium hover:text-rosegold-500 transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-rosegold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Call To Action button on Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-sand-950 hover:bg-rosegold-700 text-sand-50 text-[10px] uppercase tracking-[0.2em] font-medium border border-sand-950 hover:border-rosegold-700 transition-all duration-300 flex items-center gap-2 rounded-none"
            >
              Consult Stylist
              <ArrowUpRight className="w-3 zoom-in h-3 text-rosegold-300" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="lg:hidden p-2 text-sand-950 hover:text-rosegold-500 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-sand-950/40 backdrop-blur-md z-50 lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 w-full max-w-[320px] h-full bg-sand-50 border-l border-sand-200 p-8 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-2.5 tracking-[0.2em] text-sand-950 font-serif">
                    <img
                      src="/src/assets/images/veloris_logo.png"
                      alt="Véloris Logo"
                      className="w-7 h-7 object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-lg uppercase font-light">Véloris</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 text-sand-950 hover:text-rosegold-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navItems.map((item, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm uppercase tracking-widest text-sand-950 font-medium hover:text-rosegold-500 transition-colors flex justify-between items-center border-b border-sand-200/50 pb-2"
                    >
                      {item.name}
                      <span className="w-1.5 h-1.5 rounded-full bg-rosegold-400 opacity-0 group-hover:opacity-100" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3.5 bg-sand-950 text-sand-50 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors hover:bg-rosegold-600 flex justify-center items-center gap-2"
                >
                  Book Private Fitting
                  <ArrowUpRight className="w-3 h-3 text-rosegold-300" />
                </a>
                <p className="text-[10px] text-center text-sand-400 tracking-wider">
                  d3, Building 5 • Dubai Mall Vault
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
