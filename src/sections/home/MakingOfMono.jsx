import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

const CHAPTERS = [
  {
    step: '01',
    title: 'Hydraulic Steam-Bending',
    subtitle: 'Appalachian Old-Growth Veneers',
    desc: 'Eighteen layers of hand-selected American walnut veneer are saturated in 100°C steam, coated in urea-free adhesive, and pressed under 200 metric tons of hydraulic force inside custom CNC-cut steel dies.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    stat: '200 Tons Hydraulic Force'
  },
  {
    step: '02',
    title: '5-Axis Sub-Millimeter Carving',
    subtitle: 'Digital Precision to Hand-Rasped Edges',
    desc: 'Complex 3D organic chamfers are rough-cut on an aerospace 5-axis milling center to ±0.1mm tolerance, followed by four hours of meticulous hand-scraping using Japanese cabinetmaker planes.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    stat: '±0.1 mm Robotic Tolerance'
  },
  {
    step: '03',
    title: 'Tuscan Double-Needle Saddle Stitch',
    subtitle: 'Full-Grain 2.2mm Vegetable Hide',
    desc: 'Master leather artisans pierce the aniline hide using diamond-tipped awls, passing two needles simultaneously with waxed Irish linen thread. A seam technique impervious to mechanical unraveling.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80',
    stat: '100% Hand-Pierced Awl Work'
  },
  {
    step: '04',
    title: 'Lost-Wax Bronze Casting & Patination',
    subtitle: 'Piedmont Fine Art Foundry',
    desc: 'Cruciform bases are poured at 1,150°C into ceramic shell molds. After cooling, each monolith is hand-stippled with sulfur liver solution under direct flame to achieve a permanent, deep smoky patina.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
    stat: '1,150°C Molten Bronze Pour'
  }
];

export const MakingOfMono = ({ sectionData }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapter = CHAPTERS[activeChapter];

  return (
    <section 
      id="making"
      className="w-full py-28 sm:py-36 bg-[#F4F2EE] text-[#171717] border-b border-[#D8D4CE]"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#A14F39] block mb-2">
            ATELIER CRAFTSMANSHIP
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#171717]">
            {sectionData?.title || 'The Making of MONO: Four Disciplines.'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#74716C] leading-relaxed">
            {sectionData?.description || 'We unite aerospace 5-axis computer numerical control with centuries-old European cabinetmaking and fine art bronze foundry traditions.'}
          </p>
        </div>

        {/* 4 Interactive Chapters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Chapter Image Display (Left) */}
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#D8D4CE] bg-white shadow-xl">
            <img
              src={chapter.image}
              alt={chapter.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#D8D4CE] text-xs font-mono font-bold text-[#A14F39]">
                Chapter {chapter.step}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono">
                {chapter.stat}
              </span>
            </div>
          </div>

          {/* Stepper Selector (Right) */}
          <div className="lg:col-span-5 space-y-3">
            {CHAPTERS.map((ch, idx) => {
              const isSelected = activeChapter === idx;
              return (
                <div
                  key={ch.step}
                  onClick={() => setActiveChapter(idx)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-white border-[#A14F39] shadow-md ring-1 ring-[#A14F39]/20'
                      : 'bg-[#F4F2EE] border-[#D8D4CE] hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#A14F39]">
                      Chapter {ch.step}
                    </span>
                    <span className="text-xs font-mono text-[#74716C]">
                      {ch.stat}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#171717] mt-1">
                    {ch.title}
                  </h4>
                  {isSelected && (
                    <p className="text-xs text-[#74716C] mt-2 leading-relaxed">
                      {ch.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default MakingOfMono;
