/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DevelopmentProject {
  id: string;
  title: string;
  location: string;
  area: 'Jolshiri Abashon' | 'Nayapaltan';
  type: string;
  availableUnits: number;
  totalUnits: number;
  percentAvailable: number;
  status: 'ONGOING' | 'COMPLETED';
  description: string;
  image: string;
  images?: string[];
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