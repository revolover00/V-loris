/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [fittingLocation, setFittingLocation] = useState('dubai-mall-vault');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSize) {
      alert("Please select your custom size before sending inquiry.");
      return;
    }
    // Simulate luxury formulation
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto" id="product-modal-container">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-sand-950/60 backdrop-blur-sm transition-opacity"
        />

        <div className="flex min-h-screen items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-5xl bg-sand-50 overflow-hidden shadow-2xl border border-sand-200 grid grid-cols-1 md:grid-cols-12"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2.5 bg-sand-50/80 hover:bg-rosegold-100 text-sand-950 rounded-full transition-colors border border-sand-200/50"
              aria-label="Close detail modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Exquisite Product Photo (45% space) */}
            <div className="col-span-1 md:col-span-5 bg-sand-100 flex flex-col justify-center relative min-h-[300px] md:min-h-[500px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover select-none object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-sand-950/85 backdrop-blur-md px-3.5 py-2 text-[10px] uppercase text-sand-100 tracking-[0.2em] font-medium">
                Hand-washed & lightly singed
              </div>
            </div>

            {/* Right Column: Narrative details + Couture Reservation (55% space) */}
            <div className="col-span-1 md:col-span-7 p-6 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[90vh] md:max-h-[85vh]">
              {!isSubmitted ? (
                <div>
                  {/* Category Tracker */}
                  <div className="flex items-center gap-2 mb-2 text-[10px] font-semibold text-rosegold-500 uppercase tracking-[0.25em]">
                    <span>Bespoke Capsule</span>
                    <span className="w-1 h-1 rounded-full bg-rosegold-300" />
                    <span>Egyptian & Cashmere Blend</span>
                  </div>

                  {/* Title & Pricing */}
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-sand-950 tracking-wide mb-3">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-3 pb-5 border-b border-sand-200/50 mb-5">
                    <span className="text-xl font-medium text-sand-950 font-serif">
                      {product.priceAED} AED
                    </span>
                    <span className="text-sm text-sand-400">
                      / Approx. ${product.priceUSD} USD
                    </span>
                  </div>

                  {/* Narrative Intro */}
                  <div className="space-y-4 text-xs leading-relaxed text-sand-800 mb-6">
                    <p>{product.description}</p>
                    
                    {/* Material breakdown */}
                    <div className="bg-sand-100 p-3.5 border-l-2 border-rosegold-400">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-sand-950 mb-1">Weave Composition:</span>
                      <ul className="list-disc pl-4 space-y-0.5 text-sand-800">
                        {product.materials.map((m, i) => <li key={i}>{m}</li>)}
                      </ul>
                    </div>
                  </div>

                  {/* Premium features checklist */}
                  <div className="mb-6">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-sand-950 mb-3">Craftsmanship Highlights</h4>
                    <ul className="space-y-2 text-xs text-sand-800">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 mt-0.5 text-rosegold-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Size selector */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-sand-950">
                        Select Private Capsule Size
                      </span>
                      <span className="text-[10px] font-medium text-rosegold-600 hover:underline cursor-pointer flex items-center gap-1">
                        Size Advisory <HelpCircle className="w-3 h-3" />
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-12 h-10 border text-[11px] font-medium tracking-wider flex items-center justify-center transition-all duration-300 ${
                            selectedSize === size
                              ? 'bg-sand-950 text-sand-50 border-sand-950'
                              : 'border-sand-200 text-sand-900 bg-transparent hover:border-rosegold-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    {selectedSize && (
                      <span className="inline-block mt-2 text-[10px] text-rosegold-600 font-medium tracking-wide">
                        Selected Size: {selectedSize} (Hand-measured Atelier Spec)
                      </span>
                    )}
                  </div>

                  {/* Dynamic Reservation Formulation */}
                  <div className="border-t border-sand-200/50 pt-6">
                    <div className="flex items-center gap-2.5 mb-4 select-none">
                      <img
                        src="/images/veloris_logo.png"
                        alt="Véloris Logo"
                        className="w-6 h-6 rounded-full object-cover border border-rosegold-400"
                        referrerPolicy="no-referrer"
                      />
                      <h4 className="text-xs uppercase font-bold tracking-widest text-sand-950">
                        Initiate Private Vault Enquiry
                      </h4>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] uppercase font-bold tracking-widest text-sand-400 mb-1">
                            Client Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Seif Al Ameri"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="w-full px-3 py-2 bg-transparent border border-sand-200 placeholder:text-sand-300 text-xs focus:outline-none focus:border-rosegold-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] uppercase font-bold tracking-widest text-sand-400 mb-1">
                            Direct Contact Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +971 50 XXXXXXX"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            className="w-full px-3 py-2 bg-transparent border border-sand-200 placeholder:text-sand-300 text-xs focus:outline-none focus:border-rosegold-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9px] uppercase font-bold tracking-widest text-sand-400 mb-1">
                          Secure Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="client@domain.com"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          className="w-full px-3 py-2 bg-transparent border border-sand-200 placeholder:text-sand-300 text-xs focus:outline-none focus:border-rosegold-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[9px] uppercase font-bold tracking-widest text-sand-400 mb-1.5">
                          Atelier Handover Preference
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <label className={`border p-2.5 flex items-center justify-between cursor-pointer transition-colors ${
                            fittingLocation === 'dubai-mall-vault'
                              ? 'border-rosegold-500 bg-rosegold-50/40 text-sand-950'
                              : 'border-sand-200 hover:border-rosegold-300'
                          }`}>
                            <span className="text-[10px] font-medium">Dubai Mall Vault (Showroom)</span>
                            <input
                              type="radio"
                              name="location"
                              checked={fittingLocation === 'dubai-mall-vault'}
                              onChange={() => setFittingLocation('dubai-mall-vault')}
                              className="accent-rosegold-500 h-3.5 w-3.5"
                            />
                          </label>
                          <label className={`border p-2.5 flex items-center justify-between cursor-pointer transition-colors ${
                            fittingLocation === 'd3-atelier'
                              ? 'border-rosegold-500 bg-rosegold-50/40 text-sand-950'
                              : 'border-sand-200 hover:border-rosegold-300'
                          }`}>
                            <span className="text-[10px] font-medium">d3 Creative Atelier, Building 5</span>
                            <input
                              type="radio"
                              name="location"
                              checked={fittingLocation === 'd3-atelier'}
                              onChange={() => setFittingLocation('d3-atelier')}
                              className="accent-rosegold-500 h-3.5 w-3.5"
                            />
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-4 py-3 bg-sand-950 hover:bg-rosegold-600 active:bg-rosegold-700 text-sand-50 text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 flex justify-center items-center gap-2"
                      >
                        Send Concierge Request
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="relative mb-6 select-none flex items-center justify-center">
                    <img
                      src="/images/veloris_logo.png"
                      alt="Véloris Logo"
                      className="w-16 h-16 rounded-full object-cover border-2 border-rosegold-400 shadow-md p-0.5 bg-sand-50"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute translate-x-5 translate-y-5 bg-rosegold-600 text-sand-50 rounded-full p-1.5 border-2 border-sand-50 shadow-md flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl text-sand-950 mb-3 font-semibold tracking-wide">
                    Atelier Access Verified
                  </h3>
                  <p className="text-xs text-sand-800 max-w-sm mb-6 leading-relaxed">
                    Thank you, <strong>{clientName}</strong>. A private fashion concierge from the Véloris Vault has reserved your <strong>Size {selectedSize}</strong> capsule of <strong>{product.name}</strong>.
                  </p>
                  
                  <div className="bg-sand-100 p-5 inline-block text-left border border-sand-200 w-full max-w-md space-y-2 mb-8">
                    <div className="text-[9px] uppercase tracking-widest text-sand-400 font-bold">Inquiry Reference Receipt</div>
                    <div className="flex justify-between text-xs text-sand-800">
                      <span>Assigned Atelier:</span>
                      <strong className="text-sand-950">{fittingLocation === 'dubai-mall-vault' ? 'Dubai Mall Vault Room' : 'd3 Office 702 Vault'}</strong>
                    </div>
                    <div className="flex justify-between text-xs text-sand-800">
                      <span>Client email:</span>
                      <strong className="text-sand-950">{clientEmail}</strong>
                    </div>
                    <div className="flex justify-between text-xs text-sand-800">
                      <span>Reserved Piece:</span>
                      <span className="text-rosegold-600 font-semibold">{product.name} (Size {selectedSize})</span>
                    </div>
                    <div className="flex justify-between text-xs text-sand-800 border-t border-sand-200/50 pt-2 shrink-0">
                      <span>Private Consultation:</span>
                      <span className="text-green-700 font-semibold uppercase tracking-wider text-[10px]">Active Priority</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-sand-400 tracking-wide max-w-xs leading-relaxed mb-6">
                    We will call you on <strong>{clientPhone}</strong> within 15 minutes during central business hours to coordinate private fitting logistics.
                  </p>

                  <button
                    onClick={onClose}
                    className="px-8 py-3 outline border border-sand-950 text-sand-950 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-sand-950 hover:text-sand-50 transition-colors"
                  >
                    Return to Catalogue
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
