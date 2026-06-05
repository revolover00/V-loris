/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Achievement } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'obsidian-cashmere',
    name: 'The Obsidian Cashmere',
    priceUSD: 250,
    priceAED: 950,
    color: 'matte-black',
    colorName: 'Matte Obsidian Black',
    image: '/src/assets/images/obsidian_hoodie_1780663655152.png',
    description: 'Our signature double-faced knit masterpiece. Meticulously spun from high-micron Italian cashmere and pure Egyptian organic cotton, providing an impossibly soft feel with high structural integrity.',
    materials: [
      '35% Italian Grade-A Cashmere',
      '65% Giza Long-Staple Egyptian Organic Cotton'
    ],
    features: [
      'Hand-washed in volcanic-filtered spring water',
      'Lightly singed by hand for an ultra-premium vintage finish',
      'Custom bespoke solid rose gold aglets, engraved with the Véloris seal',
      'Zero-pilling surface finish',
      'Double-ply structured hood that maintains its shape perfectly'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'alabaster-knit',
    name: 'The Alabaster Knit',
    priceUSD: 215,
    priceAED: 800,
    color: 'alabaster-beige',
    colorName: 'Draped Alabaster Beige',
    image: '/src/assets/images/alabaster_hoodie_1780663673134.png',
    description: 'Designed as an ode to architectural draping. This piece features a heavier luxury knit with a beautiful natural drape, matching casual days with refined fine dining environments.',
    materials: [
      '40% Mongolian Cashmere',
      '60% Egyptian Organic Cotton, vintage spun'
    ],
    features: [
      'Natural organic plant-based dye sourcing',
      'Subtle monochrome embroidered Véloris monogram at the sleeve ring',
      'Concealed invisible zip pocket lined with high-density premium silk',
      'Waffle-knit hood lining for enhanced breathable warmth',
      'Individually inspected and signed by our head tailor'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'd3-melange',
    name: 'The d3 Melange',
    priceUSD: 185,
    priceAED: 680,
    color: 'mineral-grey',
    colorName: 'Mineral Charcoal Grey',
    image: '/src/assets/images/charcoal_hoodie_1780663690584.png',
    description: 'Named in honor of our architectural headquarters in the Dubai Design District (d3). A highly structured, technical knit engineered for modern entrepreneurs and jetsetters.',
    materials: [
      '30% Fine-knit Italian Cashmere',
      '70% Egyptian Long-Staple Cotton'
    ],
    features: [
      'Reinforced interlock panels for extreme durability',
      'Custom hardware accents in highly polished 14k rose gold alloy',
      'Ergonomic shoulder seam articulation for ultimate movement',
      'Mid-weight fabrication optimal for international transit and mild climates',
      'Engineered knit patterns on ribbing for subtle texture'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-2019',
    year: 2019,
    title: 'Middle East Casual Wear Catalyst',
    description: 'Recognized as the fastest growing luxury casual wear brand in the Middle East. Bridging regional luxury sensibilities with global lifestyle demands.',
    metric: 'Fastest Growing'
  },
  {
    id: 'ach-2020',
    year: 2020,
    title: 'The Eco-Cashmere Milestone',
    description: 'Released our first circular luxury piece, weaving fine raw cashmere alongside certified ocean-bound recycled polymers without compromising softness.',
    metric: 'First Eco-Luxury'
  },
  {
    id: 'ach-2022',
    year: 2022,
    title: 'Unveiling the Véloris Vault',
    description: 'Opened our flagship sensory showroom in the ultra-exclusive Fashion Avenue of Dubai Mall—a futuristic museum setting designed for tailored fittings.',
    metric: 'The Dubai Mall Vault'
  },
  {
    id: 'ach-2024',
    year: 2024,
    title: 'Maison Véloris × Kylian Mbappé',
    description: 'Co-created a bespoke hyper-limited capsule collection curated especially for Kylian Mbappé—merging high-fashion leisure with athletic elite prestige.',
    metric: 'Exclusive Capsule'
  },
  {
    id: 'ach-2025',
    year: 2025,
    title: 'A Global Cultural Symbol',
    description: 'Achieved an international milestone with 1 million organic brand followers and $12M USD in global sales, redefining street-level luxury universally.',
    metric: '$12M Revenue'
  }
];
