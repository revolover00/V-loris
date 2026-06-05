/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUp, CornerRightDown, Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [subscribedVal, setSubscribedVal] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const topics: Record<string, { title: string; subtitle: string; description: string; bullets: string[] }> = {
    'sourcing-certificate': {
      title: "Sourcing & Craft Certificate",
      subtitle: "Verifiable Raw Integrity",
      description: "Every single stitch in a Véloris hoodie is backed by fully certified physical origin logs. We coordinate directly with regional cooperatives in Egypt and Mongolia to bring you unparalleled material standard.",
      bullets: [
        "35% raw Mongolian white organic Cashmere (Grade-A, max 15 microns)",
        "65% Giza-certified extra long-staple Egyptian organic Cotton",
        "Hand-spun to dual-ply thickness to prevent premature pilling",
        "Environmentally safe GOTS-approved botanical dyes only"
      ]
    },
    'showroom': {
      title: "Dubai Mall Flagship Vault",
      subtitle: "Sensory Atelier Fitting Room",
      description: "Located inside the ultra-exclusive Fashion Avenue of Dubai Mall, Ground Floor, immediately adjacent to the primary luxury anchors. The Vault is custom-engineered as a calm museum-like setting.",
      bullets: [
        "Custom soundproofing for optimal private consults",
        "Dedicated security boxes for storage of customized clients' orders",
        "Strictly invite-only or reservation registry bookings",
        "Personalized refreshments served by our dedicated in-house sommelier"
      ]
    },
    'registry-log': {
      title: "Atelier Member Registry",
      subtitle: "Securing Authentic Ownership",
      description: "Every genuine Véloris hoodie contains a distinct microscopic serial identity thread hand-stitched into its interior pocket lining. Registering your ID preserves your premium status permanently.",
      bullets: [
        "Protects your garment against high-fashion duplication or resale fraud",
        "Unlocks priority access to future private capsule drops before public launch",
        "Saves customized sizing preferences for instant future tailor commissions",
        "Provides lifetime gratis dry-conditioning support at our d3 headquarters"
      ]
    },
    'transit': {
      title: "Global Vault Transit",
      subtitle: "White-Glove High-Security Courier Service",
      description: "For clients purchasing highly-coveted garments from abroad or demanding discreet direct drops, we support immediate global priority delivery.",
      bullets: [
        "Full value shipping insurance backed by Lloyd's of London",
        "Dispatched inside climate-controlled custom airtight container frames",
        "Real-time trackable telemetry code with secured SMS authentication",
        "In-person handovers coordinated with trusted regional courier partners"
      ]
    },
    'gifting': {
      title: "Bespoke Gifting Suite",
      subtitle: "Prestige Coordinates for Executive Milestones",
      description: "Exquisite milestones deserve appropriate acknowledgment. The Maison custom-tailors luxury corporate packages designed to impress high-level executives and international partners.",
      bullets: [
        "Garments wrapped in authentic textured cedar-wood cases",
        "Pre-engraved gold or copper nameplates detailing client name",
        "Hand-signed letters of gratitude from our head creative designers",
        "Express direct-to-office d3 presentation packages available"
      ]
    },
    'terms': {
      title: "Atelier Enrollment Terms",
      subtitle: "A Shared Commitment to Luxury Handcraft",
      description: "Enrolling into our member sphere involves specific ethical standards and reciprocal obligations of garment custody.",
      bullets: [
        "Each garment is intended for collection or active personal wear",
        "Reselling on mass commercial index networks compromises our exclusivity",
        "Care guidelines must be properly followed to preserve microcompositions",
        "Membership details are non-transferable without direct registrar consent"
      ]
    },
    'privacy': {
      title: "Absolute Confidentiality Protocol",
      subtitle: "NDA-backed Relationship Management",
      description: "Discretion is our absolute foundation. We maintain complete operational security regarding VIP fittings, customized sizing curves, and financial settlements.",
      bullets: [
        "Fittings conducted in completely blocked, secure private showrooms",
        "We sign legally binding non-disclosure agreements prior to celebrity visits",
        "Sizing databases are offline, completely isolated and encrypted",
        "Client names or purchase logs are never shared with paparazzi, PR, or press"
      ]
    },
    'care-guide': {
      title: "Cashmere Care Protocol",
      subtitle: "Preserving Undefeated Softness Forever",
      description: "Fine yarns are delicate structures of organic proteins. Following our official care guide ensures your hoodies retain perfect shape and softness for generations.",
      bullets: [
        "Wash by hand strictly at water temperatures below 25°C",
        "Only apply pH-neutral delicate wool conditioning liquid",
        "Lay entirely flat on a clean dry towel — do not hang dry",
        "Avoid regular iron heats; use lightweight vertical steam only"
      ]
    },
    'coordinates': {
      title: "d3 Workshop Coordinates",
      subtitle: "Finding Véloris in the Design District",
      description: "Our physical workshop is open only for direct inquiries and tailored fitting room reservations. Locate us in the heart of Middle East design.",
      bullets: [
        "Dubai Design District (d3), Building 5, Level 7, Suite 702",
        "We are open Sunday through Friday, 9:00 AM to 6:00 PM GST",
        "Secured lobby code required for elevators after 7:00 PM",
        "Private helipad access bookings available with d3 authority"
      ]
    }
  };

  React.useEffect(() => {
    const handleOpenTopic = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveTopic(customEvent.detail);
    };
    window.addEventListener('open-footer-topic', handleOpenTopic);
    return () => window.removeEventListener('open-footer-topic', handleOpenTopic);
  }, []);

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
                src="/images/veloris_logo.png"
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
            <ul className="space-y-2 text-xs text-sand-400 flex flex-col items-start">
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('select-product', { detail: 'obsidian-cashmere' }))}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  The Obsidian Cashmere
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('select-product', { detail: 'alabaster-knit' }))}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  The Alabaster Knit
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('select-product', { detail: 'd3-melange' }))}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  The d3 Melange
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('achievements');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  Limited Edition mbappé Capsule
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] uppercase font-bold tracking-widest text-sand-50">Maison Heritage</h5>
            <ul className="space-y-2 text-xs text-sand-400 flex flex-col items-start">
              <li><a href="#about" className="hover:text-rosegold-400 transition-colors font-sans">Our Founders & Vision</a></li>
              <li><a href="#about" className="hover:text-rosegold-400 transition-colors">Dubai d3 Atelier</a></li>
              <li><a href="#achievements" className="hover:text-rosegold-400 transition-colors">Historical Timeline</a></li>
              <li>
                <button
                  onClick={() => setActiveTopic('sourcing-certificate')}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  Sourcing Certificate
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] uppercase font-bold tracking-widest text-sand-50">Private Vault Rooms</h5>
            <ul className="space-y-2 text-xs text-sand-400 flex flex-col items-start">
              <li>
                <button
                  onClick={() => setActiveTopic('showroom')}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  Dubai Mall Showroom
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTopic('registry-log')}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  Member Registry Log
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTopic('transit')}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  Worldwide Private Transit
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTopic('gifting')}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  Corporate Gifting Suite
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] uppercase font-bold tracking-widest text-sand-50">Official Governance</h5>
            <ul className="space-y-2 text-xs text-sand-400 flex flex-col items-start">
              <li>
                <button
                  onClick={() => setActiveTopic('terms')}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  Terms of Atelier Enrollment
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTopic('privacy')}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  Privacy and NDA Protocols
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTopic('care-guide')}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  Care Guide & Hand-washing Guidelines
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTopic('coordinates')}
                  className="hover:text-rosegold-400 transition-colors text-left bg-transparent border-none cursor-pointer p-0 font-sans"
                >
                  Filing d3 coordinates
                </button>
              </li>
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

      <AnimatePresence>
        {activeTopic && topics[activeTopic] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveTopic(null)}
              className="absolute inset-0 bg-sand-950/75 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-lg bg-sand-50 border border-sand-200 p-6 md:p-8 shadow-2xl text-sand-950 z-10"
            >
              <button
                onClick={() => setActiveTopic(null)}
                className="absolute top-4 right-4 p-2 text-sand-400 hover:text-sand-950 hover:bg-sand-100 transition-colors rounded-full"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-rosegold-500 block mb-1.5">
                    {topics[activeTopic].subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-sand-950 tracking-wide">
                    {topics[activeTopic].title}
                  </h3>
                </div>

                <p className="text-xs text-sand-800 leading-relaxed text-left">
                  {topics[activeTopic].description}
                </p>

                <div className="bg-sand-100 p-4 border-l-2 border-rosegold-400 text-left">
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-sand-950 mb-2">
                    Key Specifications
                  </span>
                  <ul className="text-xs space-y-2 text-sand-800">
                    {topics[activeTopic].bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-rosegold-450 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 justify-end pt-2">
                  <button
                    onClick={() => setActiveTopic(null)}
                    className="px-5 py-2.5 bg-transparent border border-sand-950 text-sand-950 hover:bg-sand-950 hover:text-sand-50 transition-all font-semibold uppercase tracking-widest text-[9px]"
                  >
                    Close Log
                  </button>
                  <a
                    href="#contact"
                    onClick={() => {
                      setActiveTopic(null);
                      window.dispatchEvent(new CustomEvent('consult-stylist', { detail: topics[activeTopic].title }));
                    }}
                    className="px-5 py-2.5 bg-sand-950 text-sand-50 hover:bg-rosegold-600 transition-all font-semibold uppercase tracking-widest text-[9px] text-center"
                  >
                    Enquire Further
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
