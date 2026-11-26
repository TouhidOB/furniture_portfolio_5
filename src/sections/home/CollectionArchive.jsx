import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, Check, SlidersHorizontal } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { useCompare } from '../../context/CompareContext';

export const CollectionArchive = ({ sectionData }) => {
  const { products } = useCMS();
  const { addToCompare, isProductCompared } = useCompare();
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'CHAIRS', 'TABLES', 'BENCHES', 'OBJECTS'];

  const filtered = selectedCategory === 'ALL'
    ? products
    : products.filter(p => p.category?.toUpperCase() === selectedCategory);

  return (
    <section 
      id="archive"
      className="w-full py-28 sm:py-36 bg-white text-[#171717] border-b border-[#D8D4CE]"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A14F39] block mb-2">
              CURATED CATALOGUE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#171717]">
              {sectionData?.title || 'The Permanent Collection.'}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#74716C] leading-relaxed">
              {sectionData?.description || 'Six permanent forms engineered for enduring presence. Produced in strictly limited annual editions.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-[#F4F2EE] border border-[#D8D4CE] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#171717] text-white font-medium shadow-sm'
                    : 'text-[#74716C] hover:text-[#171717]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((prod, idx) => {
            const isCompared = isProductCompared(prod.id);
            return (
              <div
                key={prod.id}
                className="group rounded-3xl bg-[#F4F2EE] border border-[#D8D4CE] overflow-hidden flex flex-col justify-between hover:border-[#171717]/40 transition-all duration-300"
              >
                {/* Visual Stage */}
                <div className="relative aspect-[4/3] p-8 flex items-center justify-center bg-white overflow-hidden">
                  <img
                    src={prod.primary_image || 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80'}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#F4F2EE] border border-[#D8D4CE] text-[#171717]">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-black/5 text-[#74716C]">
                      {prod.edition_year || '2026'}
                    </span>
                  </div>
                </div>

                {/* Information Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A14F39] block mb-1">
                      {prod.category} · Ref. {prod.sku || `MONO-00${idx + 1}`}
                    </span>
                    <h3 className="text-xl font-bold text-[#171717]">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-[#74716C] mt-2 line-clamp-2 leading-relaxed">
                      {prod.short_description || 'Sculptural architectural object carved from solid sustainable timber with custom hardware.'}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D8D4CE]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#74716C]">Edition Price:</span>
                      <strong className="text-base font-bold text-[#171717]">
                        ${prod.price?.toLocaleString()}
                      </strong>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/products/${prod.slug}`}
                        className="flex-1 py-2 rounded-full bg-[#171717] text-white text-xs font-medium text-center hover:bg-black transition-all"
                      >
                        Inspect Object
                      </Link>
                      <button
                        type="button"
                        onClick={() => addToCompare(prod)}
                        className={`p-2 rounded-full border transition-all ${
                          isCompared
                            ? 'bg-[#A14F39] border-[#A14F39] text-white'
                            : 'bg-white border-[#D8D4CE] text-[#74716C] hover:text-[#171717] hover:border-[#171717]'
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

export default CollectionArchive;
