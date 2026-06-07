// app/contents/page.tsx
export default function ContentsPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Jolshiri Abashon - Project Contents</h1>
        <p className="text-center text-stone-600 mb-12">Official Documents & Information</p>

        <div className="bg-white rounded-3xl p-10 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">📄 Important Documents</h2>
            <div className="space-y-4">
              <a href="/assets/maps/Jolshiri_Layout_Plan_by_RAJUK.pdf" target="_blank" 
                className="flex items-center gap-4 p-5 border rounded-2xl hover:bg-stone-50 transition-colors group">
                <span className="text-3xl">📋</span>
                <div>
                  <p className="font-medium">RAJUK Approved Layout Plan</p>
                  <p className="text-sm text-stone-500">Full Master Plan of Jolshiri Abashon</p>
                </div>
              </a>

              <a href="/assets/maps/JOLSHIRI_ABASHON_MAP.pdf" target="_blank" 
                className="flex items-center gap-4 p-5 border rounded-2xl hover:bg-stone-50 transition-colors group">
                <span className="text-3xl">🗺️</span>
                <div>
                  <p className="font-medium">Detailed Sector-wise Map</p>
                  <p className="text-sm text-stone-500">Including Sector 16 Plot Layout</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}