import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Check, Compass } from 'lucide-react';

const TABLE_STAGES = [
  {
    step: '01',
    title: 'Monolithic Timber Selection',
    desc: 'Two book-matched 65mm thick American walnut slabs selected from a single trunk for continuous grain flow across the entire 300cm tabletop.',
    metric: '65 mm Solid Slabs'
  },
  {
    step: '02',
    title: 'Undercut Chamfer Profile',
    desc: 'A calculated 45° reverse chamfer around the perimeter dissolves the perceived visual mass, making the 180kg table appear to float weightlessly.',
    metric: '45° Floating Edge'
  },
  {
    step: '03',
    title: 'Cast Bronze Tension Trestle',
    desc: 'Twin architectural bronze pedestals cast with hollow structural ribs, counter-balancing extreme cantilevers with zero deflection.',
    metric: '0.0 mm Deflection'
  },
  {
    step: '04',
    title: 'Hand-Rubbed Organic Oil',
    desc: 'Seven successive coats of organic cold-pressed walnut oil and carnauba wax penetrate deep into the cellular structure, creating water repellency.',
    metric: '7 Natural Coats'
  },
  {
    step: '05',
    title: 'Ten-Guest Spatial Capacity',
    desc: '300 × 110 cm surface effortlessly hosts 10 seated guests with expansive elbow room and unrestricted leg clearance on all sides.',
    metric: '10 Guest Capacity'
  }
];

export const TableStudy = ({ sectionData, product }) => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section 
      id="table_study"
      className="w-full py-28 sm:py-36 bg-white text-[#171717] border-b border-[#D8D4CE]"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F2EE] border border-[#D8D4CE] text-[11px] font-mono uppercase tracking-widest text-[#A14F39] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>OBJECT STUDY NO. 004</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#171717]">
            {sectionData?.title || 'MONO 004: The Table as Gathering Monolith.'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#74716C] leading-relaxed">
            {sectionData?.description || 'A 3-meter cantilevered solid walnut dining table engineered to anchor architectural living spaces for centuries.'}
          </p>
        </div>

        {/* 5-Stage Interactive Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#D8D4CE] bg-[#F4F2EE] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80"
              alt="MONO 004 Table Study"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#D8D4CE] text-xs font-mono font-bold text-[#A14F39]">
                Stage {TABLE_STAGES[activeStage].step}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono">
                {TABLE_STAGES[activeStage].metric}
              </span>
            </div>
          </div>

          {/* 5 Scroll / Click Stages (Right) */}
          <div className="lg:col-span-5 space-y-3">
            {TABLE_STAGES.map((stg, sIdx) => {
              const isActive = activeStage === sIdx;
              return (
                <div
                  key={stg.step}
                  onClick={() => setActiveStage(sIdx)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isActive
                      ? 'bg-[#F4F2EE] border-[#A14F39] shadow-sm ring-1 ring-[#A14F39]/20'
                      : 'bg-white border-[#D8D4CE] hover:border-[#171717]/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#A14F39]">
                      Stage {stg.step}
                    </span>
                    <span className="text-xs font-mono text-[#74716C]">
                      {stg.metric}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#171717] mt-1">
                    {stg.title}
                  </h4>
                  {isActive && (
                    <p className="text-xs text-[#74716C] mt-1.5 leading-relaxed">
                      {stg.desc}
                    </p>
                  )}
                </div>
              );
            })}

            <div className="pt-2">
              <Link
                to="/products/mono-004-dining-table"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#A14F39] hover:underline"
              >
                <span>Full Architectural Dossier & Dimensions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TableStudy;
