/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectUnit {
  name: string;
  beds: number;
  sizeSqm: number;
  status: 'Available' | 'Only 1 Left' | 'Reserved' | 'Sold';
}

export interface ProjectExtras {
  completion: string;
  scheme: 'PDS (Property Development Scheme)' | 'SCS (Smart City Scheme)' | 'G+2 Residential Scheme';
  coBroker: string;
  amenities: string[];
  units: ProjectUnit[];
}

export const PROJECT_EXTRAS: Record<string, ProjectExtras> = {
  'proj-147-intl2': {
    completion: 'Q4 2026',
    scheme: 'PDS (Property Development Scheme)',
    coBroker: 'Junaid Nuzeebun',
    amenities: [
      'Direct lakeside parkway access',
      'Rooftop panorama infinity deck',
      'High-speed fiber connectivity',
      'Private security & smart entry access',
      'Integrated underfloor cooling elements',
      'Lush green Jolshiri parkland buffers'
    ],
    units: [
      { name: '2-Bed Seascape Garden Residence', beds: 2, sizeSqm: 135, status: 'Available' },
      { name: '3-Bed Ocean View Suite', beds: 3, sizeSqm: 185, status: 'Only 1 Left' },
      { name: 'Lagoon Signature Duplex with Pool', beds: 4, sizeSqm: 240, status: 'Reserved' },
    ]
  },
  'proj-west-bay': {
    completion: 'Q3 2026',
    scheme: 'PDS (Property Development Scheme)',
    coBroker: 'Junaid Nuzeebun',
    amenities: [
      'Immediate central business corridor walkability',
      'Energy-sensitive solar PV panels',
      'Dual-glazed sound dampened structures',
      'Assigned basement charging blocks',
      'Private residents-only sports court',
      'Prime central business corridor location'
    ],
    units: [
      { name: '2-Bed Sunset Vista Flat', beds: 2, sizeSqm: 120, status: 'Available' },
      { name: '3-Bed Coastal Horizon Penthouse', beds: 3, sizeSqm: 215, status: 'Only 1 Left' },
    ]
  },
  'proj-river-edge': {
    completion: 'Q1 2027',
    scheme: 'PDS (Property Development Scheme)',
    coBroker: 'Junaid Nuzeebun',
    amenities: [
      'Private lake mooring pontoon',
      'Direct lake recreation docks',
      'Dense endemic forest perimeter',
      'Saltwater swimming basin',
      'Generous open floorplan flow',
      'Electric automated security shutter gates'
    ],
    units: [
      { name: '3-Bed Forest Edge Apartment', beds: 3, sizeSqm: 160, status: 'Available' },
      { name: '3-Bed Canopy Garden Duplex', beds: 3, sizeSqm: 210, status: 'Available' },
      { name: 'Grand River Penthouse with Mooring', beds: 4, sizeSqm: 320, status: 'Reserved' },
    ]
  },
  'proj-coastal-view-3': {
    completion: 'Q2 2026',
    scheme: 'G+2 Residential Scheme',
    coBroker: 'Yalda Sheri',
    amenities: [
      'Vingt Pieds core accessibility',
      '3-minute walk to Jolshiri Central Park',
      'Communal central lap stream pool',
      'Rooftop BBQ & Social Pergolas',
      '24/7 dedicated gate keeper',
      'High insulation thermal ceiling act'
    ],
    units: [
      { name: '2-Bed Modern Corner Loft', beds: 2, sizeSqm: 110, status: 'Available' },
      { name: '3-Bed Family Veranda Home', beds: 3, sizeSqm: 155, status: 'Available' },
      { name: 'Skyline Terrace Duplex Suite', beds: 3, sizeSqm: 190, status: 'Reserved' },
    ]
  },
  'proj-emara': {
    completion: 'Q4 2026',
    scheme: 'G+2 Residential Scheme',
    coBroker: 'Yalda Sheri',
    amenities: [
      'High-yield investment optimization',
      'Private micro-plunge pools',
      'European imported kitchen cabinetry',
      'Assigned secure parking bays',
      'Walking bypass to local food yards',
      'Integrated VRF silent cooling systems'
    ],
    units: [
      { name: '2-Bed Boulevard Nest Flat', beds: 2, sizeSqm: 115, status: 'Available' },
      { name: '3-Bed Premium Penthouse Suite', beds: 3, sizeSqm: 180, status: 'Only 1 Left' },
    ]
  },
  'proj-amali': {
    completion: 'Q2 2027',
    scheme: 'SCS (Smart City Scheme)',
    coBroker: 'Junaid Nuzeebun',
    amenities: [
      'Panoramic open greenfield outlooks',
      'In-complex medical wellness center',
      'Pedestrian leafy running ring',
      'Electric cart sharing terminal',
      'Triple-height grand entrance lobby',
      'Bespoke modern furnishings package'
    ],
    units: [
      { name: '2-Bed Smart Urban Apartment', beds: 2, sizeSqm: 112, status: 'Available' },
      { name: '3-Bed Sky Oasis Penthouse', beds: 3, sizeSqm: 205, status: 'Available' },
      { name: 'Master Signature Villa Pod', beds: 4, sizeSqm: 380, status: 'Reserved' },
    ]
  },
  'proj-le-loft': {
    completion: 'Q4 2026',
    scheme: 'G+2 Residential Scheme',
    coBroker: 'Junaid Nuzeebun',
    amenities: [
      'Urban convenience premium hub',
      'Access controlled lift modules',
      'Private security CCTV networks',
      'Covered ground-level parks',
      'Generous storage utility lockers',
      'Fiber home entertainment paths'
    ],
    units: [
      { name: '1-Bed Urban Executive Loft', beds: 1, sizeSqm: 75, status: 'Available' },
      { name: '2-Bed City Classic Apartment', beds: 2, sizeSqm: 110, status: 'Available' },
    ]
  },
  'proj-vantage': {
    completion: 'Q3 2026',
    scheme: 'G+2 Residential Scheme',
    coBroker: 'Junaid Nuzeebun',
    amenities: [
      'Incomparable city-mountain panoramas',
      'Rooftop communal sky gardens',
      'Fully accessorized fitness studio',
      'Intelligent water harvest tanks',
      'Secured gated estate parameters',
      'Double-brick sound insulating walls'
    ],
    units: [
      { name: '2-Bed Skyline Panorama Suite', beds: 2, sizeSqm: 115, status: 'Available' },
      { name: '3-Bed Mountain View Residence', beds: 3, sizeSqm: 165, status: 'Available' },
    ]
  }
};

export function getDefaultExtras(): ProjectExtras {
  return {
    completion: 'Q4 2026',
    scheme: 'PDS (Property Development Scheme)',
    coBroker: 'Junaid Nuzeebun',
    amenities: ['Pristine parkland path', 'Elite layout', 'Gated estate parameters', 'RAJUK Approved Developer'],
    units: [
      { name: 'Signature Luxury Apartment', beds: 3, sizeSqm: 180, status: 'Available' }
    ]
  };
}
