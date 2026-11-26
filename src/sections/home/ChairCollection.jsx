import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, Check } from 'lucide-react';
import { useCompare } from '../../context/CompareContext';
import { useCMS } from '../../context/CMSContext';

export const ChairCollection = ({ sectionData }) => {
  const { products } = useCMS();
  const { addToCompare, isProductCompared } = useCompare();

  // Curate chair objects (MONO 001, 002, 003)
  const chairs = products.filter(p => p.category === 'Chairs' || p.slug?.includes('chair')).slice(0, 3);

  return (
    <section 
      id="chairs"
      className="w-full py-28 sm:py-36 bg-[#F4F2EE] text-[#171717] border-b border-[#D8D4CE]"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A14F39] block mb-2">
              SEATING TYPOLOGIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#171717]">
              {sectionData?.title || 'The Three Chair Geometries.'}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#74716C] leading-relaxed">
              {sectionData?.description || 'From deep reclined contemplation to active conversational dining. Three distinct anatomical postures unified by the same structural DNA.'}
            </p>
          </div>

          <Link
            to="/compare"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#D8D4CE] text-xs font-mono text-[#171717] hover:border-[#171717] shadow-sm transition-all self-start md:self-auto"
          >
            <Scale className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>Compare All 3 Chais in Studio</span>
          </Link>
        </div>

        {/* 3 Chair Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chairs.map((chair, idx) => {
            const isCompared = isProductCompared(chair.id);
            return (
              <div 
                key={chair.id}
                className="group rounded-3xl bg-white border border-[#D8D4CE] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Stage */}
                <div className="relative aspect-[4/3] bg-[#F4F2EE] p-8 flex items-center justify-center overflow-hidden">
                  <img
                    src={chair.primary_image || 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80'}
                    alt={chair.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#D8D4CE] text-[#171717]">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A14F39] block mb-1">
                      {chair.category} · Ref. {chair.sku || `MONO-00${idx + 1}`}
                    </span>
                    <h3 className="text-xl font-bold text-[#171717]">
                      {chair.name}
                    </h3>
                    <p className="text-xs text-[#74716C] mt-2 leading-relaxed">
                      {chair.short_description || 'Sculptural seating carved from solid sustainable timber with custom cast hardware.'}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#D8D4CE]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#74716C]">Edition Price:</span>
                      <strong className="text-base font-bold text-[#171717]">
                        ${chair.price?.toLocaleString()}
                      </strong>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/products/${chair.slug}`}
                        className="flex-1 py-2 rounded-full bg-[#171717] text-white text-xs font-medium text-center hover:bg-black transition-all"
                      >
                        Inspect 3D
                      </Link>
                      <button
                        type="button"
                        onClick={() => addToCompare(chair)}
                        className={`p-2 rounded-full border transition-all ${
                          isCompared
                            ? 'bg-[#A14F39] border-[#A14F39] text-white'
                            : 'border-[#D8D4CE] text-[#74716C] hover:text-[#171717] hover:border-[#171717]'
                        }`}
                        title={isCompared ? 'Remove from Compare' : 'Add to Compare'}
                      >
                        <Scale className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ChairCollection;
