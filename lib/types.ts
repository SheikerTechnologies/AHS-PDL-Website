/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PropertyType = 'Apartment' | 'Townhouse' | 'Villa';

export type ProjectStatus = 'ONGOING' | 'COMPLETED';

export interface DevelopmentProject {
  id: string;
  title: string;
  location: string;
  area: 'Jolshiri Abashon' | 'Nayapaltan';
  type: PropertyType;
  availableUnits: number;
  totalUnits: number;
  percentAvailable: number;
  status: ProjectStatus;
  description: string;
  image: string;
  images?: string[];
  sqft?: string;
  beds?: string;
  photoCount?: number;
  sqftRange?: { min: number; max: number };
  bedrooms?: string;
}

export type SortOption = 'newest' | 'most-available' | 'name-az';

export interface ProjectFilters {
  status: ProjectStatus[];
  areas: string[];
  types: PropertyType[];
  sizeRange: [number, number];
  sort: SortOption;
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
  | 'Services'
  | 'Landowners'
  | 'Blog';