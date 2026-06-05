/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Share2, CornerDownRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const handleCopyHandle = (handle: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(handle);
      setCopiedHandle(handle);
      setTimeout(() => {
        setCopiedHandle(null);
      }, 2000);
    }
  };

  React.useEffect(() => {
    const handleConsultStylist = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const topicName = customEvent.detail;
      
      let assignedSubject = 'General Inquiry';
      if (
        topicName.toLowerCase().includes('bespoke') || 
        topicName.toLowerCase().includes('sourcing') || 
        topicName.toLowerCase().includes('care') ||
        topicName.toLowerCase().includes('certificate')
      ) {
        assignedSubject = 'Custom Bespoke Order';
      } else if (
        topicName.toLowerCase().includes('showroom') || 
        topicName.toLowerCase().includes('vault') ||
        topicName.toLowerCase().includes('registry')
      ) {
        assignedSubject = 'Celebrity / Athlete Fittings';
      } else if (
        topicName.toLowerCase().includes('gifting') || 
        topicName.toLowerCase().includes('partnership')
      ) {
        assignedSubject = 'Strategic Partnership';
      }

      setFormData((prev) => ({
        ...prev,
        subject: assignedSubject,
        message: `Hello Véloris Vault, I am initiating a private inquiry regarding:\n👉 ${topicName}\n\nPlease advise on customized availability or booking coordinates.`
      }));

      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('consult-stylist', handleConsultStylist);
    return () => window.removeEventListener('consult-stylist', handleConsultStylist);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate high-end submission logic
    setSubmitted(true);
  };

  const contactInfos = [
    {
      icon: MapPin,
      label: 'Maison Atelier Address',
      value: 'Building 5, Dubai Design District (d3), Office 702, Dubai, UAE',
      actionLabel: 'View on Google Maps',
      actionUrl: 'https://maps.google.com/?q=Dubai+Design+District'
    },
    {
      icon: Phone,
      label: 'Concierge Telephone Service',
      value: '+971 4 589 2210',
      actionLabel: 'Call Desk (9AM - 6PM GST)',
      actionUrl: 'tel:+97145892210'
    },
    {
      icon: Mail,
      label: 'Corporate Electronic Mail',
      value: 'hello@veloris.com',
      actionLabel: 'Send Direct Message',
      actionUrl: 'mailto:hello@veloris.com'
    },
    {
      icon: Globe,
      label: 'Official Global Website',
      value: 'www.veloris.com',
      actionLabel: 'Primary Server',
      actionUrl: '#'
    }
  ];

  const socialChannels = [
    { name: 'Instagram', handle: '@veloris', href: '#' },
    { name: 'TikTok', handle: '@veloris_official', href: '#' },
    { name: 'X / Twitter', handle: '@veloris', href: '#' }
  ];

  return (
    <section id="contact" className="py-24 bg-sand-100 border-t border-sand-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          {/* Left Column: Fine Coordinates */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-rosegold-500 block">
                Direct Communications
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-sand-950 tracking-wide">
                Get In Touch
              </h2>
              <p className="text-xs md:text-sm text-sand-400 leading-relaxed max-w-sm">
                Whether you seek custom sizing collections, celebrity fittings, or strategic partnerships, our concierge desk is ready to organize your appointment in d3.
              </p>
            </div>

            {/* Direct Contact Lists */}
            <div className="space-y-8" id="contact-coordinates-list">
              {contactInfos.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start pb-6 border-b border-sand-200/50 last:border-0 last:pb-0">
                    <div className="w-9 h-9 rounded-full bg-sand-50 border border-sand-200 text-rosegold-500 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[10px] uppercase font-bold tracking-widest text-sand-400">
                        {info.label}
                      </h4>
                      <p className="font-serif text-sm md:text-base text-sand-950 leading-relaxed">
                        {info.value}
                      </p>
                      <a
                        href={info.actionUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-rosegold-500 hover:text-rosegold-700 transition-colors"
                      >
                        <CornerDownRight className="w-3 h-3" />
                        {info.actionLabel}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Channels Indicator */}
            <div className="p-6 bg-sand-50 border border-sand-200/60 space-y-4">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-sand-950 flex items-center gap-2">
                <Share2 className="w-3.5 h-3.5 text-rosegold-500" />
                Verified Social Channels
              </h4>
              <div className="grid grid-cols-3 gap-4 text-xs">
                {socialChannels.map((soc) => (
                  <button
                    key={soc.name}
                    onClick={() => handleCopyHandle(soc.handle)}
                    className="group space-y-1 flex flex-col hover:text-rosegold-500 transition-colors bg-transparent border-none cursor-pointer text-left p-0 select-none outline-none"
                    title="Click to copy handle"
                  >
                    <span className="font-semibold text-[10px] text-sand-900 group-hover:text-rosegold-500">{soc.name}</span>
                    <span className={`text-[11px] font-mono tracking-tighter ${copiedHandle === soc.handle ? 'text-green-600 font-semibold' : 'text-sand-400'}`}>
                      {copiedHandle === soc.handle ? '✓ Copied' : soc.handle}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Private Inquiry Formulation Board */}
          <div className="lg:col-span-7 bg-sand-50 border border-sand-300/40 p-8 md:p-12 relative overflow-hidden">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-14 h-14 bg-rosegold-50 border border-rosegold-300 text-rosegold-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-sand-950 font-medium tracking-wide">
                  Transmission Received
                </h3>
                <p className="text-xs text-sand-400 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting the Maison. Your formal communication was processed under ID key <strong>VL-{Math.floor(1000 + Math.random() * 9000)}</strong>.
                </p>
                <div className="bg-sand-100 p-6 text-left border border-sand-200 max-w-sm mx-auto space-y-2 text-xs">
                  <div className="font-semibold text-sand-950">Summary Review:</div>
                  <div><span className="text-sand-400">Client:</span> {formData.name}</div>
                  <div><span className="text-sand-400">Email:</span> {formData.email}</div>
                  <div><span className="text-sand-400">Subject:</span> {formData.subject}</div>
                </div>
                <p className="text-[10px] text-sand-400">
                  An director of relationship communications will reach out shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 bg-sand-950 text-sand-50 text-[10px] uppercase font-bold tracking-widest mt-4 hover:bg-rosegold-600 transition-colors"
                >
                  Create New Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 pb-4 border-b border-sand-200/60">
                  <h3 className="font-serif text-xl md:text-2xl font-normal text-sand-950 tracking-wide">
                    Atelier Booking Sheet
                  </h3>
                  <p className="text-[11px] text-sand-400 font-medium uppercase tracking-wider">
                    Please submit your inquiries beneath. Fields marked with * are required.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[9px] uppercase font-bold tracking-widest text-sand-400 mb-1">
                      Full Client Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Caroline Al Maktoum"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent border border-sand-200 text-xs text-sand-950 focus:outline-none focus:border-rosegold-500 placeholder:text-sand-300 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase font-bold tracking-widest text-sand-400 mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent border border-sand-200 text-xs text-sand-950 focus:outline-none focus:border-rosegold-500 placeholder:text-sand-300 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] uppercase font-bold tracking-widest text-sand-400 mb-1">
                    Secure Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="client@velorishouse.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border border-sand-200 text-xs text-sand-950 focus:outline-none focus:border-rosegold-500 placeholder:text-sand-300 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[9px] uppercase font-bold tracking-widest text-sand-400 mb-1">
                    Subject Matter
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border border-sand-200 text-xs text-sand-950 focus:outline-none focus:border-rosegold-500 transition-colors font-sans"
                  >
                    <option value="General Inquiry">General Capsule Inquiry</option>
                    <option value="Celebrity / Athlete Fittings">Celebrity & Brand Fittings</option>
                    <option value="Custom Bespoke Order">Custom Tailored Commission</option>
                    <option value="Strategic Partnership">Atelier Partnerships</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[9px] uppercase font-bold tracking-widest text-sand-400 mb-1">
                    Your Statement / Request Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide any sizing specs, colors, or boutique room requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border border-sand-200 text-xs text-sand-950 focus:outline-none focus:border-rosegold-500 placeholder:text-sand-300 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-sand-950 hover:bg-rosegold-600 active:bg-rosegold-700 text-sand-50 text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300"
                >
                  Verify and Submit Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
