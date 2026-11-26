import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ShieldCheck, Check } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export const MaterialsPage = () => {
  const { materials } = useCMS();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayMaterials = materials.length > 0 ? materials : [
    { id: 1, name: 'American Black Walnut', category: 'Timber', finish: 'Hand-Rubbed Matte Oil', texture_url: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80', description: 'Deep chocolate tone with tight, closed grain from sustainably managed Appalachian forestry.' },
    { id: 2, name: 'Tuscan Saddle Leather', category: 'Leather', finish: 'Vegetable Aniline', texture_url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80', description: '2.2mm full-grain bovine hide vegetable-tanned with mimosa and chestnut extracts.' },
    { id: 3, name: 'Architectural Cast Bronze', category: 'Metal', finish: 'Liver of Sulfur Patina', texture_url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80', description: 'Heavy, solid bronze poured into fine silica sand molds and sealed with microcrystalline wax.' },
    { id: 4, name: 'European White Oak', category: 'Timber', finish: 'Smoked Raw Chalk', texture_url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', description: 'Quarter-sawn German white oak with distinctive medullary ray flecks and subtle gray tones.' },
    { id: 5, name: 'Nordic Virgin Wool Bouclé', category: 'Fabric', finish: 'Unbleached Texturized Yarn', texture_url: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80', description: 'High-pile curled wool blend with exceptional tactile warmth and natural soil repellency.' },
    { id: 6, name: 'Cast Monolithic Concrete', category: 'Mineral', finish: 'Hand-Troweled Silicate Sealer', texture_url: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80', description: 'Ultra-high-performance concrete infused with micro-fibers for crack-free monolithic forms.' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F4F2EE] text-[#171717] pt-32 pb-24 border-b border-[#D8D4CE]">
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 pb-8 border-b border-[#D8D4CE]">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#A14F39] block mb-2">
            MATERIAL DOSSIER
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-[#171717]">
            Tactile Honesty.
          </h1>
          <p className="mt-3 text-base text-[#74716C]">
            We source exclusively permanent, noble materials that gain depth and tactile beauty with age.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayMaterials.map((mat) => (
            <div
              key={mat.id}
              className="rounded-3xl bg-white border border-[#D8D4CE] overflow-hidden flex flex-col justify-between shadow-sm"
            >
              <div className="aspect-[4/3] bg-[#F4F2EE] overflow-hidden">
                <img
                  src={mat.texture_url}
                  alt={mat.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A14F39] block mb-1">
                    {mat.category} · Finish: {mat.finish}
                  </span>
                  <h3 className="text-xl font-bold text-[#171717]">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-[#74716C] mt-3 leading-relaxed">
                    {mat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D8D4CE] flex items-center justify-between text-xs font-mono text-[#74716C]">
                  <span>Origin: Traceable</span>
                  <span className="text-emerald-700 font-semibold">100% Noble</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MaterialsPage;
