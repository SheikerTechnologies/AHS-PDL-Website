
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: "🏠",
      title: "Premium Residential Plots",
      desc: "Carefully planned residential sectors with modern amenities and beautiful surroundings.",
      features: ["100% RAJUK Approved", "Clear Title", "Flexible Payment Plans"]
    },
    {
      icon: "🌳",
      title: "Master Planned Community",
      desc: "World-class infrastructure including roads, parks, lakes, and utility services.",
      features: ["Wide Roads", "Green Spaces", "Water Bodies", "Underground Utilities"]
    },
    {
      icon: "🏗️",
      title: "Infrastructure Development",
      desc: "Complete development of internal roads, drainage, electricity & water supply.",
      features: ["Paved Roads", "Electricity", "Water Supply", "Drainage System"]
    },
    {
      icon: "🏛️",
      title: "Community Facilities",
      desc: "Schools, mosques, hospitals, shopping centers and recreational spaces planned.",
      features: ["Educational Institutes", "Religious Facilities", "Healthcare", "Shopping Areas"]
    },
    {
      icon: "📍",
      title: "Sector-wise Planning",
      desc: "19 beautifully designed sectors with unique characteristics and plot layouts.",
      features: ["Lake View Sectors", "Park Facing", "Corner Plots", "Premium Zones"]
    },
    {
      icon: "🤝",
      title: "End-to-End Support",
      desc: "From plot selection to registration and post-sale support.",
      features: ["Site Visits", "Legal Assistance", "Documentation", "After Sales Service"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] pt-24 pb-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:50px_50px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full border mb-6">
            <span className="text-[#b84822]">✦</span>
            <span className="uppercase tracking-[3px] font-medium text-sm">AHS Properties</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-stone-900 tracking-tighter">
            Our Services
          </h1>
          <p className="mt-6 text-2xl text-stone-600 max-w-2xl mx-auto">
            Building dreams in Jolshiri Abashon with world-class planning and execution
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl border border-stone-100 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl mb-8 transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-3xl font-semibold text-stone-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                {service.desc}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <span className="text-[#b84822]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-3xl p-12 md:p-16 mb-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tight text-stone-900 mb-8">
                Why Jolshiri Abashon?
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#b84822]/10 flex items-center justify-center text-2xl flex-shrink-0">🏆</div>
                  <div>
                    <h4 className="font-semibold text-xl mb-2">RAJUK Approved</h4>
                    <p className="text-stone-600">Government approved master plan ensuring legal security and quality standards.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#b84822]/10 flex items-center justify-center text-2xl flex-shrink-0">🌊</div>
                  <div>
                    <h4 className="font-semibold text-xl mb-2">Scenic &amp; Sustainable</h4>
                    <p className="text-stone-600">Thoughtfully designed around natural lakes and green spaces.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#b84822]/10 flex items-center justify-center text-2xl flex-shrink-0">🔒</div>
                  <div>
                    <h4 className="font-semibold text-xl mb-2">Secure Investment</h4>
                    <p className="text-stone-600">Clear land title and professional development by AHS Properties.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Teaser */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border-8 border-[#8b1d1d] shadow-xl">
                <Image
                  src="/attachments/image.png"
                  alt="Certificate of Incorporation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
                <p className="font-semibold">Officially Incorporated</p>
                <p className="text-sm text-stone-600 mt-1">Registrar of Joint Stock Companies &amp; Firms</p>
                <Link 
                  href="/contents"
                  className="mt-4 inline-block text-[#b84822] hover:underline font-medium"
                >
                  View Certificate →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-stone-900 to-[#1e2a4a] text-white rounded-3xl py-20 px-8">
          <h2 className="text-5xl font-bold mb-6">Ready to Own Your Dream Plot?</h2>
          <p className="text-xl text-stone-300 mb-10 max-w-xl mx-auto">
            Book your site visit today and explore the most promising residential project in Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="#contact"
              className="inline-block bg-[#b84822] hover:bg-[#a03d1b] px-12 py-5 rounded-2xl text-xl font-semibold transition-all"
            >
              Schedule Site Visit
            </Link>
            <Link
              href="/sectors"
              className="inline-block border border-white/50 hover:bg-white/10 px-12 py-5 rounded-2xl text-xl font-semibold transition-all"
            >
              Explore All Sectors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}