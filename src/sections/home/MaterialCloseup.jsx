import React, { useState } from 'react';
import { Sparkles, Eye, ShieldCheck, Check } from 'lucide-react';

const MACRO_MATERIALS = [
  {
    id: 'walnut',
    title: 'Solid American Black Walnut',
    origin: 'Pennsylvania Appalachian Old Growth',
    finish: 'Hardwax oil, matte 8% sheen',
    desc: 'Dense, tight-grained heartwood exhibiting deep chocolate hues with subtle violet undertones. Each veneer leaf is book-matched by master cabinetmakers.',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80',
    tag: 'FSC 100% Certified'
  },
  {
    id: 'leather',
    title: 'Tuscan Full-Grain Aniline Leather',
    origin: 'Santa Croce sull’Arno, Tuscany',
    finish: 'Unsealed vegetable tannage',
    desc: '2.2mm thick hide treated exclusively with chestnut bark and mimosa extracts. Develops an extraordinary patina over decades of personal use.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80',
    tag: 'Living Organic Patina'
  },
  {
    id: 'bronze',
    title: 'Lost-Wax Architectural Bronze',
    origin: 'Piedmont Fine Art Foundry',
    finish: 'Hand-rubbed sulfur liver patina',
    desc: 'Cast using ancient cire perdue method resulting in subtle micro-texture and thermal depth. Counter-weights the object for permanent floor anchoring.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
    tag: 'Hand-Cast Monolith'
  }
];

export const MaterialCloseup = ({ sectionData }) => {
  const [activeMat, setActiveMat] = useState(MACRO_MATERIALS[0]);

  return (
    <section 
      id="materials_macro"
      className="w-full py-28 sm:py-36 bg-[#F4F2EE] text-[#171717] border-b border-[#D8D4CE]"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8D4CE] text-[11px] font-mono uppercase tracking-widest text-[#A14F39] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#A14F39]" />
              <span>TACTILE HONESTY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#171717]">
              {sectionData?.title || 'Materials That Age With Grace.'}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#74716C] leading-relaxed">
              {sectionData?.description || 'We reject synthetic coatings, composite fillers, and faux textures. Every surface is authentic, tactile, and designed to gain character with time.'}
            </p>
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white border border-[#D8D4CE] shadow-sm self-start md:self-auto">
            {MACRO_MATERIALS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveMat(m)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeMat.id === m.id
                    ? 'bg-[#171717] text-white font-medium shadow-sm'
                    : 'text-[#74716C] hover:text-[#171717]'
                }`}
              >
                {m.title.split(' ')[1] || m.title}
              </button>
            ))}
          </div>
        </div>

        {/* Macro Display Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Macro Photograph */}
          <div className="lg:col-span-8 aspect-[16/10] rounded-3xl overflow-hidden border border-[#D8D4CE] bg-white relative shadow-sm group">
            <img
              src={activeMat.image}
              alt={activeMat.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono border border-white/10">
              <span>{activeMat.tag}</span>
            </div>
          </div>

          {/* Material Dossier Panel */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-[#D8D4CE] p-8 space-y-6 shadow-sm">
            <div>
              <span className="text-[11px] font-mono text-[#A14F39] uppercase tracking-wider block">
                Provenance: {activeMat.origin}
              </span>
              <h3 className="text-2xl font-bold text-[#171717] mt-1">
                {activeMat.title}
              </h3>
            </div>

            <p className="text-sm text-[#74716C] leading-relaxed">
              {activeMat.desc}
            </p>

            <div className="pt-4 border-t border-[#D8D4CE] space-y-3 text-xs font-mono">
              <div className="flex justify-between text-[#74716C]">
                <span>Surface Treatment:</span>
                <strong className="text-[#171717]">{activeMat.finish}</strong>
              </div>
              <div className="flex justify-between text-[#74716C]">
                <span>Wear Tolerance:</span>
                <strong className="text-emerald-700">Archival Grade</strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MaterialCloseup;
