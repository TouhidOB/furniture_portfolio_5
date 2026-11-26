import React, { useState } from 'react';
import { Sparkles, Layers, ShieldCheck, Check } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const MaterialLibrary = ({ sectionData }) => {
  const { materials } = useCMS();
  const [selectedMat, setSelectedMat] = useState(materials[0] || null);

  const displayMaterials = materials.length > 0 ? materials : [
    { id: 1, name: 'American Black Walnut', category: 'Timber', finish: 'Hand-Rubbed Matte Oil', texture_url: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=600&q=80', description: 'Deep chocolate tone with tight, closed grain from sustainably managed Appalachian forestry.' },
    { id: 2, name: 'Tuscan Saddle Leather', category: 'Leather', finish: 'Vegetable Aniline', texture_url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80', description: '2.2mm full-grain bovine hide vegetable-tanned with mimosa and chestnut extracts.' },
    { id: 3, name: 'Architectural Cast Bronze', category: 'Metal', finish: 'Liver of Sulfur Patina', texture_url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80', description: 'Heavy, solid bronze poured into fine silica sand molds and sealed with microcrystalline wax.' },
    { id: 4, name: 'European White Oak', category: 'Timber', finish: 'Smoked Raw Chalk', texture_url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80', description: 'Quarter-sawn German white oak with distinctive medullary ray flecks and subtle gray tones.' },
    { id: 5, name: 'Nordic Virgin Wool Bouclé', category: 'Fabric', finish: 'Unbleached Texturized Yarn', texture_url: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=600&q=80', description: 'High-pile curled wool blend with exceptional tactile warmth and natural soil repellency.' },
    { id: 6, name: 'Cast Monolithic Concrete', category: 'Mineral', finish: 'Hand-Troweled Silicate Sealer', texture_url: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=600&q=80', description: 'Ultra-high-performance concrete infused with micro-fibers for crack-free monolithic forms.' },
  ];

  const current = selectedMat || displayMaterials[0];

  return (
    <section 
      id="materials"
      className="w-full py-28 sm:py-36 bg-[#F4F2EE] text-[#171717] border-b border-[#D8D4CE]"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8D4CE] text-[11px] font-mono uppercase tracking-widest text-[#A14F39] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>AUTHENTIC PALETTE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#171717]">
            {sectionData?.title || 'Tactile Archive: Six Noble Substances.'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#74716C] leading-relaxed">
            {sectionData?.description || 'Every object in the MONO collection is synthesized from six permanent materials chosen for their sensory depth, tactile warmth, and natural longevity.'}
          </p>
        </div>

        {/* 6 Material Swatch Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {displayMaterials.map((mat) => {
            const isSelected = current.id === mat.id;
            return (
              <div
                key={mat.id}
                onClick={() => setSelectedMat(mat)}
                className={`group rounded-2xl bg-white border p-3 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-[#A14F39] ring-2 ring-[#A14F39]/20 shadow-md scale-102'
                    : 'border-[#D8D4CE] hover:border-[#171717]/40'
                }`}
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-[#F4F2EE] mb-3 relative">
                  <img
                    src={mat.texture_url}
                    alt={mat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#A14F39] text-white flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
                <span className="text-[10px] font-mono text-[#A14F39] uppercase block truncate">
                  {mat.category}
                </span>
                <strong className="text-xs font-bold text-[#171717] block truncate mt-0.5">
                  {mat.name}
                </strong>
              </div>
            );
          })}
        </div>

        {/* Selected Material Deep Inspection Card */}
        <div className="rounded-3xl bg-white border border-[#D8D4CE] p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 aspect-[4/3] rounded-2xl overflow-hidden border border-[#D8D4CE] bg-[#F4F2EE]">
            <img
              src={current.texture_url}
              alt={current.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A14F39]">
              <span className="w-2 h-2 rounded-full bg-[#A14F39]" />
              <span>{current.category} · Finish: {current.finish}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#171717]">
              {current.name}
            </h3>
            <p className="text-sm sm:text-base text-[#74716C] leading-relaxed">
              {current.description}
            </p>
            <div className="pt-4 border-t border-[#D8D4CE] flex flex-wrap gap-6 text-xs font-mono text-[#74716C]">
              <span>Surface Sheen: <strong>Matte Satin</strong></span>
              <span>Maintenance: <strong>Beeswax Polish</strong></span>
              <span>Sustainability: <strong>100% Traceable</strong></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MaterialLibrary;
