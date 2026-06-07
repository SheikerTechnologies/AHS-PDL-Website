// app/layout/page.tsx
import Link from 'next/link';

export default function JolshiriLayoutPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-stone-900">
            Jolshiri Abashon Layout Plan
          </h1>
          <p className="text-lg text-stone-600 mt-4">
            RAJUK Approved Master Plan & Detailed Sector Maps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Layout Plan */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl transition-all">
            <div className="h-72 bg-stone-100 relative overflow-hidden">
              <img 
                src="/assets/maps/jolshiri-main.jpg" 
                alt="Jolshiri Master Plan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="font-bold text-2xl mb-2">Overall Master Plan</h3>
              <p className="text-stone-600 mb-6">RAJUK Approved Full Layout Plan of Jolshiri Abashon</p>
              <a 
                href="/assets/maps/Jolshiri_Layout_Plan_by_RAJUK.pdf" 
                target="_blank"
                className="block w-full bg-[#1e2a4a] text-white text-center py-4 rounded-2xl font-semibold hover:bg-[#15213a] transition-colors"
              >
                View Full Layout Plan →
              </a>
            </div>
          </div>

          {/* Sector 16 */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl transition-all">
            <div className="h-72 bg-stone-100 relative overflow-hidden">
              <img 
                src="/assets/maps/sector-16.jpg" 
                alt="Sector 16"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="font-bold text-2xl mb-2">Sector 16 Map</h3>
              <p className="text-stone-600 mb-6">Detailed Plot Layout of Sector 16 (Your Project Area)</p>
              <a 
                href="/assets/maps/JOLSHIRI_ABASHON_MAP.pdf#page=2" 
                target="_blank"
                className="block w-full bg-[#1e2a4a] text-white text-center py-4 rounded-2xl font-semibold hover:bg-[#15213a] transition-colors"
              >
                Open Sector 16 Map →
              </a>
            </div>
          </div>

          {/* Site Map */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl transition-all">
            <div className="h-72 bg-stone-100 relative overflow-hidden">
              <img 
                src="/assets/maps/site-plan.jpg" 
                alt="Site Plan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="font-bold text-2xl mb-2">Project Site Map</h3>
              <p className="text-stone-600 mb-6">Complete Project Overview & Connectivity</p>
              <a 
                href="/assets/maps/JOLSHIRI_ABASHON_MAP.pdf" 
                target="_blank"
                className="block w-full bg-[#1e2a4a] text-white text-center py-4 rounded-2xl font-semibold hover:bg-[#15213a] transition-colors"
              >
                View Complete Site Plan →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}