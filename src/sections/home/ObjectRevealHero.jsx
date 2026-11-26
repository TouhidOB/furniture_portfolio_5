import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Eye, ArrowRight, Scale, RotateCw, Layers, ShieldCheck } from 'lucide-react';
import ObjectRevealEngine from '../../components/three/ObjectRevealEngine';
import { useCompare } from '../../context/CompareContext';

export const ObjectRevealHero = ({ sectionData, product }) => {
  const { addToCompare, isProductCompared } = useCompare();
  const [isRevealDone, setIsRevealDone] = useState(false);

  const heroProduct = product || {
    id: 1,
    name: 'MONO 001 Lounge Chair',
    slug: 'mono-001-lounge-chair',
    category: 'Chairs',
    price: 3650,
    edition_year: '2026',
    primary_material: 'American Black Walnut & Tuscan Leather',
    primary_image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
  };

  const isCompared = isProductCompared(heroProduct.id);

  return (
    <section 
      id="hero"
      className="relative w-full min-h-screen bg-[#171717] text-[#F4F2EE] pt-28 pb-16 flex flex-col justify-between overflow-hidden border-b border-white/10"
    >
      {/* 1. Gallery Eyebrow & Hero Title */}
      <div className="max-w-content mx-auto px-6 md:px-12 w-full z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#A14F39] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#A14F39]" />
              <span>{sectionData?.eyebrow || 'COLLECTIBLE OBJECT NO. 001'}</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-[0.98]">
              {sectionData?.title || 'MONO 001'}
            </h1>
            
            <p className="mt-3 text-base sm:text-lg text-[#A8A7A4] font-normal max-w-xl">
              {sectionData?.subtitle || 'Sculptural steam-bent walnut shell anchored by cast architectural bronze. The Art of Less.'}
            </p>
          </div>

          {/* Quick Specifications Tag */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-[#74716C] block uppercase">Provenance</span>
              <strong className="text-white block mt-0.5">Atelier Copenhagen</strong>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-[#74716C] block uppercase">Production Run</span>
              <strong className="text-white block mt-0.5">50 Numbered Pieces</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Signature 8-State Object Reveal Engine */}
      <div className="max-w-content mx-auto px-6 md:px-12 w-full my-auto py-4 z-10">
        <ObjectRevealEngine
          product={heroProduct}
          onComplete={() => setIsRevealDone(true)}
        />
      </div>

      {/* 3. Bottom Bar: Compare Trigger & Direct Acquisition */}
      <div className="max-w-content mx-auto px-6 md:px-12 w-full z-20">
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-[#A8A7A4]">
              Starting at <strong className="text-white text-base font-bold">${heroProduct.price?.toLocaleString()}</strong>
            </span>
            <span className="text-xs font-mono text-[#74716C]">|</span>
            <span className="text-xs font-mono text-[#A8A7A4]">
              Lead Time: 6–8 Weeks Handcrafted
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => addToCompare(heroProduct)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono transition-all border ${
                isCompared
                  ? 'bg-[#A14F39] text-white border-[#A14F39]'
                  : 'bg-white/10 text-white hover:bg-white/20 border-white/20'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{isCompared ? 'Added to Compare' : 'Add to Compare'}</span>
            </button>

            <Link
              to={`/products/${heroProduct.slug}`}
              className="flex items-center gap-1.5 px-6 py-2 rounded-full bg-[#A14F39] text-white text-xs font-medium hover:bg-[#8D4431] transition-all shadow-md"
            >
              <span>Examine Object</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
};

export default ObjectRevealHero;
