/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  MapPin,
  Layers,
  Compass,
  HelpCircle,
  Heart,
  ArrowRight,
  Sparkles,
  Building2,
  CheckCircle2,
  SlidersHorizontal,
  ArrowLeft,
  Download,
  Calculator,
  Shield,
  Calendar,
  Maximize2,
  Check,
  ExternalLink,
  ChevronRight,
  Info,
  Award,
  Phone,
  Mail,
  CircleHelp,
  ShieldCheck
} from 'lucide-react';
import { DevelopmentProject } from '@/lib/types';
import { DEVELOPMENT_PROJECTS } from '@/lib/data';

interface ProjectsOverviewProps {
  onInquire: (title: string) => void;
}

// Custom specifications and detailed units databases for the high-fidelity Project Page
interface ProjectUnit {
  name: string;
  beds: number;
  sizeSqm: number;
  status: 'Available' | 'Only 1 Left' | 'Reserved' | 'Sold';
}

const PROJECT_EXTRAS: Record<string, {
  completion: string;
  scheme: 'PDS (Property Development Scheme)' | 'SCS (Smart City Scheme)' | 'G+2 Residential Scheme';
  coBroker: string;
  amenities: string[];
  units: ProjectUnit[];
}> = {
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
      'On-site managed rental desk'
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

export default function ProjectsOverview({
  onInquire,
}: ProjectsOverviewProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCoast, setSelectedCoast] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [savedProjects, setSavedProjects] = useState<string[]>([]);

  // High-fidelity Project Detail View state
  const [activeProject, setActiveProject] = useState<DevelopmentProject | null>(null);

  // Selected Unit inside the detail view for dynamic calculators
  const [selectedUnitIndex, setSelectedUnitIndex] = useState<number>(0);

  // Dynamic booking form states inside active details view
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingEmail, setBookingEmail] = useState<string>('');
  const [bookingPhone, setBookingPhone] = useState<string>('');
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);

  const toggleSave = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedProjects(prev =>
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  // Filter projects lists
  const filteredProjects = DEVELOPMENT_PROJECTS.filter(project => {
    const matchesSearch = searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCoast = selectedCoast === 'All' || project.coast === selectedCoast;
    const matchesStatus = selectedStatus === 'All' ||
      (selectedStatus === 'Under Construction' && project.status === 'UNDER CONSTRUCTION') ||
      (selectedStatus === 'Pre-Launch' && project.status === 'PRE LAUNCH MARKETING');

    return matchesSearch && matchesCoast && matchesStatus;
  });

  // If a project detail view is selected, render this stunning Project Page
  if (activeProject) {
    const extras = PROJECT_EXTRAS[activeProject.id] || {
      completion: 'Q4 2026',
      scheme: 'PDS (Property Development Scheme)',
      coBroker: 'Junaid Nuzeebun',
      amenities: ['Pristine parkland path', 'Elite layout', 'Gated estate parameters', 'RAJUK Approved Developer'],
      units: [
        { name: 'Signature Luxury Apartment', beds: 3, sizeSqm: 180, status: 'Available' }
      ]
    };

    const selectedUnitObj = extras.units[selectedUnitIndex] || extras.units[0];
    const agentName = extras.coBroker || 'Junaid Nuzeebun';
    const agentTel = agentName === 'Yalda Sheri' ? '01625-555700' : '01725-555700';
    const agentEmail = 'ahspropertiesdevelopmentltd@gmail.com';
    const agentPhoto = agentName === 'Yalda Sheri'
      ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
      : 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80';

    return (
      <div className="flex flex-col gap-12 w-full max-w-7xl mx-auto py-4 select-none font-sans animate-in fade-in slide-in-from-bottom-6 duration-300">

        {/* Back and Bookmark Actions Header bar */}
        <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm">
          <button
            onClick={() => {
              setActiveProject(null);
              setSelectedUnitIndex(0);
              setBookingSubmitted(false);
              setBookingName('');
              setBookingEmail('');
              setBookingPhone('');
              window.scrollTo({ top: 400, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#c5a257]" />
            <span>Back to Developments Catalog</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs text-stone-400 font-bold uppercase tracking-widest mr-2">
              Share or Save Scheme
            </span>
            <button
              onClick={() => toggleSave(activeProject.id)}
              className={`flex items-center justify-center p-2.5 rounded-full border transition-all cursor-pointer ${savedProjects.includes(activeProject.id)
                ? 'bg-rose-500/10 text-rose-400 border-rose-500/35'
                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              title="Save project"
            >
              <Heart className={`w-4 h-4 ${savedProjects.includes(activeProject.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* 
          1. IMMERSIVE HERO SPLIT BANNER 
          Breathtaking fullscreen aesthetic header with massive typographic identity.
        */}
        <div className="relative h-[320px] md:h-[420px] rounded-[32px] overflow-hidden bg-stone-950 border border-stone-800 flex items-end p-6 md:p-12 shadow-lg">
          <div className="absolute inset-0 z-0">
            <img
              src={activeProject.image}
              alt={activeProject.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-60 scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/65 to-transparent" />
          </div>

          <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2 select-none">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#dfad42] bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#dfad42]/35">
              {extras.scheme}
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#4ade80] bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#4ade80]/35 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              {activeProject.status}
            </span>
          </div>

          <div className="relative z-10 flex flex-col gap-2 text-left text-white max-w-4xl">
            <div className="flex items-center gap-1.5 text-[#c5a257] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 fill-[#c5a257]/20" />
              <span>OFF-PLAN PREMIUM MANDATE</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-md font-sans mb-1 md:mb-3">
              {activeProject.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-base font-medium text-stone-200">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-5 h-5 text-[#c5a257]" />
                <span>{activeProject.location}</span>
              </div>
              <span className="hidden sm:inline text-stone-500">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-5 h-5 text-stone-400" />
                <span>Delivery Completion: <strong className="text-[#dfad42] font-semibold">{extras.completion}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* 
          2. SECTION: "BUILD ON" - VALUES & STRUCTURAL INTEGRITY
          Meticulous detail block describing the soil, geological structure, EDB context, and foundation properties.
        */}
        <section className="bg-[#fafaf9] border border-stone-200/80 rounded-[32px] p-6 md:p-10 text-left flex flex-col gap-8">
          <div className="flex flex-col gap-2 max-w-3xl">
            <span className="text-xs font-black text-[#c5a257] uppercase tracking-widest">SECTION 01</span>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 font-sans tracking-tight uppercase">
              Build On Excellence & Foundations
            </h2>
            <p className="text-sm text-stone-500 font-medium font-sans">
              Every cornerstone at <strong className="text-stone-800">{activeProject.title}</strong> is built on structural brilliance, strict geological compliance safeguards, and approved environmental frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white border border-stone-200/80 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:border-stone-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-700 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wide">
                Built on Premium Masonry
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed font-normal">
                Clad in natural stone materials, providing incredible thermal barrier systems and enduring tropical resilience.
              </p>
            </div>

            <div className="bg-white border border-stone-200/80 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:border-stone-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wide">
                Built on Approved Standards
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed font-normal">
                Strictly validated under RAJUK and Cantonment Board planning guidelines. Legally secured via comprehensive civil-code completion guarantees guaranteeing absolute buyer protection.
              </p>
            </div>

            <div className="bg-white border border-stone-200/80 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:border-stone-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#1e2a4a]/10 flex items-center justify-center text-[#1e2a4a] shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wide">
                Built on Integrity & Escrow
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed font-normal">
                Leverages the civil-code VEFA framework. Fully audited, notarized construction stage payments protect your global investments from day one.
              </p>
            </div>

          </div>

          <p className="text-xs text-stone-500 leading-relaxed border-t border-stone-200/60 pt-4 font-normal max-w-5xl">
            {activeProject.description} Designed with natural volcanic stone cladding, durable hardwood details, and soaring double-glazed floor-to-ceiling sliding panels, this landmark structure blends organically into local shorelines while establishing modern security structures for discerning global owners.
          </p>
        </section>

        {/* 
          3. SECTION: "DESIGN FOR LIFE" - ARCHITECTURE & SUSTAINABLE HARMONY
          Beautiful visual text flow details.
        */}
        <section className="bg-white border border-stone-200/80 rounded-[32px] p-6 md:p-10 text-left flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-xs font-black text-[#c5a257] uppercase tracking-widest pl-0.5">SECTION 02</span>
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tight font-sans uppercase">
                Design for Life
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                True luxury is not merely observed — it is felt. The core architectural plans at <strong>{activeProject.title}</strong> are crafted around passive design frameworks. Floor plans are mathematically modeled to utilize trade winds, allowing natural cross-ventilation to keep rooms refreshing while minimizing environmental footprints.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {[
                  { title: 'Seamless Lifestyles', desc: 'Soaring 3m sliding portals open onto wide private lap pools and sunny endemic botanical garden buffers.' },
                  { title: 'Eco-Smart PV Power', desc: 'Integrated state-of-the-art rooftop solar arrays power common facilities and optional home automation desks.' },
                  { title: 'Double Acoustic Glazing', desc: 'Dual-pane structural glass assemblies buffer outside ambient noise, ensuring perfect interior silence.' },
                  { title: 'High-Velocity Cooling', desc: 'Configured with concealed, quiet Variable Refrigerant Flow (VRF) units for pristine zone-based climate control.' }
                ].map((item, id) => (
                  <div key={id} className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#c5a257]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#c5a257]">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-stone-900 uppercase tracking-wider">{item.title}</h4>
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 h-[260px] md:h-[350px] rounded-2xl overflow-hidden shadow-inner border border-stone-200 relative animate-in fade-in duration-500">
              <img
                src={activeProject.image}
                alt="Architecture design theme"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-950/25" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-stone-200/80 text-left">
                <span className="text-[9px] font-black uppercase text-[#c5a257] tracking-widest block">ENVIRONMENT COEXISTENCE</span>
                <p className="text-[11px] text-stone-700 font-semibold leading-snug mt-1">
                  100% compliant with environmental buffer limits, safeguarding native marine habitats and coastal forest canopy layers.
                </p>
              </div>
            </div>

          </div>
        </section>



        {/* 
          5. SECTION: "MEET OUR EXPERT AGENT" - DETAILED BROKER ROW
          Highly customized, personal broker showcase card.
        */}
        <section className="bg-white border border-stone-200/80 rounded-[32px] p-6 md:p-10 text-left flex flex-col gap-6">
          <div className="flex flex-col gap-2 max-w-3xl">
            <span className="text-xs font-black text-[#c5a257] uppercase tracking-widest pl-0.5">SECTION 03</span>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight font-sans uppercase">
              Meet Our Expert Agent
            </h2>
            <p className="text-sm text-stone-500 font-medium font-sans">
              Connect directly with our elite registered broker who possesses direct exclusive relationships with premier real estate developers in Bangladesh.
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-100 flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Portrait inside premium border */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-white border-4 border-white shadow-md shrink-0">
              <img
                src={agentPhoto}
                alt={agentName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 right-2 inline-flex items-center justify-center p-1.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" title="Online" />
            </div>

            {/* Qualifications Card */}
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
              <div>
                <span className="text-[9px] font-extrabold uppercase text-[#c5a257] tracking-widest px-2.5 py-1 bg-[#c5a257]/10 rounded-full inline-block">
                  TERRITORY LEAD SPECIALIST
                </span>
                <h3 className="text-2xl font-black text-stone-950 font-sans mt-2">{agentName}</h3>
                <p className="text-xs text-stone-500 font-medium font-sans">AHS Properties & Development Ltd. — Certified Investment Advisory Expert</p>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed font-normal max-w-3xl">
                With over a decade of experience escorting high-net-worth families to pristine residential properties, {agentName} provides uncompromised fiduciary representation. Fully accredited to coordinate directly across regulatory authorities and prime general contractors to ensure secure, seamless property transactions and transfers.
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start pt-2 border-t border-stone-200/50 mt-1">
                <a
                  href={`tel:${agentTel}`}
                  className="bg-white hover:bg-stone-100 text-stone-850 px-5 py-2.5 rounded-xl border border-stone-200 text-xs font-bold transition-all inline-flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#c5a257]" /> {agentTel}
                </a>
                <a
                  href={`mailto:${agentEmail}`}
                  className="bg-stone-900 hover:bg-stone-850 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-[#dfad42]" /> {agentEmail}
                </a>
                <button
                  onClick={() => alert(`Direct Secure Broker Link: Your secure consultation token has been generated. ${agentName} is reachable on VIP Channels.`)}
                  className="bg-[#c5a257] hover:bg-[#b08e48] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request VIP Video-Call</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 
          6. SECTION: "READY TO FIND AWARD" - ACCREDITATIONS & IMMERSIVE ACTIVE BOOKING FORM
          An absolute visual showstopper containing a certified golden Award Accreditation Badge and the complete multi-state Interactive Booking Form.
        */}
        <section id="booking-section" className="bg-[#1e2a4a] text-white border border-stone-800 rounded-[32px] p-6 md:p-10 text-left flex flex-col lg:flex-row gap-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-stone-700/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left panel of CTA - Awards and Accreditations */}
          <div className="lg:w-5/12 flex flex-col gap-6 select-none">
            <span className="text-xs font-black text-[#dfad42] uppercase tracking-widest pl-0.5">SECTION 04</span>

            <div className="flex items-center gap-2">
              <Award className="w-10 h-10 text-[#dfad42] animate-bounce" />
              <h2 className="text-2xl md:text-3xl font-black text-white font-sans uppercase tracking-tight leading-tight">
                Ready to Find Your Award Lifestyle?
              </h2>
            </div>

            <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-normal">
              AHS Properties & Development Ltd. is the proud recipient of the <strong className="text-white font-semibold">Bangladesh Real Estate Excellence Award</strong> for uncompromised engineering quality and flawless service. Initiate your direct, confidential consultation with {agentName} directly inside our secure ecosystem today.
            </p>

            <div className="h-[1px] bg-white/10" />

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold text-[#dfad42] tracking-widest uppercase">TRUST ACCREDITATIONS</span>
              <div className="flex flex-col gap-2">
                {[
                  { title: 'RAJUK & Cantonment Approved', desc: 'Accredited premium residential and commercial developments.' },
                  { title: 'Best Luxury Developer Winner 2026', desc: 'Recognized for superior quality standards.' },
                  { title: '100% Secure Project Delivery Assurance', desc: 'Guaranteed compliance with national building safety acts.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <div className="w-4 h-4 rounded-full bg-[#dfad42]/10 border border-[#dfad42]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#dfad42]">
                      <span className="text-[8px] font-black">★</span>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-extrabold text-white uppercase tracking-wider">{item.title}</h4>
                      <p className="text-[10px] text-stone-400 mt-0.2 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel of CTA - Interactive Multi-stage Booking console */}
          <div className="lg:w-7/12 bg-white text-stone-900 rounded-2xl p-6 md:p-8 border border-white/5 shadow-2xl flex flex-col gap-5">
            {!bookingSubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!bookingName || !bookingEmail || !bookingPhone) {
                    alert('Please supply all credentials before reserving your consultant calendar seat.');
                    return;
                  }
                  setBookingSubmitted(true);
                  onInquire(`${activeProject.title} (VIP Pre-Reservation by ${bookingName})`);
                }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-[10px] font-extrabold text-[#c5a257] uppercase tracking-widest block mb-0.5">ESTATE DESK APPOINTMENT CALENDAR</span>
                  <h3 className="text-lg font-black text-stone-950 font-sans tracking-tight">Reserve Private Consultation Room</h3>
                  <p className="text-xs text-stone-500 mt-0.5 leading-normal font-normal">
                    Secure your digital reservation callback. Your private agent will trigger EDB verification and send floorplans directly.
                  </p>
                </div>

                <div className="h-[1px] bg-stone-100 my-1" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-stone-500 uppercase tracking-wider">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Admiral Alexander Sterling"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 focus:border-[#c5a257] rounded-xl px-4 py-2.5 text-xs text-stone-900 font-semibold focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-stone-500 uppercase tracking-wider">Secure Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +44 7911 123456"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 focus:border-[#c5a257] rounded-xl px-4 py-2.5 text-xs text-stone-900 font-semibold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[10px] font-black text-stone-500 uppercase tracking-wider">Encrypted Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alexander@sterlingholdings.com"
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 focus:border-[#c5a257] rounded-xl px-4 py-2.5 text-xs text-stone-900 font-semibold focus:outline-none transition-colors"
                  />
                </div>

                <div className="bg-amber-50/70 border border-amber-200/50 p-3 rounded-xl text-left flex gap-2 w-full mt-1.5">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 text-amber-700">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-[10px] text-stone-600 leading-normal font-normal">
                    By submitting guidance, AHS Properties registers a formal <strong className="text-stone-900">Priority Investment Option Letter</strong> with the construction development firm on your selected unit <strong>"{selectedUnitObj.name}"</strong>. Re-routing or canceling this Priority Option entails zero charges.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e2a4a] hover:bg-[#151c33] text-white text-xs font-black uppercase tracking-widest py-3.5 rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 shadow-md mt-2"
                >
                  <span>Submit Pre-Reservation & Request Call</span>
                  <ChevronRight className="w-4 h-4 text-[#dfad42]" />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-6 gap-5 animate-in fade-in zoom-in-95 duration-400">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-sm border-2 border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Appointment Confirmed</span>
                  <h3 className="text-xl font-bold text-stone-950 font-sans tracking-tight">Escrow Reserved & Saved</h3>
                  <p className="text-xs text-stone-500 leading-relaxed font-normal max-w-md">
                    Thank you, <strong className="text-stone-900">{bookingName}</strong>. Your priority reservation for <strong className="text-stone-950">"{selectedUnitObj.name}"</strong> has been successfully broadcast to <strong className="text-stone-955">{agentName}</strong>.
                  </p>
                </div>

                {/* Simulated notarized ticket */}
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 w-full max-w-sm text-left flex flex-col gap-2 font-mono text-[11px] text-stone-700">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-stone-400">BOOKING REF ID:</span>
                    <span className="font-extrabold text-stone-900 uppercase">AHS-{Math.floor(Math.random() * 900000 + 100000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">CLIENT EMAIL:</span>
                    <span className="font-semibold text-stone-900">{bookingEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">MOBILE LINE:</span>
                    <span className="font-semibold text-stone-900">{bookingPhone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">PRODUCT SCHEME:</span>
                    <span className="font-semibold text-stone-900">{extras.scheme}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">RAJUK STATUS:</span>
                    <span className="text-emerald-700 font-extrabold uppercase">AUTO-QUEUED</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full max-w-xs mt-1">
                  <button
                    onClick={() => {
                      setBookingSubmitted(false);
                      setBookingName('');
                      setBookingEmail('');
                      setBookingPhone('');
                    }}
                    className="w-full bg-[#1e2a4a] text-white py-2.5 rounded-full text-xs font-bold hover:bg-stone-900 transition-all cursor-pointer"
                  >
                    Register New Booking Seat
                  </button>
                  <button
                    onClick={() => {
                      setActiveProject(null);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer"
                  >
                    Return to Catalog Grid
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

      </div>
    );
  }

 // Otherwise, render the main project catalog grid
  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto py-4 select-none">

      {/* DEVELOPMENT SCHEMES MASTER TITLE HEADER */}
      <div className="text-left mb-2 animate-in fade-in duration-300">
        <span className="text-xs font-extrabold text-[#c5a257] tracking-widest uppercase block mb-1">DEVELOPMENT SCHEMES</span>
        <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight font-sans">Investment Projects & Townships</h2>
        <p className="text-sm text-stone-500 max-w-2xl mt-1">
          AHS Properties & Development Ltd. represents premium developments in Bangladesh. Explore pre-construction apartments and high-yield residential portfolios in Jolshiri Abashon and Dhaka.
        </p>
      </div>

      {/* STATISTICS SUB-BAR */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm animate-in fade-in duration-300">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {/* Total Listings */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-stone-900">71</span>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Total Listings</span>
          </div>
          <div className="hidden md:block w-[1px] h-8 bg-stone-200" />

          {/* For Sale */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xl font-bold text-stone-900">70</span>
            <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">For Sale</span>
          </div>

          {/* For Rent */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-xl font-bold text-stone-900">1</span>
            <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">For Rent</span>
          </div>
        </div>

        <div className="text-[11px] font-bold text-stone-400 uppercase tracking-widest flex items-center gap-1.5 bg-stone-50 px-3.5 py-1.5 rounded-lg border border-stone-100">
          <Building2 className="w-3.5 h-3.5 text-stone-400" />
          <span>EDB Scheme Approved Real Estate</span>
        </div>
      </div>

      {/* SEARCH AND FILTER COCKPIT */}
      <div className="bg-white border border-stone-200/80 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Text input search */}
          <div className="col-span-1 md:col-span-6 flex flex-col gap-1.5">
            <label className="text-xs font-bold text-stone-600 uppercase tracking-wider pl-1 font-sans">
              Search Developments & Schemes
            </label>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by development title or region (e.g. Tamarin, Pereybere)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50/20 text-sm focus:outline-none focus:border-stone-400 transition-all font-medium text-stone-800"
              />
            </div>
          </div>

          {/* Scheme Status filter */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-1.5">
            <label className="text-xs font-bold text-stone-600 uppercase tracking-wider pl-1 font-sans">
              Investment Status
            </label>
            <div className="relative">
              <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:border-stone-400 transition-all font-medium text-stone-800 appearance-none cursor-pointer"
              >
                <option value="All">All Investment Types</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Pre-Launch">Pre-Launch Marketing</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                ▼
              </div>
            </div>
          </div>

          {/* Location filter */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-1.5 font-sans">
            <label className="text-xs font-bold text-stone-600 uppercase tracking-wider pl-1">
              Select Location
            </label>
            <div className="relative">
              <Compass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />

              <select
                value={selectedCoast}
                onChange={(e) => setSelectedCoast(e.target.value)}
                aria-label="Filter locations by region"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:border-stone-400 transition-all font-medium text-stone-800 appearance-none cursor-pointer"
              >
                <option value="All">All Locations</option>
                <option value="North">North</option>
                <option value="West">West</option>
                <option value="East">East</option>
                <option value="South">South</option>
              </select>

              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-stone-400">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reset block */}
        {(searchQuery || selectedCoast !== 'All' || selectedStatus !== 'All') && (
          <div className="flex justify-end">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCoast('All');
                setSelectedStatus('All');
              }}
              className="text-xs font-bold text-[#c5a257] hover:text-[#b08e45] underline underline-offset-2 transition-colors"
            >
              Clear Search Filters
            </button>
          </div>
        )}
      </div>

      {/* GRID DECK LAYOUT */}
      {filteredProjects.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 animate-in fade-in-50 duration-300">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => {
              const isSaved = savedProjects.includes(proj.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
                  whileHover={{ y: -8, scale: 1.015, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
                  key={proj.id}
                  onClick={() => {
                    setActiveProject(proj);
                    setSelectedUnitIndex(0);
                    window.scrollTo({ top: 400, behavior: 'instant' });
                  }}
                  className="group relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden bg-stone-950 border border-stone-800 flex flex-col justify-end p-6 md:p-8 shadow-xl cursor-pointer hover:border-[#c5a257]/45"
                >
                  {/* Background Unsplash Seascape image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-60 scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 to-transparent" />
                  </div>

                  {/* Top Corner Labels info */}
                  <div className="absolute top-6 left-6 right-6 z-10 flex justify-between items-center select-none">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#dfad42] bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-[#dfad42]/20 w-fit">
                        {proj.type}
                      </span>
                    </div>

                    <span className="flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest text-[#4ade80] bg-black/40 backdrop-blur-md border border-[#4ade80]/30 px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                      {proj.availableUnits} Available Units
                    </span>
                  </div>

                  {/* Project Body details */}
                  <div className="relative z-10 flex flex-col gap-4 text-left">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-extrabold text-[#c5a257] uppercase tracking-widest flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#c5a257] fill-[#c5a257]/20" />
                        {proj.status}
                      </span>

                      <h3 className="text-3xl md:text-4xl font-extrabold font-sans text-white tracking-tight leading-none group-hover:text-[#dfad42] transition-colors">
                        {proj.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-stone-300 text-xs font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        <span>{proj.location}</span>
                      </div>

                      <p className="text-xs text-stone-200/80 leading-relaxed font-normal line-clamp-2 mt-1">
                        {proj.description}
                      </p>
                    </div>

                    {/* Horizontal parameters bar */}
                    <div className="grid grid-cols-2 gap-4 border-t border-white/12 pt-4 mt-2 text-white/90">
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Total Units</span>
                        <span className="text-sm font-extrabold mt-0.5 font-mono">{proj.totalUnits} Units</span>
                      </div>

                      <div className="flex flex-col text-left">
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Available</span>
                        <span className="text-sm font-extrabold text-emerald-400 mt-0.5 font-mono">{proj.percentAvailable}%</span>
                      </div>
                    </div>

                    {/* Custom progress loading bar */}
                    <div className="w-full h-1 bg-stone-800 rounded-full overflow-hidden mt-1 select-none">
                      <div
                        className="bg-gradient-to-r from-[#dfad42] to-emerald-400 h-full rounded-full"
                        style={{ width: `${proj.percentAvailable}%` }}
                      />
                    </div>

                    {/* Buttons line */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        className="bg-[#c5a257] group-hover:bg-[#dfad42] text-stone-950 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={(e) => toggleSave(proj.id, e)}
                        className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border transition-all cursor-pointer ${isSaved
                          ? 'bg-rose-500/10 text-rose-400 border-rose-500/35'
                          : 'bg-white/10 text-stone-200 border-white/20 hover:bg-white/20'
                          }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : 'text-stone-300'}`} />
                        <span>{isSaved ? 'Saved' : 'Save'}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="bg-white border border-dashed border-stone-300 rounded-3xl p-12 text-center flex flex-col items-center justify-center select-none font-sans">
          <HelpCircle className="w-10 h-10 text-stone-400 mb-3" />
          <h4 className="font-extrabold text-[#111827] text-sm">No Development Projects Found</h4>
          <p className="text-xs text-stone-500 mt-1 max-w-sm">
            We currently don't have ongoing construction or pre-launch real estate matching your current coastal filter tags.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCoast('All');
              setSelectedStatus('All');
            }}
            className="mt-4 bg-[#1e2a4a] hover:bg-[#151c33] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-sm transition-colors text-center"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* BENEFITS SECTOR TO ENRICH PORTAL AT BOTTOM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-[#fafaf9] border rounded-2xl p-5 flex gap-4 items-start text-left">
          <div className="w-10 h-10 rounded-full bg-[#104a32]/10 flex items-center justify-center text-xl shrink-0 text-[#104a32]">
            🌴
          </div>
          <div>
            <h4 className="text-xs font-black uppercase text-stone-900 tracking-wider">Permanent Residency Support</h4>
            <p className="text-[11px] text-stone-500 leading-relaxed mt-1">
              EDB projects starting above $375,000 guarantee fast-track status for families.
            </p>
          </div>
        </div>

        <div className="bg-[#fafaf9] border rounded-2xl p-5 flex gap-4 items-start text-left">
          <div className="w-10 h-10 rounded-full bg-[#1e2a4a]/10 flex items-center justify-center text-xl shrink-0 text-[#1e2a4a]">
            📈
          </div>
          <div>
            <h4 className="text-xs font-black uppercase text-stone-900 tracking-wider">Strong Rental Yields</h4>
            <p className="text-[11px] text-stone-500 leading-relaxed mt-1">
              Fully-managed short let programs delivering 6.5% - 9% annual net dividend payouts.
            </p>
          </div>
        </div>

        <div className="bg-[#fafaf9] border rounded-2xl p-5 flex gap-4 items-start text-left">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-xl shrink-0 text-amber-600">
            🔒
          </div>
          <div>
            <h4 className="text-xs font-black uppercase text-stone-900 tracking-wider">Safe Escrow Accounts</h4>
            <p className="text-[11px] text-stone-500 leading-relaxed mt-1">
              Protected stage payments verified by certified banking escrow and registered property deeds.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}