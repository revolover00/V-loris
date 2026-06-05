/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  priceUSD: number;
  priceAED: number;
  color: 'matte-black' | 'alabaster-beige' | 'mineral-grey';
  colorName: string;
  image: string;
  description: string;
  materials: string[];
  features: string[];
  sizes: string[];
}

export interface Achievement {
  id: string;
  year: number;
  title: string;
  description: string;
  metric?: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
}
