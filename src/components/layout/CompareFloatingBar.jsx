import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, X, ArrowRight } from 'lucide-react';
import { useCompare } from '../../context/CompareContext';

export const CompareFloatingBar = () => {
  const { comparedProducts, removeFromCompare, clearCompare } = useCompare();

  if (comparedProducts.length === 0) return null;

  return (
    <div className="fixed bottom-6 inset-x-0 z-40 px-4 pointer-events-none">
      <div className="max-w-3xl mx-auto rounded-full bg-[#171717]/95 backdrop-blur-xl border border-white/20 p-2 sm:p-2.5 shadow-2xl flex items-center justify-between pointer-events-auto text-white">
        
        {/* Left: Indicator & Thumbnails */}
        <div className="flex items-center gap-3 pl-2">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Scale className="w-4 h-4 text-[#A14F39]" />
            <span className="font-semibold">{comparedProducts.length}/3</span>
            <span className="text-[#A8A7A4] hidden sm:inline">Objects Selected</span>
          </div>

          <div className="flex items-center gap-2 pl-2 border-l border-white/20">
            {comparedProducts.map((p) => (
              <div 
                key={p.id}
                className="relative group w-8 h-8 rounded-full bg-white/10 border border-white/20 p-0.5 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={p.primary_image || 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=200&q=80'}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => removeFromCompare(p.id)}
                  className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                  title="Remove"
                >
                  <X className="w-3 h-3 text-[#A14F39]" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 pr-1">
          <button
            type="button"
            onClick={clearCompare}
            className="text-xs text-[#A8A7A4] hover:text-white px-2.5 py-1 transition-colors"
          >
            Clear
          </button>

          <Link
            to="/compare"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#A14F39] text-white text-xs font-medium hover:bg-[#8D4431] transition-all shadow-md"
          >
            <span>Compare Studio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompareFloatingBar;
