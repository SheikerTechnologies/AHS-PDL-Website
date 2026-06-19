/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Trophy, 
  MapPin, 
  DollarSign, 
  Clock, 
  Heart, 
  TrendingUp, 
  ArrowUpRight,
  Award,
  GraduationCap,
  Globe,
  Building2,
  ChevronRight
} from 'lucide-react';
import AHSLogo from './AHSLogo';

interface AboutPageProps {
  onInquireClick: () => void;
}

export default function AboutPage({ onInquireClick }: AboutPageProps) {
  // Stats block data
  const stats = [
    { value: '30+', label: 'Years in Business' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '100+', label: 'Satisfied Clients' },
    { value: '50+', label: 'Properties Sold' },
  ];

  // What sets us apart criteria
  const benefits = [
    {
      icon: Trophy,
      title: 'Superior Quality',
      desc: 'We deliver high-quality builds with attention to every detail, ensuring lasting value and comfort for our clients.',
    },
    {
      icon: MapPin,
      title: 'Strategic Locations',
      desc: 'Our properties are situated in prime areas across Bangladesh, including premium sectors of Jolshiri Abashon and key Dhaka districts.',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      desc: 'We offer excellent value with transparent pricing and flexible payment options to make your dream property accessible.',
    },
    {
      icon: Clock,
      title: 'Decades of Experience',
      desc: 'Backed by three generations of property development expertise, we understand the Bangladesh real estate market inside and out.',
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      desc: 'Our dedicated team supports you through every step of your property journey, from initial inquiry to after-sales care.',
    },
    {
      icon: TrendingUp,
      title: 'Investment Opportunities',
      desc: 'We provide comprehensive property management services to help you maximize returns on your real estate investments.',
    },
  ];

  // Where we build regions
  const locations = [
    { name: 'Jolshiri Sector 16', subtitle: 'Premium smart township', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80' },
    { name: 'Dhaka Cantonment', subtitle: 'Prestigious secure living', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80' },
    { name: 'Jolshiri Sector 15', subtitle: 'Scenic lakeside sanctuary', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80' },
    { name: 'VIP Road, Nayapaltan', subtitle: 'Central business corridor', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bashundhara R/A', subtitle: 'Modern residential sector', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80' },
    { name: 'Gulshan Enclave', subtitle: 'Premium diplomat zone', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="w-full bg-[#fafaf9] pt-24 overflow-hidden selection:bg-[#1e2a4a] selection:text-white">
      
      {/* SECTION 1: HERO EXQUISITE HEADER */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.02, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80"
              alt="AHS Catalog and blueprint luxury presentation"
              fill
              className="object-cover"
              preload
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/65 to-stone-950/90" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fafaf9] to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col gap-4 text-white select-none">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#dfad42]"
          >
            Who We Are
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl font-extrabold font-sans tracking-tight"
          >
            Building Trust,<br className="hidden sm:inline" /> Delivering Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-lg text-stone-200 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Founded on the principles of integrity and quality craftsmanship, AHS Properties & Development Ltd. is committed to creating living and working spaces that stand the test of time.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: BANGLADESH PROPERTY EXPERTS */}
      <section className="w-full py-20 bg-white border-b border-stone-100">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight tracking-tight">
              Bangladesh Property Leaders
            </h2>
            <div className="flex flex-col gap-5 text-sm md:text-base text-stone-600 leading-relaxed font-normal">
              <p>
                AHS Properties & Development Ltd. is a premier real estate development company in Bangladesh, specializing in the construction and sale of apartment blocks, luxury duplexes, and residential properties tailored for modern lifestyles. Founded with a distinguished legacy of property developers with over 30 years of experience, we have successfully completed and delivered high-quality architectural spaces across Dhaka.
              </p>
              <p>
                We focus on strategic locations (centering much of our premier portfolio directly in the revolutionary Jolshiri Abashon smart city township), competitive pricing, and exceptional build quality. Whether you&rsquo;re looking to invest in modern apartments, secure residential properties, or explore high-yield commercial spaces, AHS provides expert guidance and uncompromised fiduciary representation in finding the perfect property, whether for secure family living or a profitable investment.
              </p>
            </div>
          </motion.div>

          {/* Right Column Seascape with Overlapping AHS Logo Badge card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[32px] overflow-hidden bg-stone-100 shadow-xl group border border-stone-200/40">
              <Image 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                alt="Beautiful tropical mountain seaside"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />

              {/* OVERLAPPING LOGO BLOCK MATCHING THE ALLYS IMAGE SPECIFICATION */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-stone-200/50 w-24 h-24 flex flex-col items-center justify-center select-none">
                <AHSLogo type="icon" iconSize={44} />
                <span className="font-sans font-black text-[9px] tracking-widest text-[#b84822] uppercase mt-1">AHS</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: WHAT SETS US APART */}
      <section className="w-full py-20 bg-stone-50/50 border-b border-stone-150">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col gap-12">
          
          <div className="max-w-2xl mx-auto flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
              What Sets Us Apart
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed font-normal">
              Our commitment to excellence drives everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <motion.div 
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.01, boxShadow: "0 15px 35px rgba(0,0,0,0.04)" }}
                  className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col text-left justify-start gap-4 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#b84822]/10 flex items-center justify-center text-[#b84822] shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-bold text-stone-900 tracking-tight">
                      {b.title}
                    </h3>
                    <p className="text-xs md:text-sm text-stone-500 leading-relaxed font-normal">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: MEET OUR LEADERSHIP */}
      <section className="w-full py-24 bg-white border-b border-stone-100 font-sans">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-16">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-[10px] font-extrabold text-[#dfad42] tracking-[0.25em] uppercase">
              Leadership & Governance
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              A Legacy of Trust and Vision
            </h2>
            <div className="w-12 h-1 bg-[#dfad42] mx-auto rounded-full mt-1" />
            <p className="text-sm md:text-base text-stone-500 leading-relaxed font-normal mt-2">
              Led by distinguished national figures whose careers embody discipline, integrity, and visionary leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* LEADER 1: LT. GEN. SABBIR AHMED */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="bg-stone-50/75 hover:bg-stone-50 rounded-[40px] border border-stone-200/80 shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-6">
                {/* Header portion */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#dfad42]/30 shadow-md">
                    <Image 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80"
                      alt="Lt. Gen. Sabbir Ahmed"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-extrabold text-[#dfad42] tracking-wider uppercase">
                      CHAIRMAN
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-stone-900 tracking-tight mt-0.5">
                      Lt. Gen. Sabbir Ahmed <span className="text-sm text-stone-500 font-bold font-mono">(Retd.)</span>
                    </h3>
                    <p className="text-xs text-stone-500 font-semibold tracking-wide flex items-center gap-1.5 mt-1.5">
                      <Building2 className="w-3.5 h-3.5 text-stone-400" />
                      <span>AHS Properties & Development Ltd. | Sun Solaris Limited</span>
                    </p>
                    {/* Post-nominal Honors Badges */}
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {['SBP', 'OSP', 'SGP', 'ndc', 'psc'].map((medal) => (
                        <span key={medal} className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-stone-200 text-stone-700 font-mono tracking-wider">
                          {medal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-stone-250/50" />

                <div className="flex flex-col text-left gap-4">
                  <p className="text-xs md:text-sm text-stone-600 font-medium leading-relaxed">
                    A distinguished Bangladesh Army officer with 35 years of illustrious service. Served as Chief of General Staff, Bangladesh Army — recognized for exemplary leadership, integrity, and international peacekeeping contributions.
                  </p>

                  {/* Bullet Lists */}
                  <div className="flex flex-col gap-3.5 mt-2 bg-white/70 rounded-2xl p-4 border border-stone-200/40">
                    <div className="flex gap-3 items-start">
                      <GraduationCap className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1 text-left">
                        <span className="text-[10px] font-extrabold text-stone-400 uppercase tracking-widest leading-none">Academia & Achievements</span>
                        <ul className="list-none flex flex-col gap-1.5 mt-1">
                          <li className="text-[11px] text-stone-600 font-medium leading-normal flex items-start gap-1.5">
                            <ChevronRight className="w-3 h-3 text-[#dfad42] shrink-0 mt-0.5" />
                            <span>Sword of Honor & Academic Gold Medal — Bangladesh Military Academy</span>
                          </li>
                          <li className="text-[11px] text-stone-600 font-medium leading-normal flex items-start gap-1.5">
                            <ChevronRight className="w-3 h-3 text-[#dfad42] shrink-0 mt-0.5" />
                            <span>Master of Defence Studies — National University of Bangladesh (1st Class)</span>
                          </li>
                          <li className="text-[11px] text-stone-600 font-medium leading-normal flex items-start gap-1.5">
                            <ChevronRight className="w-3 h-3 text-[#dfad42] shrink-0 mt-0.5" />
                            <span>Master of Defence & Strategic Studies — NDU, Pakistan (CGPA 3.5/4)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start border-t border-stone-100 pt-3">
                      <Globe className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1 text-left">
                        <span className="text-[10px] font-extrabold text-stone-400 uppercase tracking-widest leading-none">Global Experience</span>
                        <p className="text-[11px] text-stone-600 font-medium leading-relaxed mt-1">
                          International military, state, and academic delegations representing Bangladesh across the USA, UK, China, France, Germany, Japan & 15+ countries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* LEADER 2: DIG (RTD.) MD. ABU KALAM SIDDIQUE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-stone-50/75 hover:bg-stone-50 rounded-[40px] border border-stone-200/80 shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-6">
                {/* Header portion */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#dfad42]/30 shadow-md">
                    <Image 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80"
                      alt="DIG Md. Abu Kalam Siddique"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-extrabold text-[#dfad42] tracking-wider uppercase">
                      MANAGING DIRECTOR
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-stone-900 tracking-tight mt-0.5">
                      DIG <span className="text-sm text-stone-500 font-bold font-mono">(Rtd.)</span> Md. Abu Kalam Siddique
                    </h3>
                    <p className="text-xs text-stone-500 font-semibold tracking-wide flex items-center gap-1.5 mt-1.5">
                      <Building2 className="w-3.5 h-3.5 text-stone-400" />
                      <span>AHS Properties & Development Ltd. | Sun Solaris Limited</span>
                    </p>
                    {/* Post-nominal Honors Badges */}
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {['UN Medal — Kosovo', 'Darfur Mission'].map((medal) => (
                        <span key={medal} className="text-[9px] font-extrabold px-2.5 py-0.5 rounded bg-stone-200 text-stone-700 tracking-wider">
                          📌 {medal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-stone-250/50" />

                <div className="flex flex-col text-left gap-4">
                  <p className="text-xs md:text-sm text-stone-600 font-medium leading-relaxed">
                    Distinguished Police officer with 29 years of exemplary service in Bangladesh Police. Served as Police Commissioner Rajshahi, DIG Industrial Police, and Chief Investigator Monitor in UN Kosovo Mission and Liaison Officer in Darfur Mission, Sudan.
                  </p>

                  {/* Bullet Lists */}
                  <div className="flex flex-col gap-3.5 mt-2 bg-white/70 rounded-2xl p-4 border border-stone-200/40">
                    <div className="flex gap-3 items-start">
                      <GraduationCap className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1 text-left">
                        <span className="text-[10px] font-extrabold text-stone-400 uppercase tracking-widest leading-none">Education & Training</span>
                        <ul className="list-none flex flex-col gap-1.5 mt-1">
                          <li className="text-[11px] text-stone-600 font-medium leading-normal flex items-start gap-1.5">
                            <ChevronRight className="w-3 h-3 text-[#dfad42] shrink-0 mt-0.5" />
                            <span>BSc (Hons.) & MSc in Botany — Dhaka University</span>
                          </li>
                          <li className="text-[11px] text-stone-600 font-medium leading-normal flex items-start gap-1.5">
                            <ChevronRight className="w-3 h-3 text-[#dfad42] shrink-0 mt-0.5" />
                            <span>MBA — IBA, Rajshahi University</span>
                          </li>
                          <li className="text-[11px] text-stone-600 font-medium leading-normal flex items-start gap-1.5">
                            <ChevronRight className="w-3 h-3 text-[#dfad42] shrink-0 mt-0.5" />
                            <span>Malaysia Royal College, Interpol Lyon (France), China University</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start border-t border-stone-100 pt-3">
                      <Award className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1 text-left">
                        <span className="text-[10px] font-extrabold text-stone-400 uppercase tracking-widest leading-none">Social Impact & Philanthropy</span>
                        <p className="text-[11px] text-stone-600 font-medium leading-relaxed mt-1">
                          General Secretary — Rangpur Bivag Somity. Passionate philanthropist and community leader guiding nation-building initiatives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 5: WHERE WE BUILD CITIES GRID */}
      <section className="w-full py-20 bg-stone-50/50 border-b border-stone-100">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col gap-12">
          
          <div className="max-w-2xl mx-auto flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
              Where We Build
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed font-normal">
              Explore our properties across Bangladesh’s most desirable locations
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, idx) => (
              <motion.div 
                key={loc.name}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6, boxShadow: "0 15px 35px rgba(0,0,0,0.06)" }}
                className="group bg-white rounded-3xl border border-stone-200 overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                {/* Photo aspect 4/3 */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image 
                    src={loc.img} 
                    alt={loc.name} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 to-transparent pointer-events-none" />
                </div>

                {/* White Details bar underneath */}
                <div className="p-4 flex flex-col text-left gap-0.5 select-none bg-white">
                  <h4 className="text-sm md:text-base font-extrabold text-stone-900 group-hover:text-[#b84822] transition-colors leading-none tracking-tight">
                    {loc.name}
                  </h4>
                  <p className="text-[10px] md:text-xs text-stone-500 leading-none font-normal mt-1 border-t border-stone-50 pt-1.5 uppercase tracking-wider font-semibold">
                    {loc.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: NUMERSTICAL STATS BANNER */}
      <section className="w-full py-16 bg-white border-b border-stone-100">
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center">
            {stats.map((st, idx) => (
              <motion.div 
                key={st.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center text-center gap-1 border-r last:border-0 border-stone-200/60 h-20"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-[#b84822] font-mono leading-none tracking-tight">
                  {st.value}
                </span>
                <span className="text-[10px] md:text-xs text-stone-500 font-bold uppercase tracking-wider">
                  {st.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA INTEGRATOR */}
      <section className="w-full py-12 bg-[#fafaf9] select-none">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[40px] border border-stone-200/60 p-8 md:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-24 h-1.5 bg-[#dfad42] rounded-r-md" />

            {/* Left details */}
            <div className="md:col-span-7 flex flex-col text-left gap-5">
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-snug">
                Ready to Find<br />
                Your Perfect Property?
              </h2>
              <p className="text-xs md:text-sm text-stone-500 leading-relaxed font-normal max-w-sm">
                Let us help you discover your dream home or next key investment opportunity in Bangladesh.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <button
                  onClick={onInquireClick}
                  className="bg-[#104a32] hover:bg-[#0b3322] text-white text-xs font-extrabold px-6 py-3 rounded-full flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <span>View Properties</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#contact-broker-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact-broker-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-transparent hover:bg-stone-50 border border-[#104a32] text-[#104a32] text-xs font-extrabold px-6 py-3 rounded-full flex items-center justify-center transition-all cursor-pointer"
                >
                  ✉️ Contact Us
                </a>
              </div>
            </div>

            {/* Right geometric symbol */}
            <div className="md:col-span-5 h-56 flex items-center justify-center relative select-none">
              <div className="w-56 h-56 relative overflow-hidden bg-stone-50 rounded-2xl border border-stone-200/60 flex items-center justify-center shadow-lg p-4">
                <AHSLogo type="full" iconSize={65} textColor="dark" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
