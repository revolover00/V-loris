/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BadgeHelp, Sparkles, Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="group bg-sand-50 border border-sand-200/60 p-4 flex flex-col justify-between cursor-pointer hover:border-rosegold-400 hover:shadow-[0_4px_30px_rgba(189,122,102,0.06)] transition-all duration-500 hover:-translate-y-1 block h-full"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[3/4] bg-sand-100 overflow-hidden mb-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out select-none"
          referrerPolicy="no-referrer"
        />
        
        {/* Quality Banner Overlay */}
        <div className="absolute top-3 left-3 bg-sand-950/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] font-medium text-sand-50 px-2.5 py-1.5 transition-opacity duration-300">
          Atelier Craft
        </div>

        {/* Hover interaction help overlay */}
        <div className="absolute inset-0 bg-sand-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="px-5 py-3 bg-sand-50/95 backdrop-blur-sm border border-rosegold-300 text-[10px] uppercase tracking-[0.25em] font-semibold text-sand-950 flex items-center gap-1.5 shadow-lg translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span>Inquire Tailored Piece</span>
            <Plus className="w-3 h-3 text-rosegold-500" />
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="space-y-3">
        {/* Material Signature & Swatch */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-rosegold-500">
            Cashmere Blend
          </span>
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2.5 h-2.5 rounded-full border border-sand-200 ${
                product.color === 'matte-black'
                  ? 'bg-sand-950'
                  : product.color === 'alabaster-beige'
                  ? 'bg-[#E5DDCB]'
                  : 'bg-[#555658]'
              }`}
              title={product.colorName}
            />
            <span className="text-[9px] text-sand-400 font-medium tracking-wide uppercase">
              {product.colorName.split(' ')[1] || product.colorName}
            </span>
          </div>
        </div>

        {/* Product Title */}
        <h4 className="font-serif text-lg text-sand-950 font-normal tracking-wide group-hover:text-rosegold-500 transition-colors">
          {product.name}
        </h4>

        {/* Detail blurbs */}
        <p className="text-xs text-sand-400 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Pricing tag & CTA Button */}
        <div className="flex items-center justify-between border-t border-sand-100 pt-4 mt-2">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-sand-950 font-serif">
              {product.priceAED} AED
            </span>
            <span className="text-[9px] text-sand-400 font-medium tracking-wide">
              Approx. ${product.priceUSD} USD
            </span>
          </div>
          <button className="text-[10px] uppercase tracking-wider font-semibold text-rosegold-600 group-hover:text-sand-950 hover:underline transition-colors flex items-center gap-1">
            Reserve Suite
          </button>
        </div>
      </div>
    </div>
  );
}
