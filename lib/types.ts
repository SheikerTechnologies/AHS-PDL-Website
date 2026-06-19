/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Property {
  id: string;
  title: string;
  location: string;
  coast: 'North' | 'East' | 'South' | 'West';
  type: 'Villa' | 'Apartment' | 'Penthouse' | 'Duplex';
  bedrooms: number;
  bathrooms: number;
  areaSqm: number;
  image: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface DevelopmentProject {
  id: string;
  title: string;
  location: string;
  coast: 'North' | 'East' | 'South' | 'West';
  type: string;
  availableUnits: number;
  totalUnits: number;
  percentAvailable: number;
  status: 'UNDER CONSTRUCTION' | 'PRE LAUNCH MARKETING';
  description: string;
  image: string;
}

export interface Agent {
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
  specialty: string;
}

export type ActiveTab =
  | 'Home'
  | 'Projects'
  | 'About'
  | 'Layout'
  | 'Contact'
  | 'Services';