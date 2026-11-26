import React, { useState } from 'react';
import { Sparkles, Maximize2, Compass } from 'lucide-react';

const CONTEXT_SPACES = [
  {
    id: 'copenhagen',
    title: 'Residence Kastrup · Northern Sound',
    architecture: 'Brutalist Board-Formed Concrete Residence',
    object: 'MONO 001 Lounge in Aniline Leather',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    caption: 'Low afternoon daylight casting linear shadows across cast bronze pedestal'
  },
  {
    id: 'kamakura',
    title: 'Atelier Kamakura · Kanagawa',
    architecture: 'Cedar Post-and-Beam Pavilion',
    object: 'MONO 004 Table in Solid Black Walnut',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    caption: 'Cantilevered walnut monolith framing private raked gravel garden'
  },
  {
    id: 'milan',
    title: 'Palazzo Gallarati · Brera',
    architecture: 'Restored 18th Century Frescoed Salotto',
    object: 'MONO 002 Accent Chair & MONO 005 Bench',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    caption: 'Minimal sculptural volume contrasting historic Venetian terrazzo floors'
  }
];

export const ObjectsInContext = ({ sectionData }) => {
  const [activeSpace, setActiveSpace] = useState(CONTEXT_SPACES[0]);

  return (
    <section 
      id="context"
      className="w-full py-28 sm:py-36 bg-[#F4F2EE] text-[#171717] border-b border-[#D8D4CE]"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A14F39] block mb-2">
              ARCHITECTURAL HARMONY
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#171717]">
              {sectionData?.title || 'Objects in Architectural Context.'}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#74716C] leading-relaxed">
              {sectionData?.description || 'MONO objects do not clutter space; they clarify it. Designed to coexist with raw concrete, rough-sawn cedar, and natural daylight.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {CONTEXT_SPACES.map((space) => (
              <button
                key={space.id}
                type="button"
                onClick={() => setActiveSpace(space)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
                  activeSpace.id === space.id
                    ? 'bg-[#171717] text-white border-[#171717] shadow-sm'
                    : 'bg-white text-[#74716C] border-[#D8D4CE] hover:text-[#171717]'
                }`}
              >
                {space.title.split('·')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Context Viewport */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-[#D8D4CE] bg-white shadow-xl group">
          <img
            src={activeSpace.image}
            alt={activeSpace.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
          />

          {/* Architectural Space Overlay Tag */}
          <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#A14F39] uppercase tracking-wider block">
                {activeSpace.architecture}
              </span>
              <h3 className="text-lg sm:text-xl font-bold mt-0.5">
                {activeSpace.title}
              </h3>
              <p className="text-xs text-[#A8A7A4] mt-1">
                {activeSpace.caption}
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 self-start sm:self-auto">
              {activeSpace.object}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ObjectsInContext;
