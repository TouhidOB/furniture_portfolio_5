import React, { useState } from 'react';
import { Compass, Maximize2, ShieldCheck, Check } from 'lucide-react';

const ANNOTATIONS = [
  {
    id: 'backrest',
    title: 'Steam-Bent Shell Arc',
    dim: '88 cm Width · 18-Ply Walnut',
    desc: 'Formed under 200 tons of hydraulic pressure in steel molds, creating an enveloping curved envelope that cradles shoulders without rigid pressure points.',
    x: '38%',
    y: '28%'
  },
  {
    id: 'cushion',
    title: 'Contoured Saddle Leather Pan',
    dim: '41 cm Height · 52 kg/m³ Core',
    desc: 'High-resilience bio-foam topper enveloped in 2.2mm vegetable-tanned Tuscan aniline leather, hand-stretched with invisible double-stitch seamwork.',
    x: '52%',
    y: '54%'
  },
  {
    id: 'pedestal',
    title: 'Cruciform Cast Base',
    dim: '76 cm Span · 14.5 kg Counter-Weight',
    desc: 'Lost-wax cast architectural bronze with brushed hand-patinated finish and hidden 360° fluid-damped bearing.',
    x: '46%',
    y: '82%'
  }
];

export const SilhouetteStudy = ({ sectionData }) => {
  const [activeAnnotation, setActiveAnnotation] = useState(ANNOTATIONS[0]);

  return (
    <section 
      id="silhouette"
      className="w-full py-28 sm:py-36 bg-white text-[#171717] border-b border-[#D8D4CE]"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F2EE] border border-[#D8D4CE] text-[11px] font-mono uppercase tracking-widest text-[#A14F39] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>ARCHITECTURAL PROPORTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#171717]">
            {sectionData?.title || 'Silhouette Study: Form Follows Spine.'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#74716C] leading-relaxed">
            {sectionData?.description || 'Every millimeter of MONO 001 is derived from the human spinal profile in quiet contemplative repose.'}
          </p>
        </div>

        {/* Blueprint Visualization with Interactive Hotspot Pins */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Silhouette Canvas */}
          <div className="lg:col-span-7 relative aspect-[4/3] rounded-3xl bg-[#F4F2EE] border border-[#D8D4CE] overflow-hidden p-8 flex items-center justify-center">
            {/* Architectural Grid Lines Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Silhouette Photography */}
            <img
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80"
              alt="MONO 001 Silhouette Study"
              className="max-h-full max-w-full object-contain relative z-10 drop-shadow-xl"
            />

            {/* Interactive Dimension Pins */}
            {ANNOTATIONS.map((ann) => {
              const isSelected = ann.id === activeAnnotation.id;
              return (
                <button
                  key={ann.id}
                  type="button"
                  onClick={() => setActiveAnnotation(ann)}
                  style={{ top: ann.y, left: ann.x }}
                  className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-md transition-all ${
                    isSelected
                      ? 'bg-[#A14F39] text-white ring-4 ring-[#A14F39]/25 scale-110 shadow-lg'
                      : 'bg-white/80 border border-[#D8D4CE] text-[#171717] hover:bg-white hover:scale-105'
                  }`}
                  title={ann.title}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-current block" />
                </button>
              );
            })}
          </div>

          {/* Right: Dimension Specifications Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              {ANNOTATIONS.map((ann) => (
                <div
                  key={ann.id}
                  onClick={() => setActiveAnnotation(ann)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    activeAnnotation.id === ann.id
                      ? 'bg-[#F4F2EE] border-[#A14F39] shadow-sm'
                      : 'bg-white border-[#D8D4CE] hover:border-[#171717]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-[#171717]">
                      {ann.title}
                    </h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/5 text-[#74716C]">
                      {ann.dim}
                    </span>
                  </div>
                  <p className="text-xs text-[#74716C] mt-2 leading-relaxed">
                    {ann.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-[#171717] text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#A8A7A4] uppercase">Total Footprint</span>
                <strong className="block text-base font-bold font-mono mt-0.5">88W × 92D × 76H cm</strong>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-semibold bg-white/10 px-3 py-1 rounded-full">
                Golden Ratio (1.618)
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SilhouetteStudy;
