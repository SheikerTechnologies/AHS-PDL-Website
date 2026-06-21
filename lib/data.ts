/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent, DevelopmentProject } from './types';

export interface ClientMeta {
  name: string;
  bengName: string;
  filename: string;
}

export const CLIENT_METADATA: ClientMeta[] = [
  { name: "People's Republic of Bangladesh", bengName: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার", filename: "bangladesh-govt.png" },
  { name: "Rajdhani Unnayan Kartripakkha", bengName: "রাজধানী উন্নয়ন কর্তৃপক্ষ (রাজউক)", filename: "rajuk.png" },
  { name: "Bangladesh Navy", bengName: "বাংলাদেশ নৌবাহিনী", filename: "bangladesh-navy.png" },
  { name: "Bangladesh Coast Guard", bengName: "বাংলাদেশ কোস্ট গার্ড", filename: "coast-guard.png" },
  { name: "Civil Aviation Authority of Bangladesh", bengName: "সিভিল এভিয়েশন অথরিটি, বাংলাদেশ", filename: "CAAB.png" },
  { name: "Chittagong Port Authority", bengName: "চট্টগ্রাম বন্দর কর্তৃপক্ষ", filename: "chittagong-port.png" },
  { name: "Mongla Port Authority", bengName: "মংলা বন্দর কর্তৃপক্ষ", filename: "mongla-port.png" },
  { name: "Bangladesh Inland Water Transport Authority", bengName: "বাংলাদেশ অভ্যন্তরীণ নৌ-পরিবহন কর্তৃপক্ষ", filename: "biwta.png" },
  { name: "Bangladesh Agricultural Development Corporation", bengName: "বাংলাদেশ কৃষি উন্নয়ন কর্পোরেশন", filename: "badc.png" },
  { name: "Public Works Department", bengName: "গণপূর্ত অধিদপ্তর (পিডব্লিউডি)", filename: "pwd.png" },
  { name: "Military Engineer Services", bengName: "মিলিটারি ইঞ্জিনিয়ার সার্ভিসেস (এমইএস)", filename: "mes.png" },
  { name: "Directorate General Defence Purchase", bengName: "প্রতিরক্ষা ক্রয় মহাপরিদপ্তর (ডিজিডিপি)", filename: "dgdp.png" },
  { name: "Dhaka Cantonment Board", bengName: "ঢাকা ক্যান্টনমেন্ট বোর্ড", filename: "dhaka-cantonment-board.png" },
  { name: "Department of Public Health Engineering", bengName: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর", filename: "dphe.png" },
];

export const AGENTS: Agent[] = [
  {
    name: 'Yalda Sheri',
    role: 'Senior Luxury Consultant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    phone: '01625-555700',
    email: 'ahspropertiesdevelopmentltd@gmail.com',
    specialty: 'Exclusive Estates & Investment Portfolios',
  },
  {
    name: 'Junaid Nuzeebun',
    role: 'Founder & Principal Broker',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    phone: '01725-555700',
    email: 'ahspropertiesdevelopmentltd@gmail.com',
    specialty: 'Off-Market & High-Net-Worth Advisory',
  },
];

export const DEVELOPMENT_PROJECTS: DevelopmentProject[] = [
  {
    id: 'proj-147-intl2',
    title: 'AHS Jolshiri Central 16',
    location: 'Sector 16, Jolshiri Abashon, Dhaka',
    coast: 'North',
    type: 'Apartments',
    availableUnits: 4,
    totalUnits: 7,
    percentAvailable: 57,
    status: 'UNDER CONSTRUCTION',
    description: "Located in the premium core of Sector 16, AHS Jolshiri Central offers an exclusive lifestyle in the nation's premier smart city.",
    image: '/assets/projects/Properties01-01.jpg',
    images: ['/assets/projects/Properties01-01.jpg','/assets/projects/Properties01-02.jpg','/assets/projects/Properties01-03.jpg','/assets/projects/Properties01-04.jpg','/assets/projects/Properties01-05.jpg']
  },
  {
    id: 'proj-west-bay',
    title: 'AHS VIP Square',
    location: 'VIP Road, Nayapaltan, Dhaka',
    coast: 'West',
    type: 'Apartments',
    availableUnits: 2,
    totalUnits: 11,
    percentAvailable: 18,
    status: 'UNDER CONSTRUCTION',
    description: "Ideally located in Nayapaltan, VIP Square offers high-connectivity workspaces and executive residences.",
    image: '/assets/projects/Properties02-01.jpg',
    images: ['/assets/projects/Properties02-01.jpg','/assets/projects/Properties02-02.jpg','/assets/projects/Properties02-03.jpg','/assets/projects/Properties02-04.jpg']
  },
  {
    id: 'proj-river-edge',
    title: 'AHS Jolshiri Lakeview 15',
    location: 'Sector 15, Jolshiri Abashon, Dhaka',
    coast: 'East',
    type: 'Apartments',
    availableUnits: 5,
    totalUnits: 5,
    percentAvailable: 100,
    status: 'PRE LAUNCH MARKETING',
    description: "A refined collection of residences positioned next to the beautiful central canals of Jolshiri Abashon.",
    image: '/assets/projects/Properties03-01.jpg',
    images: ['/assets/projects/Properties03-01.jpg','/assets/projects/Properties03-02.jpg','/assets/projects/Properties03-03.jpg','/assets/projects/Properties03-04.jpg']
  },
  {
    id: 'proj-coastal-view-3',
    title: 'AHS Coastal View Residences',
    location: 'Sector 16, Jolshiri Abashon, Dhaka',
    coast: 'North',
    type: 'Townhouses',
    availableUnits: 3,
    totalUnits: 8,
    percentAvailable: 38,
    status: 'PRE LAUNCH MARKETING',
    description: "A beautifully designed G+2 residential scheme offering modern townhouses with panoramic views of the Jolshiri landscape.",
    image: '/assets/projects/Properties04-01.jpg',
    images: ['/assets/projects/Properties04-01.jpg','/assets/projects/Properties04-02.jpg','/assets/projects/Properties04-03.jpg','/assets/projects/Properties04-04.jpg','/assets/projects/Properties04-05.jpg','/assets/projects/Properties04-06.jpg','/assets/projects/Properties04-07.jpg']
  },
  {
    id: 'proj-emara',
    title: 'Emara Garden Residences',
    location: 'Sector 15, Jolshiri Abashon, Dhaka',
    coast: 'East',
    type: 'Apartments',
    availableUnits: 6,
    totalUnits: 12,
    percentAvailable: 50,
    status: 'UNDER CONSTRUCTION',
    description: "A premium G+2 residential development with European-inspired finishes, private plunge pools, and integrated VRF silent cooling systems.",
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'proj-amali',
    title: 'Amali Smart Townhouses',
    location: 'Sector 16, Jolshiri Abashon, Dhaka',
    coast: 'North',
    type: 'Townhouses',
    availableUnits: 8,
    totalUnits: 14,
    percentAvailable: 57,
    status: 'PRE LAUNCH MARKETING',
    description: "A visionary Smart City Scheme development featuring panoramic greenfield outlooks, an in-complex wellness center, and electric cart sharing terminals.",
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'proj-le-loft',
    title: 'Le Loft Executive Suites',
    location: 'VIP Road, Nayapaltan, Dhaka',
    coast: 'West',
    type: 'Apartments',
    availableUnits: 4,
    totalUnits: 6,
    percentAvailable: 67,
    status: 'UNDER CONSTRUCTION',
    description: "Urban convenience premium hub offering access-controlled lift modules, private CCTV networks, and covered ground-level parks in the heart of Dhaka.",
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'proj-vantage',
    title: 'Vantage Point Residences',
    location: 'Sector 16, Jolshiri Abashon, Dhaka',
    coast: 'North',
    type: 'Apartments',
    availableUnits: 5,
    totalUnits: 9,
    percentAvailable: 56,
    status: 'UNDER CONSTRUCTION',
    description: "Incomparable city-mountain panoramas with rooftop sky gardens, fully accessorized fitness studio, and intelligent water harvest tanks.",
    image: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1200&q=80'
  },
];